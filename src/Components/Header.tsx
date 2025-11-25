import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

type Navs = {
    name: string;
    link: string;
    num: string;
    bgImg: string;
};

function Header() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [navLoc, setNavLoc] = useState(window.location.pathname);
    const [locTheme, setLocTheme] = useState("home");

    const links: Navs[] = [
        { name: "Home", link: "/", num: "00", bgImg: "home" },
        {
            name: "Destination",
            link: "/Destination",
            num: "01",
            bgImg: "destination",
        },
        { name: "Crew", link: "/Crew", num: "02", bgImg: "crew" },
        {
            name: "Technology",
            link: "/Technology",
            num: "03",
            bgImg: "technology",
        },
    ];

    useEffect(
        function changeBgImg() {
            document.body.classList = "";
            document.body.classList.add(locTheme);
        },
        [locTheme]
    );

    function toggleNav() {
        setNavOpen((prev) => !prev);
    }

    function toggleLoc() {
        setNavLoc(window.location.pathname);
    }

    function toggleLocThm() {
        const location = [...links.filter((link) => link.link === navLoc)];
        setLocTheme(location[0].bgImg);
    }

    useEffect(toggleLocThm, [navLoc]);
    useEffect(toggleLoc, [window.location.pathname]);

    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                navOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setNavOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [navOpen]);

    return (
        <header className="main__header">
            <nav ref={navRef} className="main__nav">
                <Link to="/">
                    <img
                        src={logo}
                        className="logo__img"
                        alt="logo"
                        aria-label="Logo Image"
                    />
                </Link>
                <div className="nav__btn">
                    {navOpen === false ? (
                        <img
                            src={hamburgerIcon}
                            className="nav__icon"
                            alt="hamburger icon"
                            onClick={toggleNav}
                        />
                    ) : (
                        <img
                            src={closeIcon}
                            className="nav__icon "
                            alt="close icon"
                            onClick={toggleNav}
                        />
                    )}
                </div>

                <ul
                    className={`nav__con ${
                        navOpen === true ? "nav__con--open" : ""
                    }`}
                >
                    {links.map((link) => (
                        <li className="nav__item " key={link.name}>
                            <Link
                                onClick={toggleNav}
                                to={link.link}
                                className={`nav__link ${
                                    navLoc === link.link
                                        ? "nav__item--active"
                                        : ""
                                }`}
                            >
                                <span className="nav__num">{link.num}</span>{" "}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
