import {
  WIRE_WHITE,
  WIRE_RED_BLUE_STRIPES,
  WIRE_BLUE,
  WIRE_BLUE_WHITE_STRIPES,
  WIRE_RED_WHITE_STRIPES,
  WIRE_RED
} from "../../models/WireColors";
import {
  STAR,
  NO_STAR,
  LED_ON,
  LED_OFF,
  CUT,
  NO_CUT,
  BATT_CUT,
  PORT_CUT,
  SERIAL_CUT
} from "../../models/ComplicatedWires";

const whiteWireMap = new Map([
  [LED_OFF, new Map([[NO_STAR, CUT], [STAR, CUT]])],
  [LED_ON, new Map([[NO_STAR, BATT_CUT], [STAR, NO_CUT]])]
]);

const redWireMap = new Map([
  [LED_OFF, new Map([[NO_STAR, SERIAL_CUT], [STAR, CUT]])],
  [LED_ON, new Map([[NO_STAR, BATT_CUT], [STAR, BATT_CUT]])]
]);

const blueWireMap = new Map([
  [LED_OFF, new Map([[NO_STAR, SERIAL_CUT], [STAR, NO_CUT]])],
  [LED_ON, new Map([[NO_STAR, PORT_CUT], [STAR, PORT_CUT]])]
]);

const redBlueWireMap = new Map([
  [LED_OFF, new Map([[NO_STAR, SERIAL_CUT], [STAR, PORT_CUT]])],
  [LED_ON, new Map([[NO_STAR, SERIAL_CUT], [STAR, NO_CUT]])]
]);

const ComplicatedWiresMap = new Map([
  [WIRE_WHITE, whiteWireMap],
  [WIRE_RED, redWireMap],
  [WIRE_RED_WHITE_STRIPES, redWireMap],
  [WIRE_BLUE, blueWireMap],
  [WIRE_BLUE_WHITE_STRIPES, blueWireMap],
  [WIRE_RED_BLUE_STRIPES, redBlueWireMap]
]);

export default ComplicatedWiresMap;
