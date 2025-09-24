
import { Title } from "../../../Common";
import { getLangTextsWithType } from "../Main/Header/TopMenu/data.TopMenu";
import Icon from "../../../Common/UI/Icon/Icon";
import { useState } from "react";
import { ItineraryDayBottom, ItineraryDayContainer, ItineraryDayContent, ItineraryDayTop, ItineraryMapDot } from "./styled.Itinerary";
import ItineraryDetailContent from "./ItineraryDetailContent";

function ItineraryDetail({
    list,
    day,
    lang
}) {
    const [isActive, setIsActive] = useState(false);

    
    const onClick = (e) => {
        e.stopPropagation();
        // if (!e?.target) return reset();
        // reset();
        
        const selector = e.currentTarget;
        //transition height 효과
        let contentHeight = 0;
        let selectedParentNode = selector.nextSibling;
        let selectedChildNodes = selectedParentNode?.childNodes;

        if(isActive) {
            selectedChildNodes?.forEach((el) => {
                // if(el.classList?.contains("titlebox")) {
                //     contentHeight += el.offsetHeight;
                // } 
                contentHeight += el.offsetHeight;
            });
        }
        setIsActive(!isActive)
        selectedParentNode.style.cssText = "height: " + contentHeight + "rem";
    };

    return (
        <ItineraryDayContainer>
            <ItineraryDayTop onClick={(e) => onClick(e)}>
                <Title title={getLangTextsWithType(lang, "day", day)} gap={10} />
                <Icon type={isActive ? "angleDown" : "angleTop"} size="xxxs" />
            </ItineraryDayTop>
            <ItineraryDayBottom>
                {list[day]?.map((item, idx) => (
                    <ItineraryDayContent key={idx}>
                        <ItineraryMapDot><Icon type="map" size="xxxs" /></ItineraryMapDot>
                        <ItineraryDetailContent day={day} item={item} lang={lang} />
                    </ItineraryDayContent>
                ))}
            </ItineraryDayBottom>
        </ItineraryDayContainer>

    );
}

export default ItineraryDetail;
