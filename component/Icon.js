import styled from "styled-components";

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../public/Icon/', false, /\.svg$/);
requireAll(req)
const Svg = styled.svg`
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`
export default function Icon(props) {
    const iconName = `#icon-${props.iconClass}`;
    return (
        <Svg className="icon" aria-hidden="true">
            <use xlinkHref={iconName}/>
        </Svg>
    )
}