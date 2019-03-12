import React, { Component } from "react";
import { TextField } from "@material-ui/core";

const SERIAL_MAX_LENGTH = 6;

class SerialNumberField extends Component {
  constructor() {
    super();
    this.state = {
      serial: null,
      helperText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.value.indexOf(" ") !== -1) {
      this.setState({
        helperText: "No spaces allowed in serial"
      });
    } else {
      this.setState({
        helperText: "",
        [e.target.name]: e.target.value.trim()
      });
    }
  }
  render() {
    return (
      <TextField
        label="Serial"
        name="serial"
        helperText={this.state.helperText}
        error={this.state.helperText !== ""}
        inputProps={{ maxLength: SERIAL_MAX_LENGTH }}
        onChange={this.handleChange}
      />
    );
  }
}

export default SerialNumberField;
