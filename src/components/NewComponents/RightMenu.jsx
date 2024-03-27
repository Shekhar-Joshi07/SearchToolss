  import React, { useRef, useState } from "react";
  import {
    Drawer,
    DrawerBody,
    useDisclosure,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBars, faSignOut, } from '@fortawesome/free-solid-svg-icons'; 
import { faHome, faInfoCircle, faFileText, faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons';
  const RightMenu = ({ setDisplay }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
      <>
    <div className="icon-menu col-lg-1">
  <FontAwesomeIcon
    icon={faBars}
    onClick={onOpen}
    className=" text-light"
    aria-hidden="true"
    size="lg"
  />
</div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          bg="#000"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
  <div className="right_sidebar_here">
    <nav>
      <ul>
        <li onClick={() => { onClose(); }}>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} />&nbsp; Home
          </Link>
        </li>
        <li onClick={() => { setDisplay("about"); onClose(); }}>
          <Link >
            <FontAwesomeIcon  icon={faInfoCircle} />&nbsp; About Toolkit
          </Link>
        </li>
        <li onClick={() => { setDisplay("cs"); onClose(); }}>
          <Link>
            <FontAwesomeIcon icon={faFileText} />&nbsp; Case Studies
          </Link>
        </li>
        <li>
          <Link to="/home">
            <FontAwesomeIcon icon={faRetweet} />&nbsp; Further Reference
          </Link>
        </li>
        <li onClick={() => { setDisplay("contact"); onClose(); }}>
          <Link>
            <FontAwesomeIcon icon={faUserCircle} />&nbsp; Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login">
          <FontAwesomeIcon icon={faSignOut} />&nbsp; Log Out
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };

  export default RightMenu;
