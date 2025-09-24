import Box from "../../../Common/UI/Box/Box";
import { Title } from "../../../Common";
import { getLangTextsWithType } from "../Main/Header/TopMenu/data.TopMenu";
import ItineraryDetail from "./ItineraryDetail";

function ItineraryDay({
    list,
    lang
}) {
    // 이 함수는 itinerary 배열을 받아서 {"1": [...], "2": [...]}와 같은 객체로 변환합니다.
    const groupItineraryByDay = (itinerary) => {
        return itinerary.reduce((acc, currentItem) => {
            const day = currentItem.day;
            if (!acc[day]) {
            acc[day] = [];
            }
            acc[day].push(currentItem);
            return acc;
        }, {});
    };

    const groupedItinerary = groupItineraryByDay(list);
    const dayKeys = Object.keys(groupedItinerary).sort(); // 일자를 오름차순으로

    return (
        <Box>
            <Title title={getLangTextsWithType(lang, "itinerary", "")} />
            {dayKeys.map(day => (
                <ItineraryDetail key={day} list={groupedItinerary} day={day} lang={lang} />
            ))}
        </Box>
    );
}

export default ItineraryDay;
