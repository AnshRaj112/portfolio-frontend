"use client"

import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "./styles/Header.module.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close menu on mobile after clicking a nav item
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* <div className={styles.logo}>MyPortfolio</div> */}

        {/* Desktop & Mobile Navigation */}
        <ul className={`${styles.navItems} ${isMobileMenuOpen ? styles.active : ""}`}>
          {["home", "education", "skills", "projects", "research papers", "testimonials", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70} // Adjust according to header height
                duration={500}
                onClick={closeMenu} // Close menu on mobile
                activeClass={styles.activeNav} // Add active class when section is in view
                onSetActive={() => setActiveSection(item)} // Update active state on scroll
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileMenu}>
          {!isMobileMenuOpen ? (
            <FaBars className={styles.menuIcon} onClick={toggleMenu} />
          ) : (
            <RxCross2 className={styles.menuIcon} onClick={toggleMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
