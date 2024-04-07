import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
import axios from "axios";

export async function getServerSideProps({ params }) {
  return {
    props: {
      entry: {
        id: params.id,
      },
    },
  };
}

export default function EntryPage({ entry }) {
  const router = useRouter();
  const [entryData, setEntryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEntryData() {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.MERCURIAL_BACKEND_API}/entries/${entry.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setEntryData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getEntryData();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `${process.env.MERCURIAL_BACKEND_API}/entries/${entry.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        router.push("/treatment-diary");
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  if (!entryData) {
    return (
      <div
        className="spinner-container"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ClipLoader color="#214493" loading={loading} size={50} />
      </div>
    );
  }

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 treatment-diary-main-12">
            <div className="treatment_main_container">
              <div className="treatmentDiary-main-container">
                <div>
                  <Link href="/treatment-diary">
                    <img
                      src="/back-arrow.svg"
                      alt="back-arrow"
                      width={20}
                      height={20}
                      className="treatmentDiary-back-button"
                    />
                  </Link>
                </div>
                <div className="treatmentDiary_display_text_container">
                  <h1>Treatment Diary</h1>
                </div>
                <div className="treatmentDiary_display_image_container">
                  <img src="/export.svg" alt="back-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="treatment_main_container_1">
              <div className="single-entry-main-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h1>
                    {new Date(entryData.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h1>
                  <i
                    className="fa-solid fa-trash"
                    style={{ paddingTop: "2px", color: "#11245b" }}
                    onClick={handleDelete}
                  ></i>
                </div>
                <p>{entryData.entryText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
