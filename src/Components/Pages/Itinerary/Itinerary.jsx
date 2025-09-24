import { useParams } from "react-router-dom";
import { Wrapper } from "./styled.Itinerary";
import { Itineraryinfo } from "./data.Itinerary";
import Box from "../../../Common/UI/Box/Box";
import { Title } from "../../../Common";
import ItineraryHeadInfo from "./ItineraryHeadInfo";
import ItineraryDay from "./ItineraryDay";
import { useSelector } from "react-redux";
import { getSeletedLangText } from "../Main/Header/TopMenu/data.TopMenu";

function Itinerary() {
    const params = useParams();
    const { lang } = useSelector((state) => state.menu);
    // const url = `/management/worker/detail/${params.id}`;
    
    const getItinerary = (id) => {
        return Itineraryinfo?.filter((i) => i?.id === id)[0];
    };

    const item = getItinerary(params.id);

    return (
        <Wrapper>
            <Box>
                <Title title={getSeletedLangText(lang, item?.title)} text={getSeletedLangText(lang, item?.text)} titleSize={30} />
                <ItineraryHeadInfo info={item} lang={lang} />
            </Box>
            <ItineraryDay list={item?.itinerary} lang={lang} />
        </Wrapper>
    );
}

export default Itinerary;
