import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/layout";
import HomePageScreen from "./Screens/Homepage/HomePageScreen";
import { useRouter } from "next/router";
import RequireAuth from "../components/Required Auth/RequireAuth";
import Loader from "../components/Loader/Loader";

function Index() {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    setToken(storedToken);
    if (!storedToken) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.MERCURIAL_BACKEND_API}/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUserDetails(userData);
        } else if (response.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          console.error("Error fetching user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserDetails();
    }
  }, [token]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : token ? (
        <HomePageScreen userDetails={userDetails} />
      ) : null}
    </Layout>
  );
}

export default RequireAuth(Index);
