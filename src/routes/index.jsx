import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { useState } from "react";

export const RoutesPage = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/home" element={<HomePage user={user} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
