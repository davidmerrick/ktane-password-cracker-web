import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { updateSerial } from "../../actions/Actions";
import { SERIAL_MAX_LENGTH } from "../../models/SerialNumber";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateSerial: newSerial => dispatch(updateSerial(newSerial))
});

class SerialNumberField extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        helperText: ""
      });
      this.props.updateSerial(e.target.value.trim());
    }
  }
  render() {
    return (
      <TextField
        label="Serial"
        name="serial"
        value={this.props.simpleReducer.serialNumber}
        helperText={this.state.helperText}
        error={this.state.helperText !== ""}
        inputProps={{ maxLength: SERIAL_MAX_LENGTH }}
        onChange={this.handleChange}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerialNumberField);
