"use client";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const ParishVisionDowload = () => {
  const handleDownload = () => {
    const fileUrl =
      "/assets/files/message_re_foodbank_donal_osullivan_march_2020.pdf"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "message_re_foodbank_donal_osullivan_march_2020.pdf"; // name shown when downloading
    link.click();
  };
  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-3">
        <FaRegFileAlt size={30} />
        <button onClick={handleDownload} className="custom-btn">
          Download File
        </button>
      </div>
    </>
  );
};

export default ParishVisionDowload;
