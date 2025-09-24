import { Circle, Text, Wrapper } from "./styled.ScrollDown";

const ScrollDown = ({
    children = "Scroll Down",
}) => {
    return (
        <Wrapper>
            <Circle />
            <Text>{children}</Text>
        </Wrapper>
    );
};

export default ScrollDown;