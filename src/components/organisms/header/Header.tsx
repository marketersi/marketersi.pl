"use client";

import React from "react";
import {
  Button,
  Col,
  Row,
  Image,
  Nav,
} from "react-bootstrap";
import style from "./header.module.css";
import HeaderDropDown1 from "./HeaderDropDown1";
import HeaderDropDown2 from "./HeaderDropDown2";

const Header = () => {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.navOverly}> </div>
        <Row className="align-items-center">
          <Col sm={4}>
            <div className={style.leftNav}>
              <Button className={style.headerLeftBtn}>Cennik</Button>
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
              <Image
                src="/assets/images/marketersi.PNG"
                alt="My Image"
                width={300}
                height="auto"
              />
            </div>
          </Col>
          <Col sm={5}>
          <div className={style.rightNav}>
          <Nav className="">
              <Nav.Link href="/" className={style.navRightMenu}>Zespół </Nav.Link>
              <Nav.Link href="/" className={style.navRightMenu}>Kontakt</Nav.Link>
            </Nav>
            <Button className={style.headerRightBtn}>Zamów  bezpłatne  badanie</Button>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
