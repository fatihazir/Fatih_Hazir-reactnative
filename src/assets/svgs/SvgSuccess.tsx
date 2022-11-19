import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = () => {
    return (
        <Svg width="48" height="48" viewBox="0 0 48 48">
            <Path
                fill="#43A047"
                d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
            />
        </Svg>

    );
};

const SvgSuccess = React.memo(SvgComponent);
export default SvgSuccess;
