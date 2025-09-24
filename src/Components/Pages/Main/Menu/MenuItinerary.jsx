import Itinerary from "../../Itinerary/Itinerary";


/**
 * About
 */
export const MenuItinerary = {
    title: "일정표",
    url: "/itinerary/:id",
    isHidden: true,
    el: <Itinerary />,
    // depth: [
    //     {
    //         title: "Color",
    //         url: "/color",
    //         isHidden: false,
    //         // el: <tempPage step={0} />,
    //     },
    //     {
    //         title: "Layout",
    //         url: "/layout",
    //         isHidden: false,
    //         // el: <tempPage />,
    //     },
    //     {
    //         title: "Typography",
    //         url: "/typography",
    //         isHidden: false,
    //         // el: <tempPage step={1} />,
    //     },
    // ],
};
