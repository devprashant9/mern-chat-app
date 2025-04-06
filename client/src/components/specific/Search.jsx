import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/SampleData";
import { useState } from "react";

function Search() {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);

  const isLoadingSendFriendRequest = false;

  const addFriendHandler = (userId) => {
    console.log(userId);
  };
  return (
    <Dialog open>
      <Stack
        padding={"2rem"}
        width={{ xs: "100%", sm: "25rem", md: "30rem" }}
        height={{ xs: "100%", sm: "auto" }}
        direction={"column"}
      >
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search;
