import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { RegisterPage } from "../pages/Register";

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="/home" element={<HomePage />} /> */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/home" element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
