import Form from "./Form";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./App.css";

function App() {
    return (
        <div className="appShell">
            <SiteHeader />
            <main className="mainContent">
                <Form />
            </main>
            <SiteFooter />
        </div>
    );
}

export default App;
