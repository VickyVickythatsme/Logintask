import React from "react";
import PageBox from "../Components/PageBox";
import PageTitle from "../Components/PageTitle";
import PageButton from "../Components/PageButton";
import PageContent from "../Components/PageContent";

export default function MoreMenu() {
  return (
    <PageBox>
      <PageTitle title="More Nested Menu Examples here" />
      <PageContent>
        <p>Nested Menu for Animals</p>
        <PageButton
          buttonName="Animals"
          buttonFunction={() => {
            window.location.href = "/animals";
          }}
        />
        <p> Nested Menu for Food </p>
        <PageButton
          buttonName="Food"
          buttonFunction={() => {
            window.location.href = "/food";
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
