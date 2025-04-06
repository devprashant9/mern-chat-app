import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { grayColor, orange } from "../constants/color";
import { Stack } from "@mui/system";
import { IconButton } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user1 = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/300",
  _id: "999",
};

function Chat() {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        sx={{
          boxSizing: "border-box",
          padding: "1.5rem",
          bgcolor: "",
          height: "90%",
          overflowX: "hidden",
          overflowY: "auto",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        {sampleMessages.map((message, index) => {
          return <MessageComponent message={message} user={user1} />;
        })}
      </Stack>

      <form
        style={{
          height: "10%",
          backgroundColor: "#ffffff",
          padding: "0.5rem 1rem",
          borderTop: "1px solid #ddd",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          spacing={1.5}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1rem",
              rotate: "0deg",
              color: "#666",
              "&:hover": {
                color: orange,
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type your message here..." type="text" />

          <IconButton
            type="submit"
            sx={{
              rotate: "-45deg",
              bgcolor: orange,
              color: "white",
              padding: "0.6rem",
              borderRadius: "50%",
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)",
              transition: "0.2s ease",
              "&:hover": {
                bgcolor: "#e65100",
              },
              "&:active": {
                bgcolor: "#fff",
                color: orange,
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
}

export default AppLayout()(Chat);
