import { Box, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

function MessageComponent({ message, user }) {
  const { sender, content, attachments = [], createdAt } = message;
  const isSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: isSender ? "flex-end" : "flex-start",
        backgroundColor: isSender ? "#2694ab" : "#f1f1f1",
        color: isSender ? "#fff" : "#000",
        padding: "0.5rem",
        width: "fit-content",
        maxWidth: "60%",
        borderRadius: "10px",
        margin: "0.5rem",
      }}
    >
      {!isSender && (
        <Typography color="#2694ab" fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && (
        <Typography
          style={{
            margin: "0.5rem 0",
            fontSize: "1rem",
            lineHeight: "1.5",
          }}
        >
          {content}
        </Typography>
      )}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box
              key={index}
              src={attachment.url}
              alt="attachment"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
                marginBottom: "0.5rem",
              }}
            >
              <a
                href=""
                target="_blank"
                download
                style={{ color: "black" }}
              >
                <RenderAttachment file={file} url={url} />
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color="text.secondary">
        {timeAgo}
      </Typography>
    </div>
  );
}

export default MessageComponent;
