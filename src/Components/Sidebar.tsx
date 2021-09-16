import React from "react";
import { Box } from "@material-ui/core";
import { sidebar } from "../Assets/sidebar";
import NestedMenu from "../Components/NestedMenu";

export default function Sidebar() {
  return (
    <Box
      style={{
        width: "15%",
        padding: "2%",
        marginLeft: "3%",
        position: "fixed",
      }}
    >
      <NestedMenu menuNodes={sidebar} level={0}/>
    </Box>
  );
}
