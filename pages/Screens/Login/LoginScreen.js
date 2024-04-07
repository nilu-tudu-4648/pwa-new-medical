import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import ClipLoader from "react-spinners/ClipLoader";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DisclaimerPopUp from "../../../components/Disclaimer PopUp/DisclaimerPopUp";

const LoginScreen = () => {
  const { data: session } = useSession();
  if (session) {
    const { user } = session;
    const { email, name, image } = user;
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Image URL:", image);
  } else {
    console.log("There is no user");
  }
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);

  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (storedToken) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const emailAddress = formData.get("emailAddress");
    const password = formData.get("password");

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.MERCURIAL_BACKEND_API}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailAddress,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
        setOpen(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  let googleToken = session?.user?.customToken;
  useEffect(() => {
    if (googleToken) {
      localStorage.setItem("token", googleToken);
      router.push("/");
    }
  }, [googleToken]);

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    signIn("google");
  };

  const handleAppleLogin = () => {
    setAppleLoading(true);
    signIn("apple");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-main-container">
              <form onSubmit={handleSubmit}>
                <div className="logo-login-container">
                  <Image
                    src="/mercurial.png"
                    alt="mercurial logo"
                    width={160}
                    height={135}
                  />
                </div>

                <div className="heading-login-container">
                  <h1>Welcome!</h1>
                  <p>Login or signup to get your treatments done.</p>
                </div>
                <div className="input-login-container">
                  <input
                    minLength="3"
                    name="emailAddress"
                    id="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    required
                  ></input>
                </div>
                <div className="input-login-container">
                  <input
                    minLength="5"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div className="button-login-container">
                  <button type="submit">
                    {loading ? (
                      <ClipLoader color="#fff" size={20} />
                    ) : (
                      <p style={{ margin: "0" }}>Login</p>
                    )}
                  </button>
                </div>
              </form>
              <div className="login-redirect-container">
                <p>
                  Don't have an account?{" "}
                  <span>
                    {" "}
                    <Link className="link" href="/signup">
                      Signup
                    </Link>
                    <br />
                  </span>
                </p>
              </div>
              <div
                className="login-google-container"
                onClick={handleGoogleLogin}
              >
                <div
                  className="login-google-container-inner"
                  style={{ marginTop: "30px", height: "65px" }}
                >
                  {googleLoading ? (
                    <ClipLoader color="#214493" size={20} />
                  ) : (
                    <>
                      <Image
                        src="/google.png"
                        alt="google-login"
                        width={40}
                        height={40}
                      />
                      <p>Continue with Google</p>
                    </>
                  )}
                </div>
              </div>
              <div
                className="login-google-container"
                onClick={handleAppleLogin}
              >
                <div
                  className="login-google-container-inner"
                  style={{ marginTop: "20px", height: "65px" }}
                >
                  {appleLoading ? (
                    <ClipLoader color="#214493" size={20} />
                  ) : (
                    <>
                      <Image
                        src="/apple-logo.png"
                        alt="apple-login"
                        width={30}
                        height={30}
                      />
                      <p>Continue with Apple ID</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="error"
          style={{
            backgroundColor: "#f44336",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
              style={{ marginLeft: "auto", marginRight: -8 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
      <DisclaimerPopUp/>
    </>
  );
};

export default LoginScreen;
