import React, { useState } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import styles from "./Header.module.css";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import Router from "next/router";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className={styles.mbutton}>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink className={styles.mbutton}>Sign In</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink className={styles.mbutton}>Sign Up</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  // style=
                  className={styles.mbutton}
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  Sign Out
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
