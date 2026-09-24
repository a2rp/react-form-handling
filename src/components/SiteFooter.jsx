import { createElement } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHandHoldingHeart,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FaGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FaEnvelope],
];

const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FaHandHoldingHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FaCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FaHandHoldingHeart],
];

const LinkGroup = ({ items }) => (
    <div className="iconLinks">
        {items.map(([label, href, Icon]) => {
            const external = !href.startsWith("mailto:");

            return (
                <a
                    key={label}
                    href={href}
                    title={label}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                >
                    {createElement(Icon, { "aria-hidden": true })}
                </a>
            );
        })}
    </div>
);

const SiteFooter = () => (
    <footer className="siteFooter">
        <div className="footerTop">
            <div>
                <strong>React Form Handling</strong>
                <p>A small controlled form example with clear validation feedback.</p>
            </div>
            <div className="footerGroups">
                <div>
                    <span>Connect</span>
                    <LinkGroup items={links} />
                </div>
                <div>
                    <span>Support</span>
                    <LinkGroup items={support} />
                </div>
            </div>
        </div>
        <div className="footerBottom">
            <span>
                Copyright &copy; {new Date().getFullYear()} {" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </span>
            <span>Built with React</span>
        </div>
    </footer>
);

export default SiteFooter;
