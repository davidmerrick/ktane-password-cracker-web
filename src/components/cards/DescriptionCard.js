import React, { Component } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

class DescriptionCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About
          </Typography>
          This app assists in solving modules in{" "}
          <a href="https://keeptalkinggame.com/">
            "Keep Talking and Nobody Explodes."
          </a>
          <br />
          <br />
          <Typography gutterBottom variant="h5" component="h2">
            Links
          </Typography>
          <ul>
            <li>
              <a href="http://www.bombmanual.com/manual/1/pdf/Bomb-Defusal-Manual_1.pdf">
                Bomb manual
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    );
  }
}

export default DescriptionCard;
