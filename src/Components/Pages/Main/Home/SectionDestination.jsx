import { useSelector } from "react-redux";
import Card from "../../../../Common/UI/Card/Card";
import { destinationList } from "./data.Home";
import { SectionDestinationContainer, SectionDestinationTitle } from "./styled.Home";


function SectionDestination() {
    const { lang } = useSelector((state) => state.menu);
    return (
        <SectionDestinationContainer>
            <SectionDestinationTitle>목적지별 여행지</SectionDestinationTitle>
            <Card list={destinationList} columns={4} to={"/itinerary"} lang={lang}/>
        </SectionDestinationContainer>
    );
}

export default SectionDestination;
