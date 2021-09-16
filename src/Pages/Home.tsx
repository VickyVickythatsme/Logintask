import React from "react";
import { Box } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import PageBox from "../Components/PageBox";
import PageButton from "../Components/PageButton";

export default function Home() {
  return (
    <PageBox>
      <Fade in={true} timeout={500}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#555555",
            }}
          >
            <p>Welcome to Vicky's Coding Test</p>

            <p>This is Home Page</p>
            <PageButton
              buttonName="Sign in"
              buttonFunction={() => {
                window.location.href = "/user";
              }}
            />
            <br />
            <PageButton
              buttonName="More Menu"
              buttonFunction={() => {
                window.location.href = "/moremenu";
              }}
            />
          </Box>
        </Box>
      </Fade>
    </PageBox>
  );
}
