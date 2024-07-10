/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { Home } from "./features/home";

export interface Payload {
  exp: number;
  sub: number;
  name: string;
  email: string;
  role: string;
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
