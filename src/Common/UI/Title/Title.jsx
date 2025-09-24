import { Wrapper } from "./styled.Title";
import { TitleText, SubText } from "./styled.Title";

const Title = ({ 
    title = "",
    text,
    align = "start", 
    gap = 24, 
    margin = "0",
    padding = "0",
    subColor = "dark",
    titleSize = 26,
    subSize = 18,
}) => {
    return (
        <Wrapper className={"titlebox"} margin={margin} padding={padding} align={align}>
            <TitleText className={"titletxt"} titleSize={titleSize}>{title}</TitleText>
            {text && <SubText className={"subtxt"} gap={gap} subColor={subColor} subSize={subSize}>{text}</SubText>}
        </Wrapper>
    );
};

export default Title;