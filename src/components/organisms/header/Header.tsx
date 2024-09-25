"use client";

import React, { useEffect, useState } from "react";
import { Button, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import HeaderDropDown1 from "./HeaderDropDown1";
import HeaderDropDown2 from "./HeaderDropDown2";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import LottieAnimation from "../../molecules/LottieAnimation";

const Header = () => {
  const [currentPath, setCurrentPath] = useState(""); // State to hold the current path
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location; // Get the current path from window
      setCurrentPath(pathname); // Set the path in state
      setIsMounted(true); // Set mounted state to true
    }
  }, []);

  console.log("Current Path:==============>", currentPath);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // ------------desktop----------
  const handleOpenDropdown = () => {
    setDropdownOpen(true);
  };
  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };
  const handleMenuItemClickDP = () => {
    handleCloseDropdown();
  };


   // Conditionally apply class based on the current path
   const isHomePage = currentPath === "/";
   const isContactPage = currentPath === "/kontakt-marketersi";
   const isCennikPage = currentPath === "/cennik";
 
   // Don't render the header if not mounted to avoid router errors
   if (!isMounted) return null;
  return (
    <>
     <header
        className={`${style.navbar} ${isCennikPage ? style.blackMenu : ""} ${
          isContactPage ? style.contactPage : ""
        } ${isCennikPage ? style.cennikPage : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={style.hover}></div>
        <div className={style.navigation}>
          <Row className="align-items-center w-100">
            <Col sm={4}>
              <div className={style.leftNav}>
                <Button className={style.headerLeftBtn}>
                  <Link href="/cennik">Cennik</Link>
                </Button>

                <div className={style.headerDrop1} onMouseLeave={handleCloseDropdown}>
                  <div className={style.dropBtn} onMouseEnter={handleOpenDropdown}>
                    Usługi i <br /> realizacje <span></span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  {isDropdownOpen && (
                    <div className={style.dropMenu} onClick={handleCloseDropdown}>
                      <HeaderDropDown1 />
                    </div>
                  )}
                </div>

                <div className={style.headerDrop1} onMouseLeave={handleCloseDropdown}>
                  <div className={style.dropBtn} onMouseEnter={handleOpenDropdown}>
                    Przydatne rzeczy <span></span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  {isDropdownOpen && (
                    <div className={style.dropMenu} onClick={handleCloseDropdown}>
                      <HeaderDropDown2 />
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <Link href="/">
                <LottieAnimation isHovered={isHovered} />
              </Link>
            </Col>
            <Col sm={4}>
              <div className={style.rightNav}>
                <Nav>
                  <Nav.Link className={style.navRightMenu}>
                    <Link href="/Zespol">Zespół</Link>
                  </Nav.Link>
                  <Nav.Link className={style.navRightMenu}>
                    <Link href="/kontakt-marketersi">Kontakt</Link>
                  </Nav.Link>
                </Nav>
                <Button className={style.headerRightBtn}>
                  <Link href="/zamow">Zamów bezpłatne badanie</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </header>

      {/* --------------------------------mobile header-------------------------- */}
      <div className={style.mobileHeader}>
        <header className={style.header}>
          <Button className={style.mobileLeftBtn}>
            <Link onClick={handleMenuItemClick} href="/cennik">
              Cennik
            </Link>
          </Button>
          <div className={style.mobileLogo}>
            <Link href="/">
              <LottieAnimation />
              {/* <Image
                src="https://images.prismic.io/marketersi/984f6871-6a21-41ee-b875-ebac79cfec29_marketersi_logo.png?auto=compress,format"
                alt="My Image"
                width={150}
                height="auto"
              /> */}
            </Link>
          </div>
          <nav className={`${style.nav} ${isMenuOpen ? style.open : ""}`}>
            <ul className={style.mobileMenuList}>
              <li>
                <div className="dropdown">
                  <button
                    onClick={toggleDropdown}
                    className={style.MobileDropdownBtn}
                  >
                    Usługi
                    <span>
                      {isOpen ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="dropdown-content">
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/projektowanie-ux"
                        >
                          Tworzenie stron i design UX
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/profesjonalne-nagrywanie-filmow"
                        >
                          Profesjonalne nagrywanie filmów
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/Kreatywny-montaz-video"
                        >
                          Kreatywny montaż video
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/tresci-sprzedazowe"
                        >
                         Treści i hasła sprzedażowe
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/nazwa-dla-firmy"
                        >
                          Nazwa dla firmy
                        </Link>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/projektowanie-logo"
                        >
                          Projektowanie logo
                        </Link>
                      </div>

                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/strategia-marketingowa"
                        >
                          Strategia marketingowa
                        </Link>
                      </div>

                      <div className={style.menuItem}>
                        <Link onClick={handleMenuItemClick} href="/konsultacje">
                        Konsultacja marketingu
                        </Link>
                      </div>
                     
                    </div>
                  )}
                </div>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link onClick={handleMenuItemClick} href="/Zespol">
                  Zespół{" "}
                </Link>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link onClick={handleMenuItemClick} href="/kontakt-marketersi">
                  Kontakt
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    onClick={toggleDropdown2}
                    className={style.MobileDropdownBtn}
                  >
                    Przydatne rzeczy
                    <span>
                      {isOpen2 ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </span>
                  </button>
                  {isOpen2 && (
                    <div className="dropdown-content">
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/czy-oplaca-sie-agencja-marketingowa"
                        >
                          Policz czy Ci się to opłaca?
                        </Link>
                        <Link onClick={handleMenuItemClick} href="/konsultacje">
                          Konsultacja marketingu
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/marketingowa-psychologia-sprzedazy"
                        >
                          {/* 10 Faktów psychologii: Strony www */}
                          25 faktów psychologii sprzedaży
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link onClick={handleMenuItemClick} href="/marketersi-opinie">
                  Klienci i opinie
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuItemClick} href="/cennik">
                  Cennik
                </Link>
              </li>
              <li className={style.callButton}>
                <Link onClick={handleMenuItemClick} href="tel:570 964 200">
                  <svg
                    enableBackground="new 0 0 139 139"
                    height="25px"
                    id="Phone"
                    version="1.1"
                    viewBox="0 0 139 139"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    // style={{ marginRight: 5 }}
                  >
                    <path d="M67.317,81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c0.85-0.912,7.332-7.853,10.141-11.619  c3.53-4.729-1.588-9-1.588-9S40.296,19.933,37.014,17.076c-3.282-2.861-7.06-1.272-7.06-1.272  c-6.898,4.457-14.049,8.332-14.478,26.968C15.46,60.22,28.705,78.216,43.028,92.148c14.346,15.734,34.043,31.504,53.086,31.486  c18.634-0.425,22.508-7.575,26.965-14.473c0,0,1.59-3.775-1.268-7.06c-2.86-3.284-17.265-17.688-17.265-17.688  s-4.268-5.119-8.998-1.586c-3.525,2.635-9.855,8.496-11.38,9.917C84.171,92.749,73.582,87.104,67.317,81.952z" />
                  </svg>
                  Zadzwoń 570 964 200
                </Link>
              </li>
            </ul>
          </nav>
          <div className={style.menuIcon} onClick={toggleMenu}>
            <span>Menu</span> {isMenuOpen ? "✖" : "☰"}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
