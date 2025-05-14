// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/common/Navbar";
import Overview from "./pages/Overview";
import Experiences from "./pages/Experiences";
import ExperiencialGifting from "./pages/ExperiencialGifting";
import Influencers from "./pages/Influencers";

const App = () => {
    return (
        <Router>
            <div className="relative">
                <Navbar />
                <main className="pt-16">
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
            </div>
        </Router>
    );
};

export default App;
