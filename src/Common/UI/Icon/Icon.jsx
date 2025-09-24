import { getIconPath, getIconViewBox } from "./Icons";
import { Svg } from "./styled.Icon";

const Icon = ({
    type = "people",
    size = "md",
    fill,
    className,
}) => {
    const path = getIconPath(type);
    const viewBox = getIconViewBox(type);
    return (
        <Svg
        size={size}
        fill={fill}
        viewBox={viewBox}
        preserveAspectRatio="none"
        className={className}
        >
            {path}
        </Svg>
    );
};

export default Icon;