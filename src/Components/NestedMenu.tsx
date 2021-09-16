import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

interface Node {
  buttonName: string;
  onclickhref?: string;
  children?: Node[];
}
interface Nodes {
  menuNodes: Node[];
  level: number;
}

function NestedMenu({ menuNodes, level }: Nodes) {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {menuNodes.map((item) => {
        let margin = level * 20 + "px";
        let path: string =
          item.onclickhref === undefined ? "" : item.onclickhref;
        return (
          <div>
            {path !== "" ? (
              <ListItem button style={{ marginLeft: margin }}>
                <ListItemText
                  primary={item.buttonName}
                  onClick={() => {
                    window.location.href = path;
                  }}
                />
              </ListItem>
            ) : (
              <ListItem button style={{ marginLeft: margin }}>
                <ListItemText primary={item.buttonName} />
              </ListItem>
            )}

            {item.children && (
              <NestedMenu menuNodes={item.children} level={level + 1} />
            )}
          </div>
        );
      })}
    </List>
  );
}

export default NestedMenu;
