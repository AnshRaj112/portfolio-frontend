"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/Header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Track screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/Unlock Scrolling when Menu Opens
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle Navigation with Type Annotation
  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path);
      setMenuOpen(false);
    },
    [router]
  );

  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolled : ""}`}>
      {/* Mobile Menu Toggle */}
      <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <RxCross2 size={24} className={styles.menuToggleIcon} />
        ) : (
          <FaBars size={24} />
        )}
      </div>

      <div className={styles.logoContainer}>
        <Link href="/">
          <p>ANSH RAJ</p>
        </Link>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && isMobile && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={() => setMenuOpen(false)}
        ></motion.div>
      )}

      {/* Navigation for Mobile and Desktop */}
      {isMobile ? (
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className={styles.navOptions}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className={styles.menuBox}>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/search")}
                >
                  <span>Home</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/help")}
                >
                  <span>Education</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => router.push("/login")}
                >
                  <span>Projects</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/cart")}
                >
                  <span>Skills</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/cart")}
                >
                  <span>Research Paper</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/cart")}
                >
                  <span>Testimonial</span>
                </div>
                <div
                  className={styles.navItem}
                  onClick={() => handleNavigation("/cart")}
                >
                  <span>Contact</span>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      ) : (
        <nav className={styles.navOptions}>
          <div className={styles.menuBox}>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/search")}
            >
              <span>Home</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/help")}
            >
              <span>Education</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => router.push("/login")}
            >
              <span>Projects</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/cart")}
            >
              <span>Skills</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/cart")}
            >
              <span>Research Paper</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/cart")}
            >
              <span>Testimonial</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => handleNavigation("/cart")}
            >
              <span>Contact</span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
