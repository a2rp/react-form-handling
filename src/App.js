import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Form from "./Form";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./App.css";

function App() {
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowGoTop(window.scrollY > 420);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="appShell">
            <SiteHeader />
            <main className="mainContent">
                <Form />
            </main>
            <SiteFooter />
            {showGoTop && <button className="goTopButton" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp /></button>}
        </div>
    );
}

export default App;
