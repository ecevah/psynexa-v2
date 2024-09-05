import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSettingsWheel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.806 7.624-.622-1.08a1.913 1.913 0 0 0-2.609-.705 1.904 1.904 0 0 1-2.608-.678 1.83 1.83 0 0 1-.257-.915 1.913 1.913 0 0 0-1.913-1.968h-1.254A1.904 1.904 0 0 0 9.64 4.191a1.913 1.913 0 0 1-1.913 1.886 1.83 1.83 0 0 1-.915-.257 1.913 1.913 0 0 0-2.609.705l-.668 1.099a1.913 1.913 0 0 0 .696 2.608 1.913 1.913 0 0 1 0 3.314 1.904 1.904 0 0 0-.696 2.6l.632 1.089a1.913 1.913 0 0 0 2.608.741 1.895 1.895 0 0 1 2.6.696c.164.277.253.593.256.915 0 1.056.857 1.913 1.913 1.913h1.254c1.053 0 1.908-.85 1.913-1.904a1.904 1.904 0 0 1 1.913-1.913c.322.009.636.097.916.256a1.913 1.913 0 0 0 2.608-.695l.66-1.099a1.904 1.904 0 0 0-.696-2.608 1.903 1.903 0 0 1-.696-2.609c.166-.29.406-.53.696-.696a1.913 1.913 0 0 0 .695-2.6z"
      clipRule="evenodd"
    />
    <Path
      stroke="#0D1717"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.175 14.525a2.636 2.636 0 1 0 0-5.272 2.636 2.636 0 0 0 0 5.272"
    />
  </Svg>
);
export default SvgSettingsWheel;
