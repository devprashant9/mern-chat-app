import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

function NewGroup() {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMmbers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setMembers((prev) => prev.map((user) => (user._id === id ? { ...user, isAdded: !user.isAdded } : user)));
    // Toggle the selected member in the selectedMmbers array
    // If the member is already selected, remove it from the array; otherwise, add it
    // This is a more readable way to toggle the selected member
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const groupName = useInputValidation("");

  const submitHandler = () => {
    console.log(groupName.value);
  };

  const closeHandler = () => {
    // Handle closing the dialog (if applicable)
  } 

  return (
    <Dialog open onClose={closeHandler}>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        width={{ xs: "100%", sm: "25rem", md: "30rem" }}
        height={{ xs: "100%", sm: "auto" }}
        direction={"column"}
      >
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField
          label={"Group Name"}
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography
          sx={{
            marginTop: "1rem",
          }}
          variant="body1"
        >
          Members
        </Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMmbers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          spacing={1}
          mt={2}
        >
          <Button variant="outlined" color="error" fullWidth>
            Cancel{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={submitHandler}
          >
            Create{" "}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroup;
