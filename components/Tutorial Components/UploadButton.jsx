import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadButton = ({ handleFileInputClick, setOpen, setErrorMessage,userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [getURL, setGetURL] = useState("");


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && isValidFileType(file)) {
      setSelectedFile(file);
      setError(null);
    } else {
      setSelectedFile(null);
      setError("Invalid file type");
    }
  };

  const isValidFileType = (file) => {
    const validTypes = ["application/zip", "application/pdf"];
    return validTypes.includes(file.type);
  };

  const uploadFileToS3 = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setUploadProgress(0);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        `${process.env.MERCURIAL_BACKEND_API}/upload-file/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(percent);
          },
        }
      );

      setIsUploading(false);
      setUploadProgress(0);
      setGetURL(response.data.url);
      setSelectedFile(null);

      if (response.status === 200) {
        setErrorMessage("File uploaded successfully");
        setOpen(true);
        setTimeout(() => {
          window.location.href = "/profile";
        }, 500);
      }
    } catch (err) {
      setIsUploading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="file-upload-container">
        <div onClick={handleFileInputClick}>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept=".zip,.pdf"
            onChange={handleFileInputChange}
          />

          <div className="file-upload-icon">
            <img src="/upload.svg" alt="file-upload-icon" />
          </div>
          {selectedFile && <p>{selectedFile.name}</p>}
          {!selectedFile && (
            <p>Select file and upload it. Accepted file formats: ZIP, PDF</p>
          )}
        </div>
        <button
          className="upload-button"
          onClick={uploadFileToS3}
          disabled={isUploading}
        >
          Upload Chart
        </button>
        {error && (
          <div
            className="error"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            {error}
          </div>
        )}
        {isUploading && <><p>File uploading...</p><p style={{color:'gray'}}>(Please wait)</p></>}
        {uploadProgress > 0 && (
          <progress value={uploadProgress} max="100">
            {uploadProgress}%
          </progress>
        )}
      </div>
    </>
  );
};

export default UploadButton;
