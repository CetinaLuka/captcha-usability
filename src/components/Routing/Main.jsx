import { Routes, Route } from 'react-router-dom';
import Captchas from '../Captcha/Captchas';
import Checkout from "../DataCapture/Checkout";
import Footer from '../Footer/Footer';
import Intro from '../Intro';
import Navbar from '../Navbar/Navbar';
const Main = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/zajem-podatkov" element={<Checkout />} />
                <Route path="/captcha" element={<Captchas />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default Main;