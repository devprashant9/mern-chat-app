import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => {
    return import("../specific/Search")
});

const NotificationsDialog = lazy(() => {
    return import("../specific/Notifications")
});

const NewGroupsDialog = lazy(() => {
    return import("../specific/NewGroup")
});

function Header() {

    const [isSearch, setIsSearch] = useState(false);
    const [isNotifications, setIsNotifications] = useState(false);
    const [isNewGroups, setIsNewGroups] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {};

  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroups((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const logoutHandler = () => {};

  const openNotification = () => {
    setIsNotifications((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ flexGrow: "1" }} height={"4rem"}>
        <AppBar position="static" sx={{ backgroundColor: orange }}>
          <Toolbar>
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              ChitChat 🖐️
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: "1" }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearchDialog}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotifications && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )}
      {isNewGroups && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupsDialog />
        </Suspense>
      )}
    </>
  );
}

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
