
import { Item, ItemBox, ItemBoxContainerM, Nav } from "./styled.TopMenu";
import { menuDeafult } from "./data.Menu";
import { Link } from "react-router-dom";
import { Button } from "../../../../../Common";
import { useDispatch } from "react-redux";
import { onToggleActive } from "../../../../../features/menuSlice";

function TopMenu() {
    const dispatch = useDispatch();
    const onToggleMenu = () => dispatch(onToggleActive());

    return (
        <Nav>
            <ItemBox className={"ItemBox"}>
                {menuDeafult.map(({url, title}, idx) => (
                    <Item key={idx}><Link to={url}>{title}</Link></Item>
                ))}
            </ItemBox>
            <ItemBoxContainerM className={"ItemBoxContainerM"}>
                <Button icon={"menu"} onClick={onToggleMenu} />
            </ItemBoxContainerM>
        </Nav>
    );
}
export default TopMenu;
