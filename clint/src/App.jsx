import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignOut from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./componentd/Header"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<Signin />}/>
      <Route path="/sign-out" element={<SignOut />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App