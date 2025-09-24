import { Title } from "../../../Common";
import ImageSlider from "../../../Common/UI/ImageSlider/ImageSlider";
import { getSeletedLangText } from "../Main/Header/TopMenu/data.TopMenu";
import { ItineraryDetailImageContainer } from "./styled.Itinerary"

function ItineraryDetailContent({
    day,
    item,
    lang
}) {
    const {title, text, address,businessHours, arrivalTime, departureTime, travelDuration, stayTime, images} = item;
    

    return (
        <>
            <Title title={getSeletedLangText(lang, title)} text={getSeletedLangText(lang, address)} titleSize={20} subSize={14} gap={6} />
            <ItineraryDetailImageContainer>
                {images.length > 0 && <ImageSlider list={images} height={"150rem"} />}
            </ItineraryDetailImageContainer>
            
        </>
    );
}

export default ItineraryDetailContent;
