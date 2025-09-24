import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./styled.MainContent";

function MainContent({ list }) {

    return (
        <Wrapper>
            <Routes>
                {list.map(({ url, el, depth }, idx) => {
                    return (
                        <Route
                        key={idx}
                        path={`${url}/*`}
                        element={el}
                        />
                    );
                })}
            </Routes>
        </Wrapper>
    );
}
export default MainContent;
