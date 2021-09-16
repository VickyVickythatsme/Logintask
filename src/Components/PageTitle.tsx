import React from "react";
import Box from "@material-ui/core/Box";

function PageTitle({title}:{title:string}) {
  return (
    <Box
      sx={{
        fontSize: "30px",
        color: "#555555",
        fontWeight: "bolder",
        marginLeft: "8%",
        marginTop: "8%",

      }}
    >
      {title}
    </Box>
  );
};
export default PageTitle;
