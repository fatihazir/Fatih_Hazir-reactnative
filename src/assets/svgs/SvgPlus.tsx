import React from "react";
import Svg, { Path, Defs, Pattern, Image, Use } from "react-native-svg";

const SvgPlus = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
        >
            <Path fill="url(#a)" d="M0 0h24v24H0z" />
            <Defs>
                <Pattern
                    id="a"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#b" transform="scale(.04167)" />
                </Pattern>
                <Image
                    id="b"
                    width={24}
                    height={24}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRIiWNgGAVUBv+hmGjARCOHjFowagEVASMan6Q0Toy5NPcBqWA0J49aMBwtGAUEAQDVUQUcE0vhCwAAAABJRU5ErkJggg=="
                />
            </Defs>
        </Svg>
    );
};

export default SvgPlus;
