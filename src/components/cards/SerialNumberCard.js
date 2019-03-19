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
  FormGroup,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

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

class SerialNumberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aaBatteries: 0,
      dBatteries: 0,
      parallelPort: false
    };
    this.simpleAction = this.simpleAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  simpleAction(e) {
    this.props.simpleAction();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  toggleSwitch(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Serial and Batteries
          </Typography>
          <SerialNumberField />
          <FormGroup row>
            <TextField
              select
              name="aaBatteries"
              label="AA Batteries"
              value={this.state.aaBatteries}
              onChange={this.handleChange}
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
              value={this.state.dBatteries}
              onChange={this.handleChange}
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
                  checked={this.state.parallelPort}
                  onChange={this.toggleSwitch}
                  value="parallelPort"
                />
              }
              label="Parallel Port"
            />
          </FormGroup>
          <FormGroup row>
            <Button onClick={this.simpleAction}>Test Redux Action</Button>
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
