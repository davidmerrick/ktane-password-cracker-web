import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

class SimpleWiresCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Wires
          </Typography>
          Add a wire
        </CardContent>
      </Card>
    );
  }
}

export default SimpleWiresCard;
