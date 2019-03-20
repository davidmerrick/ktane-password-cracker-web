import React, { Component } from "react";
import {
  Typography,
  Card,
  CardContent,
  Fab,
  FormGroup,
  TextField,
  MenuItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
  WIRE_WHITE,
  WIRE_BLUE,
  WIRE_RED,
  WIRE_YELLOW,
  WIRE_BLACK
} from "../../models/WireColors";
import { connect } from "react-redux";

const wireColors = [
  {
    value: WIRE_WHITE,
    label: "White"
  },
  {
    value: WIRE_RED,
    label: "Red"
  },
  {
    value: WIRE_BLUE,
    label: "Blue"
  },
  {
    value: WIRE_BLACK,
    label: "Black"
  },
  {
    value: WIRE_YELLOW,
    label: "Yellow"
  }
];

const mapStateToProps = state => ({
  ...state
});

const MAX_WIRES = 5;

class SimpleWiresCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wires: []
    };
    this.addWire = this.addWire.bind(this);
  }
  addWire() {
    const { wires } = this.state;
    if (wires.length >= MAX_WIRES) {
      console.error(`Error, only ${MAX_WIRES} wires are allowed.`);
      return;
    }
    wires.push(WIRE_WHITE);
    this.setState({
      wires: wires
    });
  }
  renderWires() {
    return this.state.wires.map((wire, index) => (
      <FormGroup row>
        <TextField
          select
          name={index.toString()}
          label="Wire Color"
          value={wire}
          onChange={this.handleSelect}
          margin="normal"
        >
          {wireColors.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormGroup>
    ));
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Wires
          </Typography>
          {this.renderWires()}
          <Fab
            variant="extended"
            aria-label="Add"
            color="primary"
            size="medium"
            onClick={this.addWire}
          >
            <AddIcon />
            Add a wire
          </Fab>
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(SimpleWiresCard);
