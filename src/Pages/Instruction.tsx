import PageBox from "../Components/PageBox";
import PageTitle from "../Components/PageTitle";
import PageButton from "../Components/PageButton";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import { userList } from "../Assets/UserList";
import PageContent from "../Components/PageContent";

export default function Insturction() {
  return (
    <PageBox>
      <PageTitle title="Instruction" />
      <PageContent>
        {userList.map((item, index) => {
          return (
            <Grow in={true} timeout={(index + 1) * 1000}>
              <Box
                sx={{
                  marginBottom: "5%",
                  boxShadow: "5px 5px 5px 5px rgba(124, 124, 124, 0.25)",
                  padding: "2%",
                  textAlign: "center",
                }}
              >
                <p> Username: {item.username} </p>
                <p>Password: {item.password} </p>
              </Box>
            </Grow>
          );
        })}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <PageButton
            buttonName="Sign In"
            buttonFunction={() => {
              window.location.href = "/signin";
            }}
          />
          <PageButton
            buttonName="Cancel"
            buttonFunction={() => {
              window.location.href = "/";
            }}
          />
        </Box>
      </PageContent>
    </PageBox>
  );
}
