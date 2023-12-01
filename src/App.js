import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
         <AppRouter /> 
        {/*<Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
