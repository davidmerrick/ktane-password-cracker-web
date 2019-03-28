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
import DeleteIcon from "@material-ui/icons/Delete";
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

const MAX_WIRES = 6;
const MIN_WIRES = 3;
const INITIAL_WIRES = [WIRE_WHITE, WIRE_WHITE, WIRE_WHITE];

class SimpleWiresCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wires: INITIAL_WIRES
    };
    this.addWire = this.addWire.bind(this);
    this.removeWire = this.removeWire.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  addWire() {
    const { wires } = this.state;
    if (wires.length >= MAX_WIRES) {
      console.warn(`Only ${MAX_WIRES} wires are allowed.`);
      return;
    }
    wires.push(WIRE_WHITE);
    this.setState({
      wires: wires
    });
  }
  removeWire() {
    const { wires } = this.state;
    if (wires.length === MIN_WIRES) {
      console.warn(`No less than ${MIN_WIRES} wires are allowed.`);
      return;
    }
    wires.pop();
    this.setState({
      wires: wires
    });
  }
  handleSelect(e) {
    const { wires } = this.state;
    wires[e.target.name] = e.target.value;
    this.setState({
      wires: wires
    });
  }
  renderWires() {
    let handleSelect = this.handleSelect;
    return this.state.wires.map((wire, index) => (
      <FormGroup key={index} row>
        <TextField
          select
          name={index.toString()}
          label="Wire Color"
          value={wire}
          onChange={handleSelect}
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
  solveThreeWires(){
    const { wires } = this.state;
    if (wires.indexOf(WIRE_RED) === -1) {
      return "Cut the second wire.";
    } else if (wires[wires.length - 1].indexOf(WIRE_WHITE) !== -1) {
      return "Cut the last wire.";
    } else if (
      wires.filter(wire => wire.indexOf(WIRE_BLUE) !== -1).length > 1
    ) {
      return "Cut the last blue wire.";
    } else {
      return "Cut the last wire.";
    }
  }
  countWires(wireColor){
    const { wires } = this.state;
    return wires.reduce((pre, cur) => (cur.indexOf(wireColor) !== -1) ? ++pre : pre, 0);
  }
  solveFourWires(){
    const { wires } = this.state;
    if (wires.filter(wire => wire.indexOf(WIRE_RED) !== -1).length > 1) {
      return "If the last digit of the serial number is odd, cut the last red wire.";
    } else if(wires[wires.length - 1].indexOf(WIRE_YELLOW) !== -1 && wires.indexOf(WIRE_RED) === -1){
      return "Cut the first wire.";
    } else if(wires.filter(wire => wire.indexOf(WIRE_BLUE) !== -1).length === 1){
      return "Cut the first wire.";
    } else if(wires.filter(wire => wire.indexOf(WIRE_YELLOW) !== -1).length > 1){
      return "Cut the last wire.";
    } else {
      return "Cut the second wire.";
    }
  }
  solveFiveWires(){
    const { wires } = this.state;
    if (wires[wires.length - 1].indexOf(WIRE_BLACK) !== -1) {
      return "If the last digit of the serial number is odd, cut the fourth wire.";
    } else if(this.countWires(WIRE_RED) === 1 && this.countWires(WIRE_YELLOW) > 1){
      return "Cut the first wire.";
    } else if(wires.indexOf(WIRE_BLACK) === -1) {
      return "Cut the second wire.";
    } else {
      return "Cut the first wire.";
    }
  }
  solveSixWires(){
    const { wires } = this.state;
    if (wires.indexOf(WIRE_YELLOW) === -1) {
      return "If the last digit of the serial number is odd, cut the third wire.";
    } else if(this.countWires(WIRE_YELLOW) === 1 && this.countWires(WIRE_WHITE) > 1) {
      return "Cut the fourth wire.";
    } else if (wires.indexOf(WIRE_RED) === -1) {
      return "Cut the last wire.";
    } else {
      return "Cut the fourth wire.";
    }
  }
  getSolution() {
    let { wires } = this.state;
    switch(wires.length){
      case 3: 
        return this.solveThreeWires();
      case 4: 
        return this.solveFourWires();
      case 5: 
        return this.solveFiveWires();
      case 6: 
        return this.solveSixWires();
      default:
        return null;
    }
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
          <Fab
            variant="extended"
            aria-label="Remove"
            size="medium"
            onClick={this.removeWire}
          >
            <DeleteIcon />
            Remove a wire
          </Fab>
          <br />
          <br />
          <br />
          Solution: {this.getSolution()}
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(SimpleWiresCard);
