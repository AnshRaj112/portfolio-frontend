"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "./styles/Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>      
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#testimonial" onClick={() => setIsOpen(false)}>Testimonial</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>

      {/* Mobile Menu Icons */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <RxCross2 size={25} /> : <FaBars size={25} />}
      </div>
    </header>
  );
};

export default Header;
