import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from "@mui/icons-material/Logout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Login from "./components/Authentication/Login";
import ProtectedRouter from "./components/Authentication/ProtectedRouter";
import Register from "./components/Authentication/Register";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    segment: "Home",
    title: "Home",
    icon: <MenuBookIcon/>,
    path: "/home",
  },
  {
    segment: "Logout",
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

export default function DashboardLayoutBasic() {
  const token = sessionStorage.getItem("token");

  return (
    <BrowserRouter>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          title: (
            <h3 className="fw-bold" style={{ marginTop: "4px" }}>
              Readink{" "}
            </h3>
          ),
          logo: <img src=""></img>,
        }}
        theme={{}}
      >
     
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouter>
                  <Dashboard />
                </ProtectedRouter>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </BrowserRouter>
  );
}
