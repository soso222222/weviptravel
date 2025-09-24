import { useNavigate } from "react-router-dom";
import { CardBox, CardImgContainer, CardContent, CardImage, CardItem, CardText, CardTitle } from "./styled.Card";
import { getSeletedLangText } from "../../../Components/Pages/Main/Header/TopMenu/data.TopMenu";

const Card = ({ 
    list,
    columns = 4,
    gap = 20,
    onClick,
    to,
    lang
}) => {
    const navigate = useNavigate();

    const onClickBtn = (e, id) => {
        const url = to ? to + `/${id}` : null;
        onClick && onClick(e);
        url && navigate(url);
        e.stopPropagation();
    };
    
    return (
        <CardBox columns={columns} gap={gap}>
            {list.map(({ id, title, text, bg }, idx) => {
                return (
                    <CardItem
                    key={idx}
                    onClick={(e) => onClickBtn(e, id)}
                    >
                        {bg && <CardImgContainer className="imgContainer"><CardImage alt={text} src={`/images/destination-list/${bg}`}/></CardImgContainer>}
                        <CardContent>
                            {title && <CardTitle>{getSeletedLangText(lang, title)}</CardTitle>}
                            {text && <CardText className="textContainer ellipsis">{getSeletedLangText(lang, text)}</CardText>}
                        </CardContent>
                    </CardItem>
                );
            })}
        </CardBox>
    );
};

export default Card;