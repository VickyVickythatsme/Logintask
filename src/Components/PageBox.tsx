import React, { ReactNode } from "react";
import Box from "@material-ui/core/Box";

export default function PageBox({ children }: {children:ReactNode}) {
  return (
    <Box
      style={{
        boxShadow: "0px 24px 40px rgba(124, 124, 124, 0.25)",
        width: "70%",
        float: "right",
        height: "800px",
        margin: "3%",
      }}
    >
      {children}
    </Box>
  );
}
