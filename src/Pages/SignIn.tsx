import { Box,Fade } from "@material-ui/core";
import { useState } from "react";
import { LoginResultNotice } from "../Components/LoginResultNotice";
import { userList } from "../Assets/UserList";
import PageTitle from "../Components/PageTitle";
import PageBox from "../Components/PageBox";
import InputUsername from "../Components/InputUsername";
import InputPassword from "../Components/InputPassword";
import PageContent from "../Components/PageContent";
import PageButton from "../Components/PageButton";

export default function Signup() {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [{ notice, message }, setNotice] = useState({
    message: "",
    notice: false,
  });
  function compare() {
    if (
      userList.some(
        (item) => item.username === username && item.password === password
      )
    ) {
      setNotice({
        message: "Login Successful",
        notice: true,
      });
    } else {
      setNotice({
        message: "Incorrect username or password",
        notice: true,
      });
    }

    setTimeout(function () {
      setNotice({
        message,
        notice: false,
      });
    }, 3000);
  }
  return (
    <Fade in={true} timeout={500}>
      <PageBox>
        <PageTitle title="Sign In" />
        <PageContent>
          <form data-test="signinForm" action="/">
            <InputUsername
              name="username"
              usernameValue={username}
              onchange={(event) =>
                setCredentials({
                  username: event.target.value,
                  password,
                })
              }
            />
            <br />
            <InputPassword
              name="password"
              passwordValue={password}
              onchange={(event) =>
                setCredentials({
                  username,
                  password: event.target.value,
                })
              }
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "80%",
                marginTop: "5%",
              }}
            >
              <PageButton buttonName="submit" buttonFunction={compare} />

              <PageButton
                buttonName="Cancel"
                buttonFunction={() => {
                  window.location.href = "/";
                }}
              />
            </Box>
          </form>

          <Fade in={notice} timeout={500}>
            <LoginResultNotice>{message}</LoginResultNotice>
          </Fade>
        </PageContent>
      </PageBox>
    </Fade>
  );
}
