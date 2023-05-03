import React from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import { Link as LinkS } from "react-scroll";
import TDLogo from "../../public/images/Logo.png";
import TDMobile from "../../public/images/MobileLogo.png";
import Image from "next/image";
import { Router, useRouter } from "next/router";

const Navbar = () => {
  const location = useRouter();
  console.log(location.pathname);
  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link className={styles.navbarLogoLink} href="/">
            <Image src={TDLogo} alt="Logo" height={64} />

            <div className={styles.mobileLogo}>
              <Image src={TDMobile} alt="Logo" height={48} />
            </div>
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          {location.pathname === "/" ? (
            <LinkS to="contact" smooth={true}>
              Contact
            </LinkS>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { scrollToContact: true },
              }}
            >
              Contact
            </Link>
          )}
          <a
            href="https://smallify.vercel.app/resume"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
