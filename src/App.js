import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Team from "./components/team/Team";
import { createContext } from "react";
import Exchanger from "./components/stockexchange/Exchanger";
import CompanyLst from "./components/companyLst/CompanyLst";

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Team />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/getLst"
            element={
              <>
                <CompanyLst />
              </>
            }
          ></Route>
          <Route
            path="/stock_Exchange"
            element={
              <>
                <Exchanger />
              </>
            }
          ></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
