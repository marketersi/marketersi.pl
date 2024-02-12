"use client";

import React, { useState } from "react";
import { Button, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import HeaderDropDown1 from "./HeaderDropDown1";
import HeaderDropDown2 from "./HeaderDropDown2";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <div className={style.headerDrop1}>
                <div className={style.DropHover}></div>
                <div className={style.dropBtn}>
                  Usługi i
                  <br />
                  realizacje
                  <span></span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className={style.dropMenu}>
                  <HeaderDropDown1 />
                </div>
              </div>
              <div className={style.headerDrop1}>
                <div className={style.dropBtn}>
                  Przydatne
                  <br />
                  rzeczy
                  <span></span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className={style.dropMenu}>
                  <HeaderDropDown2 />
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/marketersi.PNG"
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
                  <Link href="/kontakt">Kontakt</Link>
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
          <Link href="/cennik">Cennik</Link>
        </Button>
        <div className={style.mobileLogo}>
          <Link href="/">
            <Image
              src="/assets/images/marketersi.PNG"
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
                      <Link href="/nazwa-dla-firmy">Nazwa dla firmy</Link>
                      <Link href="/projektowanie-logo">Projektowanie logo</Link>
                    </div>
                    <div className={style.menuItem}>
                      <Link href="/projektowanie-ux">Projektowanie UX</Link>
                    </div>
                    <div className={style.menuItem}>
                      <Link href="/strategia-marketingowa">
                        Strategia marketingowa
                      </Link>
                    </div>
                    <div className={style.menuItem}>
                      <Link href="/tresci-sprzedazowe">Treści sprzedażowe</Link>
                    </div>
                    <div className={style.menuItem}>
                      <Link href="/owocni-opinie">Opinie klientów</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/o-nas">Zespół </Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
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
                      <Link href="/kalkulator">
                        Kalkulator zysku z nowej strony (ROI)
                      </Link>
                      <Link href="/konsultacje">Konsultacja marketingu</Link>
                    </div>
                    <div className={style.menuItem}>
                      <Link href="/faktow">
                        50 Faktów psychologii: Strony www
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/owocni-opinie">Klienci i opinie</Link>
            </li>
            <li>
              <Link href="/cennik">Cennik</Link>
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
