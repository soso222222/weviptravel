import { Wrapper } from "./styled.Box";

function Box({
    gap = 36, 
    margin = "0",
    padding = "32rem",
    children
}) {
    return (
        <Wrapper gap={gap} margin={margin} padding={padding}>
            {children}
        </Wrapper>
    );
}

export default Box;
