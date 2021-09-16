import React from "react";
import PageBox from "../Components/PageBox";
import PageTitle from "../Components/PageTitle";
import PageButton from "../Components/PageButton";
import PageContent from "../Components/PageContent";

export default function User() {
  return (
    <PageBox>
      <PageTitle title="Please read instruction to Sign in" />
      <PageContent>
        <p> Get Username and password by clicking instruction </p>
        <PageButton
          buttonName="Instruction"
          buttonFunction={() => {
            window.location.href = "/instruction";
          }}
        />
        <p> Sign in here </p>
        <PageButton
          buttonName="Sign In"
          buttonFunction={() => {
            window.location.href = "/signin";
          }}
        />
        <p> Return to Home page </p>
        <PageButton
          buttonName="Cancel"
          buttonFunction={() => {
            window.location.href = "/";
          }}
        />
      </PageContent>
    </PageBox>
  );
}
