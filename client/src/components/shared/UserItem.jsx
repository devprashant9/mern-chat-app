import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon} from "@mui/icons-material";
import React, { memo } from "react";

function UserItem({ user, handler, handlerIsLoading }) {
  const { name, _id, avatar, isAdded } = user || {};
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
          {name}
        </Typography>
        <IconButton
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default memo(UserItem);
