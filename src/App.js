import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import ForgotPasswordForm from './forgetpassword';
import PasswordChangeComplete from "./complete"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/forget" element={<ForgotPasswordForm />} />
        <Route path="/complete" element={<PasswordChangeComplete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
