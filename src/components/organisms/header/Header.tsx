"use client";

import React from "react";
import { Button, Col, Row, Image, Nav } from "react-bootstrap";
import style from "./header.module.css";
import HeaderDropDown1 from "./HeaderDropDown1";
import HeaderDropDown2 from "./HeaderDropDown2";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.navOverly}> </div>
        <Row className="align-items-center">
          <Col sm={4}>
            <div className={style.leftNav}>
              <Button className={style.headerLeftBtn}>
                <Link href="/cennik">Cennik</Link>
              </Button>
              <div className={style.headerDrop1}>
                <div className={style.dropBtn}>
                  Usługi i
                  <br />
                  realizacje
                  <span></span>
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
                  <Link href="#">Zespół </Link>
                </Nav.Link>
                <Nav.Link className={style.navRightMenu}>
                  <Link href="/kontakt">Kontakt</Link>
                </Nav.Link>
              </Nav>
              <Button className={style.headerRightBtn}>
                <Link href="#">Zamów bezpłatne badanie</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
