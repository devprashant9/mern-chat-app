import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidator } from "../utils/UserNameValidator";
import { userEmailValidator } from "../utils/EmailValidator";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const userName = useInputValidation("", userNameValidator);
  const email = useInputValidation("", userEmailValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  const handleUserLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(31, 126, 250, 0.5), rgba(21, 95, 243, 0.92))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Welcome Back, Chatter😁</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleUserLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="UserName"
                  margin="normal"
                  variant="outlined"
                  value={userName.value}
                  onChange={userName.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button
                  fullWidth
                  variant="text"
                  type="submit"
                  onClick={handleLogin}
                >
                  Register
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Welcome to ChitChat🖐️</Typography>
              <form
                style={{
                  width: "100%",
                  margin: "0.5rem",
                  // backgroundColor: "pink"
                }}
                onSubmit={handleSignUp}
              >
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  backgroundColor=""
                  position={"relative"}
                  width={"10rem"}
                  margin={"auto"}
                >
                  <Avatar
                    sx={{
                      width: "5rem", // Reduced size
                      height: "5rem", // Reduced size
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0.3rem",
                      right: "2rem",
                      backgroundColor: "rgba(245, 245, 245, 0.5)",
                      ":hover": {
                        backgroundColor: "rgba(15, 15, 15, 0.2)",
                      },
                      boxShadow: 2,
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon sx={{ fontSize: "1rem" }} />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    color="error"
                    variant="caption"
                    width={"fit-content"}
                    display={"block"}
                    m={"1rem auto"}
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="UserName"
                  margin="normal"
                  variant="outlined"
                  value={userName.value}
                  onChange={userName.changeHandler}
                />
                {userName.error && (
                  <Typography color="error" variant="caption">
                    {userName.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                  value={email.value}
                  onChange={email.changeHandler}
                />
                {email.error && (
                  <Typography color="error" variant="caption">
                    {email.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  SignUp
                </Button>
                <Typography textAlign={"center"} m={"0.2rem"}>
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  type="submit"
                  onClick={handleLogin}
                >
                  LogIn Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
