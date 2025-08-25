import { Outlet } from "react-router-dom";
import type InterfaceData from "../../interfaces/InterfaceData";
import FooterPanel from "../layout/FooterPanel";
import Navbar from "./Navbar";

type Props = {
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({setWeatherData, setIsLoading}: Props) => {

    return <>
        {/* Navbar with links */}
        <Navbar setWeatherData={setWeatherData} setIsLoading={setIsLoading}></Navbar>

        {/* This is where the routing happens */}
        <div id="main">
            <Outlet></Outlet>
        </div>

        {/* Footer section */}
        <FooterPanel></FooterPanel>
    </>
};//const

export default Layout;