import { Link } from "react-router-dom";
import TopMenu from "./TopMenu/TopMenu";
import { LangBox, Logo, Wrapper } from "./styled.Header";
import DropBox from "../../../../Common/UI/DropBox/DropBox";
import { language } from "./TopMenu/data.TopMenu";
import Icon from "../../../../Common/UI/Icon/Icon";
import { setLang } from "../../../../features/menuSlice";
import { useDispatch, useSelector } from "react-redux";

function Header({ list }) {
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.menu);
    const onSetLang = (val) => dispatch(setLang(val));
    return (
        <Wrapper>
            {/* <h1><Link to={"/home"}><Logo alt="Logo" src="/images/logo.svg" /></Link></h1> */}
            <LangBox>
                <Icon type="globe" size="xxxs" />
                <DropBox title={"Language"} list={language} onChange={onSetLang} selected={lang} />
            </LangBox>
            <TopMenu list={list} />
        </Wrapper>
    );
}

export default Header;
