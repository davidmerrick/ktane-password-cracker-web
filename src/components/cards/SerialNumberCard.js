import React, { Component } from "react";
import SerialNumberField from "../fields/SerialNumberField";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
  FormGroup
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  updateAaBatteries,
  updateDBatteries,
  updateParallelPort,
  updateStrikes
} from "../../actions/Actions";

const batteries = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  }
];

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateAaBatteries: newCount => dispatch(updateAaBatteries(newCount)),
  updateDBatteries: newCount => dispatch(updateDBatteries(newCount)),
  updateParallelPort: value => dispatch(updateParallelPort(value)),
  updateStrikes: value => dispatch(updateStrikes(value))
});

class SerialNumberCard extends Component {
  constructor(props) {
    super(props);
    this.updateAaBatteries = this.updateAaBatteries.bind(this);
    this.updateDBatteries = this.updateDBatteries.bind(this);
    this.updateParallelPort = this.updateParallelPort.bind(this);
    this.updateStrikes = this.updateStrikes.bind(this);
  }
  updateAaBatteries(e) {
    this.props.updateAaBatteries(e.target.value);
  }
  updateDBatteries(e) {
    this.props.updateDBatteries(e.target.value);
  }
  updateParallelPort(e) {
    this.props.updateParallelPort(e.target.checked);
  }
  updateStrikes(e) {
    this.props.updateStrikes(e.target.value);
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Serial, Batteries, Ports, and Strikes
          </Typography>
          <SerialNumberField />
          <FormGroup row>
            <TextField
              select
              name="aaBatteries"
              label="AA Batteries"
              value={this.props.serialNumberReducer.aaBatteries}
              onChange={this.updateAaBatteries}
              margin="normal"
            >
              {batteries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          <FormGroup row>
            <TextField
              select
              name="dBatteries"
              label="D Batteries"
              value={this.props.serialNumberReducer.dBatteries}
              onChange={this.updateDBatteries}
              margin="normal"
            >
              {batteries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.props.serialNumberReducer.parallelPort}
                  onChange={this.updateParallelPort}
                  value="parallelPort"
                />
              }
              label="Parallel Port"
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              label="Strikes"
              onChange={this.updateStrikes}
              value={this.props.serialNumberReducer.strikes}
              type="number"
            />
          </FormGroup>
        </CardContent>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerialNumberCard);
