import { Link } from "react-router-dom";


// ! map link   

// export const navLinks = [
//     { to: "/", text: "Home" },
//     { to: "/contact", text: "Contact" }
// ];

// export const NavLinksComponent = () => (
//     <>
//         {navLinks.map((link, index) => (
//             <Link key={index} to={link.to}>
//                 {link.text}
//             </Link>
//         ))}
//     </>
// );


// ! simple link

export const NavLinksComponent = () => (
    <>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </>
)