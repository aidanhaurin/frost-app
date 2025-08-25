import { Link } from "react-router-dom";
import type InterfaceData from "../../interfaces/InterfaceData";
import GeoButton from "../layout/searchbar/GeoButton";
import SearchBar from "../layout/searchbar/SearchBar";

type Props = {
    setWeatherData: React.Dispatch<React.SetStateAction<InterfaceData | null>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({setWeatherData, setIsLoading}: Props) => {
  
  return <div id='navbar'>
                <div id='navbar-logo'>
                    <h3><i className="bi bi-snow"></i> F.R.O.S.T. Weather App</h3>
                </div>
                <div id='navbar-search'>
                    <SearchBar setWeatherData={setWeatherData} setIsLoading={setIsLoading}/>
                    <GeoButton setWeatherData={setWeatherData} setIsLoading={setIsLoading}/>
                </div>
                <div id='navbar-extras'>
                    <Link to="/">Search</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
}

export default Navbar;