import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/hero";
import Footer from "./components/footer";
import About from "./components/About";
import OurWork from "./components/work";
import TeamSection from "./components/teamsection";
import ContactForm from "./components/contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  // Create a protected route component
  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/sign-in" />;
  };

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
          <About />
          <OurWork />
          <TeamSection />
          <ContactForm />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
