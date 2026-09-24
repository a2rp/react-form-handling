import { MdAssignment, MdHome } from "react-icons/md";

const SiteHeader = () => (
    <header className="siteHeader">
        <a className="brand" href="/" title="React Form Handling home">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
            <span>
                <small>A2RP</small>
                React Form Handling
            </span>
        </a>
        <nav aria-label="Primary navigation">
            <a href="/"><MdHome aria-hidden="true" />Home</a>
            <a href="#form"><MdAssignment aria-hidden="true" />Form</a>
        </nav>
    </header>
);

export default SiteHeader;
