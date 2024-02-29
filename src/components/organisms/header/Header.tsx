"use client";

import React, { useState } from "react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
  return (
    <>
      <header className={style.navbar}>
        <div className={style.hover}></div>
        <div className={style.navigation}>
          <Row className="align-items-center w-100">
            <Col sm={4}>
              <div className={style.leftNav}>
                <Button className={style.headerLeftBtn}>
                  <Link href="/cennik">Cennik</Link>
                </Button>

                <div
                  className={style.headerDrop1}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div
                    className={style.dropBtn}
                    onMouseEnter={handleOpenDropdown}
                  >
                    Usługi i <br /> realizacje <span></span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  {isDropdownOpen && (
                    <div
                      className={style.dropMenu}
                      onClick={handleMenuItemClickDP}
                    >
                      <HeaderDropDown1 />
                    </div>
                  )}
                </div>

                <div
                  className={style.headerDrop1}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div
                    className={style.dropBtn}
                    onMouseEnter={handleOpenDropdown}
                  >
                    Przydatne
                    <br />
                    rzeczy
                    <span></span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  {isDropdownOpen && (
                  <div
                    className={style.dropMenu}
                    onClick={handleMenuItemClickDP}
                  >
                    <HeaderDropDown2 />
                  </div>
                   )}
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className={style.logo}>
                <Link href="/">
                  <Image
                    src="https://images.prismic.io/marketersi/984f6871-6a21-41ee-b875-ebac79cfec29_marketersi_logo.png?auto=compress,format"
                    alt="My Image"
                    width={300}
                    height="auto"
                  />
                </Link>
              </div>
            </Col>
            <Col sm={5}>
              <div className={style.rightNav}>
                <Nav className="">
                  <Nav.Link className={style.navRightMenu}>
                    <Link href="/Zespol">Zespół </Link>
                  </Nav.Link>
                  <Nav.Link className={style.navRightMenu}>
                    <Link href="/kontakt-marketersi">Kontakt</Link>
                  </Nav.Link>
                </Nav>
                <motion.div whileHover={{ translateY: 5 }}>
                  <Button className={style.headerRightBtn}>
                    <Link href="/zamow">Zamów bezpłatne badanie</Link>
                  </Button>
                </motion.div>
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
              <Image
                src="https://images.prismic.io/marketersi/984f6871-6a21-41ee-b875-ebac79cfec29_marketersi_logo.png?auto=compress,format"
                alt="My Image"
                width={150}
                height="auto"
              />
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
                          href="/projektowanie-ux"
                        >
                          Projektowanie UX
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
                        <Link
                          onClick={handleMenuItemClick}
                          href="/tresci-sprzedazowe"
                        >
                          Treści sprzedażowe
                        </Link>
                      </div>
                      <div className={style.menuItem}>
                        <Link
                          onClick={handleMenuItemClick}
                          href="/owocni-opinie"
                        >
                          Opinie klientów
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
                          50 Faktów psychologii: Strony www
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link onClick={handleMenuItemClick} href="/owocni-opinie">
                  Klienci i opinie
                </Link>
              </li>
              <li>
                <Link onClick={handleMenuItemClick} href="/cennik">
                  Cennik
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
