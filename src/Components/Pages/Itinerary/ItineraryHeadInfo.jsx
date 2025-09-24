import Icon from "../../../Common/UI/Icon/Icon";
import { HeadInfoContainer, HeadInfoItem, HeadInfoItemText, HeadInfoWrapper } from "./styled.Itinerary";
import { getLangTextsWithType  } from "../Main/Header/TopMenu/data.TopMenu";

function ItineraryHeadInfo({
    info,
    lang
}) {

    return (
        <HeadInfoWrapper>
            <HeadInfoContainer>
                <HeadInfoItem>
                    <Icon type={"moon"} size={"xxs"} />
                    <HeadInfoItemText>{getLangTextsWithType(lang, "night", info?.night)}</HeadInfoItemText>
                </HeadInfoItem>
                <HeadInfoItem>
                    <Icon type={"people"} size={"xxs"} />
                    <HeadInfoItemText>{getLangTextsWithType(lang, "guest", info?.guest)}</HeadInfoItemText>
                </HeadInfoItem>
            </HeadInfoContainer>
        </HeadInfoWrapper>
    );
}

export default ItineraryHeadInfo;
