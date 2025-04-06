import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotification } from "../../constants/SampleData";

function Notifications() {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log(id);
  };
  return (
    <Dialog open>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        width={{ xs: "100%", sm: "25rem", md: "30rem" }}
        height={{ xs: "100%", sm: "auto" }}
        direction={"column"}
      >
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotification.length > 0 ? (
          <>
            {sampleNotification.map((notification) => (
              <NotificationItem
                key={notification._id}
                sender={notification.sender}
                _id={notification._id}
                handler={friendRequestHandler}
              />
            ))}
          </>
        ) : (
          <Typography variant="body2" textAlign={"center"}>
            No Notifications
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
}

const NotificationItem = memo(({ sender, id, handler }) => {
  const { name, _id, avatar } = sender || {};
  return (
    <ListItem>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        alignItems={"center"}
        width={"100%"}
      >
        <Avatar src={avatar} alt={name} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography component="span" fontWeight="bold">
            {sender.name}
          </Typography>{" "}
          sent you a friend request
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
