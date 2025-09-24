export const ItinerarylangType = {
  guest: {
    kor: "명",
    eng: "guests",
  },
  night: {
    kor: "박",
    eng: "nights",
  },
  itinerary: {
    kor: "일정표",
    eng: "itinerary",
  },
  day: {
    kor: "일차",
    eng: "day",
  },
};


export const Itineraryinfo = [
  {
    id: "1",
    title: {
      kor: "서울 & 제주",
      eng: "Seoul & Jeju",
    },
    text: {
      kor: "서울은 전통과 현대가 어우러진 다채로운 도시, 제주는 자연이 빚어낸 휴양의 섬입니다.",
      eng: "Seoul is a vibrant city where tradition meets modernity, while Jeju is an island of relaxation shaped by nature.",
    },
    guest: 12,
    night: 7,
    itinerary: [
      {
        day: "1", //일차
        title: {
          kor: "인천공항",
          eng: "Incheon Airport",
        },
        text: {
          kor: "",
          eng: "",
        },
        address: {
          kor: "인천 중구 공항로 271 인천국제공항역",
          eng: "271, Gonghang-ro, Jung-gu, Incheon, Republic of Korea",
        },
        businessHours: "", //영업시간
        arrivalTime: "", //도착시간
        departureTime: "", //출발시간
        travelDuration: "", //이동시간
        stayTime: "", //머무는시간
        images: [],
      },
      {
        day: "1", //일차
        title: {
          kor: "제주공항",
          eng: "Jeju International Airport",
        },
        text: {
          kor: "",
          eng: "",
        },
        address: {
          kor: "제주공항 주소",
          eng: "2, Gonghang-ro, Jeju-si, Jeju-do, Republic of Korea",
        },
        businessHours: "", //영업시간
        arrivalTime: "", //도착시간
        departureTime: "", //출발시간
        travelDuration: "", //이동시간
        stayTime: "", //머무는시간
        images: [],
      },
      {
        day: "1", //일차
        title: {
          kor: "흑돼지",
          eng: "Black Pork",
        },
        text: {
          kor: "",
          eng: "",
        },
        address: {
          kor: "",
          eng: "",
        },
        businessHours: "", //영업시간
        arrivalTime: "", //도착시간
        departureTime: "", //출발시간
        travelDuration: "", //이동시간
        stayTime: "", //머무는시간
        images: [
          "itinerary1/jeju1-1.bmp",
          "itinerary1/jeju1-2.bmp",
        ],
      },
      {
        day: "2", //일차
        title: {
          kor: "빌라",
          eng: "Villa",
        },
        text: {
          kor: "",
          eng: "",
        },
        address: {
          kor: "제주 제주시 해안마을7길 55-55",
          eng: "Seoul is a vibrant city where tradition meets modernity, while Jeju is an island of relaxation shaped by nature.",
        },
        businessHours: "", //영업시간
        arrivalTime: "", //도착시간
        departureTime: "", //출발시간
        travelDuration: "", //이동시간
        stayTime: "", //머무는시간
        images: [],
      },
    ],
  },
  {
    id: "2",
    leftImg: "테스트",
    text: `소나무 전정은 전문적인 수형 조절과 병충해 예방을 통해 소나무 본연의 아름다움을 살리고, 오랜 시간 건강하게 자랄 수 있도록 관리합니다.`,
    guest: 12,
    night: 7,
  },
];
