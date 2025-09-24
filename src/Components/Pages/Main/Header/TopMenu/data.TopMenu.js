import { ItinerarylangType } from "../../../Itinerary/data.Itinerary";

export const language = [
  {
    id: "1",
    text: "kor",
  },
  {
    id: "2",
    text: "eng",
  },
];

//TODO : 언어 아이디로 언어 정보 가져오기
export const getSeletedLang = (id) => language?.filter((i) => i?.id === id)[0];

//TODO : 언어 아이디로 해당 언어 텍스트 가져오기
export const getLangText = (id) => {
    const langTxt = getSeletedLang(id);
    return langTxt?.text;
};

//TODO : 언어 아이디로 해당 컨텐츠의 텍스트값 가져오기
export const getSeletedLangText = (id, content = {}) => {
  const langType = getLangText(id);
    return content[langType];
};

export const getTypedText = (id, type) => {
  const langType = getLangText(id);
  return ItinerarylangType[type]?.[langType];
};

//TODO : 일자는 표시되는 순서가 달라서 체크함
export const getTypeSort = (id, type, sort) => {
  // 한국어이고, 일자 표시
  if (id === "1" && type === "day") return 0;
  // 영어어이고, 일자 표시
  else if (id === "2" && type === "day") return 1;
  return sort;
};

//TODO : 언어 아이디로 텍스트 합쳐서 가져오기
export const getLangTextsWithType = (id, type, text, sort = 0) => {
  const sortType = getTypeSort(id, type, sort);

  switch (sortType) {
    case 1: // 정해진 이름 먼저 그 다음 text
      return getTypedText(id, type) + " " + text;
    default: // 0, text 먼저 그 다음 정해진 이름
      return text + " " + getTypedText(id, type);
  }
};

