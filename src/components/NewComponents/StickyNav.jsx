import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const StickyNav = (props) => {
  const [stickyClass, setStickyClass] = useState("d-none");
  const controls = useAnimation();

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 400) {
        setStickyClass("position-fixed");
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.2 } });
      } else {
        setStickyClass("d-none");
        controls.start({ y: -50, opacity: 0, transition: { duration: 0.2 } });
      }
    }
  };

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        className={`col-8 ${stickyClass}`}
        variants={navVariants}
        initial="hidden"
        animate={controls}
        style={{ backgroundColor: "#ffffff" }} // Set a solid background color
      >
        <nav className="stickNav px-1">
          <ul>
            {Object.keys(props.children[0]).map((item) => (
              <Dropdown as={ButtonGroup} key={item}>
                <Button
                  style={{ fontSize: "12.4px", paddingRight: "0px" }}
                  variant="success"
                  onClick={() => {
                    props.setIsFromCategory(true);
                    props.setDisplay("results");
                    props.setSearchTerm("");
                    props.menuItem(props.children[0][item]);
                    props.setTitleHeading(item);
                  }}
                >
                  {item}
                </Button>
                <Dropdown.Toggle split variant="success" />

                <Dropdown.Menu className="menuItem">
                  {props.children[0][item].map((itemKey) => (
                    <li
                      key={itemKey}
                      onClick={(event) => {
                        props.setIsFromCategory(true);
                        props.setSearchTerm("");
                        props.menuItem(itemKey);
                        props.setTitleHeading("");
                      }}
                    >
                      {itemKey}
                    </li>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default StickyNav;
