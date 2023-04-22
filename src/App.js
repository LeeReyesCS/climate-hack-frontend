import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./registerform/registerForm";
import NewOrderForm from "./newOrder/newOrderForm";
import SignInForm from "./signInForm";
import NavBar from "./navBar";

export default function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<NavBar />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/neworderform" element={<NewOrderForm />} />
        <Route path="/signinform" element={<SignInForm/>} />
      </Route>
    </Routes>
  );
}
