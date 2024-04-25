import React, { useEffect, useRef, useState } from "react";
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
import StickyNav from "./StickyNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOut, } from '@fortawesome/free-solid-svg-icons'; 
import { faHome, faInfoCircle, faFileText, faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const RightMenu = ({ setDisplay }, props) => {
  const [stickyClass, setStickyClass] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 400 ? setStickyClass("rtMenu") : setStickyClass("");
    }
  };

  return (
    <>
      <div className={`right-menu ${stickyClass}`}>
      <div className="icon-menu col-lg-1">
        <FontAwesomeIcon
          icon={faBars}
          onClick={onOpen}
          className=" text-light"
          aria-hidden="true"
          size="lg"
        />
      </div>
        {/* <StickyNav/> */}
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
                    <li
                      onClick={() => {
                        setDisplay("home");
                        onClose();
                      }}
                    >
                      <Link to="/home">
                      <FontAwesomeIcon icon={faHome} />
                      &nbsp; Home
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        setDisplay("about");
                        onClose();
                      }}
                    >
                      <Link to="">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      &nbsp; About Toolkit
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        setDisplay("cs");
                        onClose();
                      }}
                    >
                      <Link>
                      <FontAwesomeIcon icon={faFileText} />
                      &nbsp; Case Studies
                      </Link>
                    </li>
                  
                    <li
                      onClick={() => {
                        setDisplay("reference");
                        onClose();
                      
                      }}
                    >
                        <Link>
                        <FontAwesomeIcon icon={faRetweet} />
                      &nbsp; Further Reference
                        </Link>
                    </li>
                    <li
                      onClick={() => {
                        setDisplay("contact");
                        onClose();
                      }}
                    >
                      <Link>
                      <FontAwesomeIcon icon={faUserCircle} />
                      &nbsp; Contact Us
                      </Link>
                    </li>
                    <li>
                    <Link to="/login">
                      <FontAwesomeIcon icon={faSignOut} />
                      &nbsp; Log Out
                    </Link>
                  </li>
                  </ul>
                </nav>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default RightMenu;
