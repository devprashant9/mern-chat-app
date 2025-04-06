import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import moment from 'moment'

function Profile() {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Hi there ! I am using WhatsApp"} />
      <ProfileCard heading={"Username"} text={"kumarDev"} Icon={<UserNameIcon />}/>
      <ProfileCard heading={"Name"} text={"Prashant Kumar"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment().fromNow('2025-04-06T06:04:36.193Z')} Icon={<CalenderIcon />} />
    </Stack>
  );
}

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      color={"white"}
      textAlign={"center"}
      spacing={"1rem"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="grey">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
