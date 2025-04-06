import React from "react";
import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

function RenderAttachment({ file, url }) {
  switch (file) {
    case "video":
      return (
        <video
          src={url}
          preload="none"
          controls
          style={{
            width: "200%",
            maxWidth: "300px",
            borderRadius: "10px",
            marginBottom: "0.5rem",
          }}
        />
      );
    case "audio":
      return (
        <audio
          src={url}
          preload="none"
          controls
          style={{
            width: "200%",
            maxWidth: "300px",
            borderRadius: "10px",
            marginBottom: "0.5rem",
          }}
        />
      );
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="attachment"
          style={{
            width: "200%",
            maxWidth: "300px",
            borderRadius: "10px",
            marginBottom: "0.5rem",
            objectFit: "contain",
          }}
        />
      );

    default:
      return <FileOpenIcon />;
  }
}

export default RenderAttachment;
