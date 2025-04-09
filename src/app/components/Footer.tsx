"use client";

import React, { useEffect } from "react";
import styles from "./styles/Footer.module.scss";
import { FaCircleArrowUp, FaPhone, FaCode, FaRegHeart } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const form = document.getElementById("newsletter-form") as HTMLFormElement;

    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const email = emailInput.value.trim();

        if (!email) return;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            }
          );

          const data = await res.json();

          if (res.ok) {
            toast.success(data.message || "Subscription successful!");
            emailInput.value = ""; // ensure it clears
            emailInput.blur(); // optional UX tweak
          } else {
            toast.error(data.message || "Subscription failed!");
          }
        } catch {
          toast.error("Something went wrong. Please try again.");
        }
      };

      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <div className={styles.about}>
            <h2>
              <span className={styles.highlight}>Ansh</span> Raj
            </h2>
            <p>
              Full-stack developer. Always learning, always building, turning
              ideas into something real.
            </p>
            <div className={styles.socials}>
              <a
                href="https://github.com/AnshRaj112"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/ansh-raj112/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/AnshRaj112"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("about")}>About</li>
              <li onClick={() => scrollToSection("education")}>Education</li>
              <li onClick={() => scrollToSection("projects")}>Projects</li>
              <li onClick={() => scrollToSection("skills")}>Skills</li>
              <li onClick={() => scrollToSection("research")}>
                Research Papers
              </li>
              <li onClick={() => scrollToSection("testimonial")}>
                Testimonial
              </li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <CiMail />
                <a href="mailto:anshraj112@gmail.com">anshraj112@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+917737549787">+91 7737549787</a>
              </li>
              <li>
                <MdLocationPin />
                Bikramganj, Rohtas, BR
              </li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>
              Subscribe to stay updated with my latest blogs and tech articles.
            </p>
            <form id="newsletter-form" className={styles.subscribeBox}>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.left}>© {currentYear} All rights reserved.</p>
          <p className={styles.center}>
            <FaCode /> Made with{" "}
            <span className={styles.heart}>
              <FaRegHeart />
            </span>{" "}
            by Ansh Raj
          </p>
          <div className={styles.right}>
            <FaCircleArrowUp
              className={styles.upArrow}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
