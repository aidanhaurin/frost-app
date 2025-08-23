import { BrowserRouter } from "react-router-dom";
import DataRouter from "./components/pages/DataRouter";

const App = () => {
  return (
    <div id='app'>
      <BrowserRouter>
        <DataRouter></DataRouter>
      </BrowserRouter>
    </div>
  )
}

export default App;