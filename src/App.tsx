// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/common/Navbar";
import Overview from "./components/Overview/Overview";
import Experiences from "./components/Experiences/Experiences";
import ExperiencialGifting from "./components/ExperiencialGifting/ExperiencialGifting";
import Influencers from "./components/Influencers/Influencers";
import Footer from "./components/common/Footer";

const App = () => {
    return (
        <Router>
            <div className="relative">
                <Navbar />
                <main className="pt-16 w-full">
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route
                            path="/experiencial-gifting"
                            element={<ExperiencialGifting />}
                        />
                        <Route path="/influencers" element={<Influencers />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
