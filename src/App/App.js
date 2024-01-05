import { Route, Routes } from "react-router-dom";
import LoginPage from "../Components/Pages/LoginPages/LoginPage";
import SignUpPage from "../Components/Pages/LoginPages/Register";
import ResetPassword from "../Components/Pages/LoginPages/ResetPassword";
import HomePage from "../Components/Pages/HomePage";
import AppBarX from "../Components/AppBar/AppBarX";
import AboutPage from "../Components/Pages/AboutPage";
import TransactionsPage from "../Components/Pages/Transactions/TransactionsPage";
import { useContext } from "react";
import Context from "../Components/Context/Context";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import VehicleInsurancePage from "../Components/Pages/VehicleInsurancePage";
import DisplayLicData from "../Components/Pages/LicPages/DisplayLicData";
import SpeedDialX from "../Components/Pages/LicPages/SpeedDialX";

function App() {
  const { isLoggedIn } = useContext(Context);

  const lightTheme = createTheme({});

  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBarX />
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/displaylicdata" element={<DisplayLicData />} />
              <Route
                path="/vehicleinsurance"
                element={<VehicleInsurancePage />}
              />
            </>
          ) : (
            <Route path="/" element={<LoginPage />} />
          )}
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
