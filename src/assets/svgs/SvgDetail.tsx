import * as React from 'react';
import Svg, { Path, Defs, Pattern, Image, Use } from 'react-native-svg';

function SvgComponent() {
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
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRIie2SPw6CMByFX9VVuU6djKdwNRDv4GBiGR3cHSwuHsSx3kZk1p8LJaQUaGjdeFPbl35f+gcYA6C48sNb8leR8Y3ZMV94LrlgwLGcfojRNoqfd91PfAVGpozYrX6SwYIiW64AIEqUICCtVTMiungJcskFET1yyYVNwoidq/EQeO3OQUAaJUroTgsHCUx4FYbTIlZ72x5nQStcg75Yz3fqYa47vUEvHBA2eNkFgCcq7ej/B+8UhIC3CkLBrYKQ8IYgNBwwvmloeEMQGu4k8IH3CnzhY5zyA5Swao4Ztl7zAAAAAElFTkSuQmCC"
                />
            </Defs>
        </Svg>
    );
}

const SvgDetail = React.memo(SvgComponent);
export default SvgDetail;
