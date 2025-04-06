import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

function ChatList({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 0,
    },
  ],
  handleDeleteChat,
}) {
  return (
    <Stack
      sx={{
        w, // or your preferred width
        height: "100%",
        borderRight: "2px solid rgba(0,0,0,0.1)",
        boxShadow: "4px 0 10px -4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        borderTopRightRadius: "1rem",
        overflowX: "hidden",
        overflowY: "auto",
      }}
      direction={"column"}
    >
      {chats?.map((data) => {
        const { avatar, name, _id, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) =>
          onlineUsers.includes(member)
        );

        return (
          <ChatItem
            index={0}
            newMessageAlert={newMessageAlert}
            name={name}
            avatar={avatar}
            _id={_id}
            groupChat={groupChat}
            sameSender={_id === chatId}
            isOnline={isOnline}
            handleDeleteChat={handleDeleteChat}
            key={_id}
          />
        );
      })}
    </Stack>
  );
}

export default ChatList;
