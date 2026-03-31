import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing/page";
import SignUpPage from "./sign_up/page";
import LoginPage from "./login/page";
import DashboardPage from "./dashboard/page";
import WriteLetterPage from "./write/page";
import { Toaster } from "sonner";

export default function AppRouter() {
  return (
    <Routes>
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "12px",
          },
        }}
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign_up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/write" element={<WriteLetterPage />} />
    </Routes>
  );
}
