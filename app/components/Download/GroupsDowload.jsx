"use client";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const GroupsDowload = () => {
  const handleDownload = () => {
    const fileUrl =
      "/assets/files/parish_-_planned_giving_drive_-_weekend_3_-_volunteer_sign-up_form.docx"; // path inside your public/ folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download =
      "parish_-_planned_giving_drive_-_weekend_3_-_volunteer_sign-up_form.docx"; // name shown when downloading
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

export default GroupsDowload;
