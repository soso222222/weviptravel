import MainContent from "./Main/MainContent/MainContent";
import Header from "./Main/Header/Header";
import Footer from "./Main/Footer/Footer";
import { Wrapper } from "./styled.Layout";
import { menuDeafult } from "./Main/Header/TopMenu/data.Menu";

function Layout({ children }) {
    return (
        <Wrapper className="main-wrapper">
            <Header list={menuDeafult} />
            <MainContent list={menuDeafult}>{children}</MainContent>
            <Footer />
        </Wrapper>
    );
}

export default Layout;
