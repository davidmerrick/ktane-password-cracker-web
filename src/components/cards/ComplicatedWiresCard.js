import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import wires from "../../img/complicated_wires.png";

class ComplicatedWiresCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Complicated Wires
          </Typography>
          <img src={wires} width="300px" alt="cheatsheet" />
        </CardContent>
      </Card>
    );
  }
}

export default ComplicatedWiresCard;
