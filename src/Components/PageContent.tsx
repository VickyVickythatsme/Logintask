import React, { ReactNode } from "react";
import Box from "@material-ui/core/Box";

export default function PageContent({ children }: { children: ReactNode }) {
  return (
    <Box
      style={{
        marginLeft: "15%",
        marginTop: "4%",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#555555",
        width:"50%"
      }}
    >
      {children}
    </Box>
  );
}
