import { Title } from "../../../Common";
import { getSeletedLangText } from "../Main/Header/TopMenu/data.TopMenu";

function ItineraryDetailContent({
    day,
    item,
    lang
}) {
    const {title, text, address,businessHours, arrivalTime, departureTime, travelDuration, stayTime, Images} = item;
    

    return (
        <>
        
            <Title title={getSeletedLangText(lang, title)} text={getSeletedLangText(lang, address)} titleSize={20} subSize={14} gap={6} />
            {"이미지 영역"}
        </>
    );
}

export default ItineraryDetailContent;
