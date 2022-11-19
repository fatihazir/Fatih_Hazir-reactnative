import * as React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";

// @ts-ignore
function SvgComponent(props) {
    return (
        <Svg width="12" height="40" viewBox="0 0 12 40" fill="none">
            <Path d="M9.326 26.9593H2.67333L0 0H12L9.326 26.9593Z" fill="#D50000" />
            <Path d="M5.99934 40C8.82078 40 11.108 37.7179 11.108 34.9027C11.108 32.0875 8.82078 29.8054 5.99934 29.8054C3.1779 29.8054 0.890671 32.0875 0.890671 34.9027C0.890671 37.7179 3.1779 40 5.99934 40Z" fill="#D50000" />
        </Svg>
    );
}

const SvgAlert = React.memo(SvgComponent);
export default SvgAlert;
