import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import MainContent from "./Components/Pages/Main/MainContent/MainContent";
import { useDispatch, useSelector } from "react-redux";
import Overlays from "./Common/UI/Overlays";
import MobileMenu from "./Components/Pages/Main/Header/TopMenu/MobileMenu";
import { onToggleActive } from "./features/menuSlice";


function App() {
    const {
        isActive,
    } = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const onToggleMenu = () => dispatch(onToggleActive());
    
  return (
    <>
      <Layout>
        <Routes>
          <Route path={"/*"} element={<MainContent />} />
        </Routes>
      </Layout>
      <Overlays isActive={isActive} onClose={onToggleMenu}>
        <MobileMenu isActive={isActive} onClick={onToggleMenu} />
      </Overlays>
    </>
  );
}

export default App;
