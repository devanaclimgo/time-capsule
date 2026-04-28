import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing/page";
import SignUpPage from "./sign_up/page";
import LoginPage from "./login/page";
import DashboardPage from "./dashboard/page";
import WriteLetterPage from "./write/page";
import LetterPage from "./components/letter-page";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign_up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
      <Route path="/letters/:id" element={<LetterPage />} />
    </Routes>
  );
}
