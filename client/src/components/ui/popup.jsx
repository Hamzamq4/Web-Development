import React, { useState } from "react";
function Popup({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;
  const mediaUrl =
    project.properties.Media.files.length > 0
      ? project.properties.Media.files[0].file.url
      : "";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2 className="text-2xl font-bold align-middle">
          {project.properties.ProjectName.title[0].plain_text}
        </h2>

        {mediaUrl && (
          <img
            src={mediaUrl}
            alt="Project Media"
            style={{ maxWidth: "10%", borderRadius: "8px" }}
          />
        )}
        <p>{project.properties.LongSum.rich_text[0].plain_text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default Popup;
