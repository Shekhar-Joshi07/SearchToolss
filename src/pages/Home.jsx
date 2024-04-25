import React, { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "../components/NewComponents/SplitText";
import About from "./About";
import Index from "./Cases/Index";
import TitleCard from "../components/NewComponents/TitleCard";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";
import logo from "../assets/pcalogo.png";
import RightMenu from "../components/NewComponents/RightMenu";
import DefaultTool from "../components/DefaultTools/DefaultTool";
import Tool1 from "../components/Tool1";
import Tool2 from "../components/Tool2";
import Tool3 from "../components/Tool3";
import Tool4 from "../components/Tool4";
import Tool5 from "../components/Tool5";
import Tool6 from "../components/Tool6";
import Tool7 from "../components/Tool7";
import Tool8 from "../components/Tool8";
import Tool9 from "../components/Tool9";
import Tool10 from "../components/Tool10";
import Tool11 from "../components/Tool11";
import Tool12 from "../components/Tool12";
import Tool13 from "../components/Tool13";
import Tool14 from "../components/Tool14";
import Tool15 from "../components/Tool15";
import Tool16 from "../components/Tool16";
import Tool17 from "../components/Tool17";
import Tool18 from "../components/Tool18";
import Tool19 from "../components/Tool19";
import Tool20 from "../components/Tool20";
import Tool21 from "../components/Tool21";
import Tool22 from "../components/Tool22";
import Tool23 from "../components/Tool23";
import Tool24 from "../components/Tool24";
import Tool25 from "../components/Tool25";
import Tool26 from "../components/Tool26";
import Tool27 from "../components/Tool27";
import Tool28 from "../components/Tool28";
import Tool29 from "../components/Tool29";
import Tool30 from "../components/Tool30";
import Tool31 from "../components/Tool31";
import Tool32 from "../components/Tool32";
import Tool33 from "../components/Tool33";
import Tool34 from "../components/Tool34";
import Tool35 from "../components/Tool35";
import Tool36 from "../components/Tool36";
import Tool37 from "../components/Tool37";
import Tool38 from "../components/Tool38";
import Tool39 from "../components/Tool39";
import Tool40 from "../components/Tool40";
import Tool41 from "../components/Tool41";
import Tool42 from "../components/Tool42";
import Tool43 from "../components/Tool43";
import Tool44 from "../components/Tool44";
import Tool45 from "../components/Tool45";
import Tool46 from "../components/Tool46";
import Tool47 from "../components/Tool47";
import Tool48 from "../components/Tool48";
import Tool49 from "../components/Tool49";
import Tool50 from "../components/Tool50";
import Tool51 from "../components/Tool51";
import Tool52 from "../components/Tool52";
import Tool53 from "../components/Tool53";
import Tool54 from "../components/Tool54";
import Tool55 from "../components/Tool55";
import Tool56 from "../components/Tool56";
import CaseComponent1 from "../components/Case1";
import CaseComponent2 from "../components/Case2";
import CaseComponent3 from "../components/Case3";
import CaseComponent4 from "../components/Case4";
import CaseComponent5 from "../components/Case5";
import CaseComponent6 from "../components/Case6";
import CaseHome from "./Cases/CaseHome";
import Footer from "../components/NewComponents/Footer";
import Contactus from "./Contactus";
import Tooll1 from "./Tools/Tool1";
import Tooll2 from "./Tools/Tool2";
import Tooll3 from "./Tools/Tool3";
import Tooll4 from "./Tools/Tool4";
import Tooll5 from "./Tools/Tool5";
import Tooll6 from "./Tools/Tool6";
import Tooll7 from "./Tools/Tool7";
import Tooll8 from "./Tools/Tool8";
import Tooll9 from "./Tools/Tool9";
import Tooll10 from "./Tools/Tool10";
import Tooll11 from "./Tools/Tool11";
import Tooll12 from "./Tools/Tool12";
import Tooll13 from "./Tools/Tool13";
import Tooll14 from "./Tools/Tool14";
import Tooll15 from "./Tools/Tool15";
import Tooll16 from "./Tools/Tool16";
import Tooll17 from "./Tools/Tool17";
import Tooll18 from "./Tools/Tool18";
import Tooll19 from "./Tools/Tool19";
import Tooll20 from "./Tools/Tool20";
import Tooll21 from "./Tools/Tool21";
import Tooll22 from "./Tools/Tool22";
import Tooll23 from "./Tools/Tool23";
import Tooll24 from "./Tools/Tool24";
import Tooll25 from "./Tools/Tool25";
import Tooll26 from "./Tools/Tool26";
import Tooll27 from "./Tools/Tool27";
import Tooll28 from "./Tools/Tool28";
import Tooll29 from "./Tools/Tool29";
import Tooll30 from "./Tools/Tool30";
import Tooll31 from "./Tools/Tool31";
import Tooll32 from "./Tools/Tool32";
import Tooll33 from "./Tools/Tool33";
import Tooll34 from "./Tools/Tool34";
import Tooll35 from "./Tools/Tool35";
import Tooll36 from "./Tools/Tool36";
import Tooll37 from "./Tools/Tool37";
import Tooll38 from "./Tools/Tool38";
import Tooll39 from "./Tools/Tool39";
import Tooll40 from "./Tools/Tool40";
import Tooll41 from "./Tools/Tool41";
import Tooll42 from "./Tools/Tool42";
import Tooll43 from "./Tools/Tool43";
import Tooll44 from "./Tools/Tool44";
import Tooll45 from "./Tools/Tool45";
import Tooll46 from "./Tools/Tool46";
import Tooll47 from "./Tools/Tool47";
import Tooll48 from "./Tools/Tool48";
import Tooll49 from "./Tools/Tool49";
import Tooll50 from "./Tools/Tool50";
import Tooll51 from "./Tools/Tool51";
import Tooll52 from "./Tools/Tool52";
import Tooll53 from "./Tools/Tool53";
import Tooll54 from "./Tools/Tool54";
import Tooll55 from "./Tools/Tool55";
import Tooll56 from "./Tools/Tool56";
import Case1 from "./Cases/Case1";
import Case2 from "./Cases/Case2";
import Case3 from "./Cases/Case3";
import Case4 from "./Cases/Case4";
import Case5 from "./Cases/Case5";
import Case6 from "./Cases/Case6";
import StickyNav from "../components/NewComponents/StickyNav";
import Referrences from "../components/References";
import { ImFilePdf } from "react-icons/im";
import { Dropdown } from "react-bootstrap";
import DropDownComponent from "../components/NewComponents/DropdownComponent";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCategory, setSearchTermCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [isFromCategory, setIsFromCategory] = useState(false);

  const [toolNumber, setToolNumber] = useState(); //** */
  const [isClicked, setClicked] = useState(false);
  let [visible, setVisible] = useState(false);
  const [displayDiv, setDisplay] = useState("");
  const [searchMenu, setSearchMenu] = useState("");
  const [titleHeading, setTitleHeading] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const displayData = (div) => {
    switch (div) {
      case "about":
        return <About />;
      case "cs":
        return <CaseHome />;
      case "contact":
        return <Contactus />;
      case "results":
        return showResults();
      case "reference":
        return <Referrences />;
      default: {
        return showDefault();
      }
    }
  };

  const filteredComponents = [
    <Tool1
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"POLICY AND LEGAL FRAMEWORK"}
      tNumber={setToolNumber}
      menu={["Laws and regulations", "Resources and tourism"]}
      cl={setClicked}
    />,
    <Tool2
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"POLICY AND LEGAL FRAMEWORK"}
      tNumber={setToolNumber}
      menu={[]}
      cl={setClicked}
    />,
    <Tool3
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={[, "Resources and tourism", "Design site values"]}
      cl={setClicked}
    />,
    <Tool4
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={[, "Ecological condition"]}
      cl={setClicked}
    />,
    <Tool5
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={["Governance", "Laws and regulations", "Resources and tourism"]}
      cl={setClicked}
    />,
    <Tool6
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[]}
    />,
    <Tool7
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Identify site values", "Threats"]}
    />,
    <Tool8
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Threats", "Resources and tourism"]}
    />,

    <Tool9
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Resources and tourism"]}
    />,
    <Tool10
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={[
        "Ecological condition",
        "Transparency and accountability",
        "Threats",
        "Cultural values",
      ]}
      cl={setClicked}
    />,
    <Tool11
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={["Design site values", "Conservation of values"]}
      cl={setClicked}
    />,
    <Tool12
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      menu={["Design site values", "Transparency and accountability"]}
      cl={setClicked}
    />,
    <Tool13
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"SPATIAL PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Design site values", "Conservation of values"]}
    />,
    <Tool14
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Management strategy",
        "Threats",
        "Design site values",
        ,
        "Resources and tourism",
      ]}
    />,
    <Tool15
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Management strategy",
        "Design site values",
        "Identify site values",
      ]}
    />,
    <Tool16
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Threats",
        "Design site values",
        "Identify site values",
      ]}
    />,
    <Tool17
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      menu={[
        "Threats",
        "Design site values",
        "Transparency and accountability",
      ]}
      cl={setClicked}
    />,
    <Tool18
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Management strategy",
        "Design site values",
        "Ecological condition",
        ,
        "Resources and tourism",
        ,
        "Ecosystem services",
      ]}
    />,
    <Tool19
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Identify site values",
        "Design site values",

        "Resources and tourism",
        "Ecological condition",

        "Conservation of values",
      ]}
    />,
    <Tool20
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"MANAGEMENT PLANNING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Management strategy",
        "Economic",
        "Social and economic",

        "Resources and tourism",
      ]}
    />,
    <Tool21
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Measure Success"]}
    />,
    <Tool22
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Design site values",
        "Laws and regulations",
        "Resources and tourism",
      ]}
    />,
    <Tool23
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Resources and tourism"]}
    />,
    <Tool24
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Social and economic",
        "Resources and tourism",
        "Ecosystem services",
      ]}
    />,
    <Tool25
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Economic", "Resources and tourism"]}
    />,
    <Tool26
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Governance", "Design site values", "Resources and tourism"]}
    />,
    <Tool27
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Economic",
        "Social and economic",
        "Resources and tourism",
        "Cultural values",
        "Ecosystem services",
      ]}
    />,
    <Tool28
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Design site values", "Ecological condition", "Measure Success"]}
    />,
    <Tool29
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[]}
    />,
    <Tool30
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"PROTECTED AREA FINANCING"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Resources and tourism"]}
    />,
    <Tool31
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"CAPACITY DEVELOPMENT"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Design site values", "Resources and tourism"]}
    />,
    <Tool32
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"CAPACITY DEVELOPMENT"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Management strategy", "Resources and tourism"]}
    />,
    <Tool33
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[]}
    />,
    <Tool34
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      menu={[
        "Governance",
        "Management strategy",
        "Threats",
        "Transparency and accountability",
        "Identify site values",
        "Ecological condition",
        "Conservation of values",
      ]}
      cl={setClicked}
    />,
    <Tool35
      menu={[
        "Governance",
        "Management strategy",
        "Threats",
        "Ecological condition",
      ]}
      searchMenu={searchMenu}
      searchTerm={searchTerm}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
    />,
    <Tool36
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      menu={[
        "Governance",
        "Management strategy",
        "Design site values",
        "Economic",
        "Transparency and accountability",

        "Social and economic",

        "Laws and regulations",
      ]}
      cl={setClicked}
    />,
    <Tool37
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Management strategy",
        "Threats",
        "Design site values",
        "Identify site values",
        "Cultural values",
        "Conservation of values",
      ]}
    />,
    <Tool38
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Management strategy",
        "Identify site values",
        "Ecological condition",
        "Laws and regulations",
        "Ecosystem services",
        "Measure Success",
        "Resources and tourism",
      ]}
    />,
    <Tool39
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Design site values",
        "Management strategy",
        "Resources and tourism",
      ]}
    />,
    <Tool40
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Threats", "Resources and tourism", "Ecosystem services"]}
    />,
    <Tool41
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Design site values",
        "Laws and regulations",
        "Measure Success",
        "Resources and tourism",
      ]}
    />,
    <Tool42
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Identify site values",
        "Economic",
        "Social and economic",
        "Resources and tourism",
        "Conservation of values",
        "Governance",
        "Ecosystem services",
      ]}
    />,
    <Tool43
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Economic",
        "Ecological condition",
        "Social and economic",
        "Resources and tourism",
      ]}
    />,
    <Tool44
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Identify site values", "Measure Success", "Ecosystem services"]}
    />,
    <Tool45
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"ASSESSMENT, MONITORING AND EVALUATION"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Identify site values",
        "Design site values",
        "Ecosystem services",
        "Economic",
        "Ecological condition",
        "Social and economic",
        "Resources and tourism",
      ]}
    />,
    <Tool46
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Governance", "Design site values", "Resources and tourism"]}
    />,
    <Tool47
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Transparency and accountability",
        "Resources and tourism",
      ]}
    />,
    <Tool48
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Economic",
        "Management strategy",
        "Social and economic",
        "Resources and tourism",
      ]}
    />,
    <Tool49
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Governance", "Identify site values", "Design site values"]}
    />,
    <Tool50
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Legitimacy",
        "Governance",
        "Transparency and accountability",
        "Economic",
        "Identify site values",
        "Cultural values",
        "Social and economic",
        "Laws and regulations",
      ]}
    />,
    <Tool51
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Transparency and accountability",
        "Identify site values",
        "Cultural values",
        "Laws and regulations",
      ]}
    />,
    <Tool52
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Threats",
        "Identify site values",
        "Management strategy",
      ]}
    />,
    <Tool53
      searchTerm={searchTerm}
      category={"GOVERNANCE"}
      searchMenu={searchMenu}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Design site values",
        "Management strategy",
        "Resources and tourism",
      ]}
    />,
    <Tool54
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Identify site values",
        "Management strategy",
        "Resources and tourism",
        "Measure Success",
      ]}
    />,
    <Tool55
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={[
        "Governance",
        "Economic",
        "Social and economic",
        "Measure Success",
      ]}
    />,

    <Tool56
      searchTerm={searchTerm}
      searchMenu={searchMenu}
      category={"GOVERNANCE"}
      tNumber={setToolNumber}
      cl={setClicked}
      menu={["Governance", "Measure Success"]}
    />,
  ];

  const handleSearch = () => {
    setSearchTerm((prev) => (prev = searchInput));
    setIsFromCategory(false);
    setDisplay("results");
    setToolNumber();
    console.log("searching");
  };

  const searchCategory = (categoryKeyword) => {
    setSearchTerm((prev) => (prev = categoryKeyword));
    setIsFromCategory(true);
    // setDisplay("results");
  };

  useEffect(() => {
    if (searchTerm !== "" || searchMenu !== "") {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        console.log("stopped");
      }, 1000);
    }
  }, [searchTerm, searchMenu]);

  useEffect(() => {
    setVisible(!visible);
  }, []);

  const showSpinner = () => {
    if (showLoader) {
      return (
        <Box textAlign="center" mt="4" border="1px solid">
          <Spinner />
        </Box>
      );
    } else {
      const tool1Result = (
        <Tool1
          searchTerm={searchTerm}
          tNumber={setToolNumber}
          cl={setClicked}
        />
      );
      const tool2Result = (
        <Tool2
          searchTerm={searchTerm}
          tNumber={setToolNumber}
          cl={setClicked}
        />
      );
      const tool3Result = (
        <Tool3
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool4Result = (
        <Tool4
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool5Result = (
        <Tool5
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool6Result = (
        <Tool6
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool7Result = (
        <Tool7
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool8Result = (
        <Tool8
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool9Result = (
        <Tool9
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool10Result = (
        <Tool10
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool11Result = (
        <Tool11
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool12Result = (
        <Tool12
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool13Result = (
        <Tool13
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool14Result = (
        <Tool14
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool15Result = (
        <Tool15
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool16Result = (
        <Tool16
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool17Result = (
        <Tool17
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool18Result = (
        <Tool18
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool19Result = (
        <Tool19
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool20Result = (
        <Tool20
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool21Result = (
        <Tool21
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool22Result = (
        <Tool22
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool23Result = (
        <Tool23
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool24Result = (
        <Tool24
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool25Result = (
        <Tool25
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool26Result = (
        <Tool26
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool27Result = (
        <Tool27
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool28Result = (
        <Tool28
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool29Result = (
        <Tool29
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool30Result = (
        <Tool30
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool31Result = (
        <Tool31
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool32Result = (
        <Tool32
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool33Result = (
        <Tool33
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool34Result = (
        <Tool34
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool35Result = (
        <Tool35
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool36Result = (
        <Tool36
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool37Result = (
        <Tool37
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool38Result = (
        <Tool38
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool39Result = (
        <Tool39
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool40Result = (
        <Tool40
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool41Result = (
        <Tool41
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool42Result = (
        <Tool42
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool43Result = (
        <Tool43
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool44Result = (
        <Tool44
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool45Result = (
        <Tool45
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool46Result = (
        <Tool46
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool47Result = (
        <Tool47
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool48Result = (
        <Tool48
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool49Result = (
        <Tool49
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool50Result = (
        <Tool50
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool51Result = (
        <Tool51
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool52Result = (
        <Tool52
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool53Result = (
        <Tool53
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool54Result = (
        <Tool54
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool55Result = (
        <Tool55
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const tool56Result = (
        <Tool56
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case1Result = (
        <CaseComponent1
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case2Result = (
        <CaseComponent2
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case3Result = (
        <CaseComponent3
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case4Result = (
        <CaseComponent4
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case5Result = (
        <CaseComponent5
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const case6Result = (
        <CaseComponent6
          searchTerm={searchTerm}
          cl={setClicked}
          tNumber={setToolNumber}
        />
      );
      const resultHeading = (
        <Box textAlign="start" mt="-3" mb="4">
          <span>Showing results for </span> &nbsp;
          <span
            style={{
              fontWeight: "600",
              color: "#5ae6b8",
            }}
          >{`${searchTerm}`}</span>
        </Box>
      );

      // const noResultFound = <Box textAlign="start" mt="-3" mb= "4">
      // <span>No results found for</span> &nbsp;
      // <span  style={{
      //  "fontWeight" : "600",
      //  "color" : "#5ae6b8"

      // }}>{`${searchTerm}`}</span>
      // </Box>
      // console.log(resultFound, "result");

      const DisplaySearches = () => {
        switch (Number(toolNumber)) {
          case 1:
            return <Tooll1 logo={false} />;
          case 2:
            return <Tooll2 logo={false} />;
          case 3:
            return <Tooll3 logo={false} />;
          case 4:
            return <Tooll4 logo={false} />;
          case 5:
            return <Tooll5 logo={false} />;
          case 6:
            return <Tooll6 logo={false} />;
          case 7:
            return <Tooll7 logo={false} />;
          case 8:
            return <Tooll8 logo={false} />;
          case 9:
            return <Tooll9 logo={false} />;
          case 10:
            return <Tooll10 logo={false} />;
          case 11:
            return <Tooll11 logo={false} />;
          case 12:
            return <Tooll12 logo={false} />;
          case 13:
            return <Tooll13 logo={false} />;
          case 14:
            return <Tooll14 logo={false} />;
          case 15:
            return <Tooll15 logo={false} />;
          case 16:
            return <Tooll16 logo={false} />;
          case 17:
            return <Tooll17 logo={false} />;
          case 18:
            return <Tooll18 logo={false} />;
          case 19:
            return <Tooll19 logo={false} />;
          case 20:
            return <Tooll20 logo={false} />;
          case 21:
            return <Tooll21 logo={false} />;
          case 22:
            return <Tooll22 logo={false} />;
          case 23:
            return <Tooll23 logo={false} />;
          case 24:
            return <Tooll24 logo={false} />;
          case 25:
            return <Tooll25 logo={false} />;
          case 26:
            return <Tooll26 logo={false} />;
          case 27:
            return <Tooll27 logo={false} />;
          case 28:
            return <Tooll28 logo={false} />;
          case 29:
            return <Tooll29 logo={false} />;
          case 30:
            return <Tooll30 logo={false} />;
          case 31:
            return <Tooll31 logo={false} />;
          case 32:
            return <Tooll32 logo={false} />;
          case 33:
            return <Tooll33 logo={false} />;
          case 34:
            return <Tooll34 logo={false} />;
          case 35:
            return <Tooll35 logo={false} />;
          case 36:
            return <Tooll36 logo={false} />;
          case 37:
            return <Tooll37 logo={false} />;
          case 38:
            return <Tooll38 logo={false} />;
          case 39:
            return <Tooll39 logo={false} />;
          case 40:
            return <Tooll40 logo={false} />;
          case 41:
            return <Tooll41 logo={false} />;
          case 42:
            return <Tooll42 logo={false} />;
          case 43:
            return <Tooll43 logo={false} />;
          case 44:
            return <Tooll44 logo={false} />;
          case 45:
            return <Tooll45 logo={false} />;
          case 46:
            return <Tooll46 logo={false} />;
          case 47:
            return <Tooll47 logo={false} />;
          case 48:
            return <Tooll48 logo={false} />;
          case 49:
            return <Tooll49 logo={false} />;
          case 50:
            return <Tooll50 logo={false} />;
          case 51:
            return <Tooll51 logo={false} />;
          case 52:
            return <Tooll52 logo={false} />;
          case 53:
            return <Tooll53 logo={false} />;
          case 54:
            return <Tooll54 logo={false} />;
          case 55:
            return <Tooll55 logo={false} />;
          case 56:
            return <Tooll56 logo={false} />;
          case 57:
            return <Case1 />;
          case 58:
            return <Case2 />;
          case 59:
            return <Case3 />;
          case 60:
            return <Case4 />;
          case 61:
            return <Case5 />;
          case 62:
            return <Case6 />;
          default:
            return <SearchResults />;
        }
      };

      const tool2 = [tool1Result, tool2Result];

      const toolList = [
        tool1Result,
        tool2Result,
        tool3Result,
        tool4Result,
        tool5Result,
        tool6Result,
        tool7Result,
        tool8Result,
        tool9Result,
        tool10Result,
        tool11Result,
        tool12Result,
        tool13Result,
        tool14Result,
        tool15Result,
        tool16Result,
        tool17Result,
        tool18Result,
        tool19Result,
        tool20Result,
        tool21Result,
        tool22Result,
        tool23Result,
        tool24Result,
        tool25Result,
        tool26Result,
        tool27Result,
        tool28Result,
        tool29Result,
        tool30Result,
        tool31Result,
        tool32Result,
        tool33Result,
        tool34Result,
        tool35Result,
        tool36Result,
        tool37Result,
        tool38Result,
        tool39Result,
        tool40Result,
        tool41Result,
        tool42Result,
        tool43Result,
        tool44Result,
        tool45Result,
        tool46Result,
        tool47Result,
        tool48Result,
        tool49Result,
        tool50Result,
        tool51Result,
        tool52Result,
        tool53Result,
        tool54Result,
        tool55Result,
        tool56Result,
      ];

      const caseList = [
        case1Result,
        case2Result,
        case3Result,
        case4Result,
        case5Result,
        case6Result,
      ];

      const SearchResults = () => {
        return (
          <>
            {resultHeading}
            <h5>Tools result</h5>
            {toolList.map((tool) => {
              return tool;
            })}

            <hr />
            <h5>Case studies result</h5>
            {caseList.map((c) => {
              // console.log(c);
              return c;
            })}
          </>
        );
      };

      return (
        <>
          {isClicked ? (
            <>
              <DisplaySearches />
            </>
          ) : (
            <SearchResults />
          )}
        </>
      );
    }
  };

  const defaultStyle = {
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
    lineHeight: "1.2",
    textAlign: "center",
    margin: "auto",
    marginBottom: "-3rem",
    color: "#fff",
  };
  const showDefault = () => {
    return (
      <div style={defaultStyle}>
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    color: "#5ae6b8",
                    y: 0,
                    transition: {
                      delay: i * 0.4,
                    },
                  }),
                }}
              >
                Welcome To PCA Toolkit
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const ShowData = () => {
    switch (Number(toolNumber)) {
      case 1:
        return <Tooll1 />;
      case 2:
        return <Tooll2 />;
      case 3:
        return <Tooll3 />;
      case 4:
        return <Tooll4 />;
      case 5:
        return <Tooll5 />;
      case 6:
        return <Tooll6 />;
      case 7:
        return <Tooll7 />;
      case 8:
        return <Tooll8 />;
      case 9:
        return <Tooll9 />;
      case 10:
        return <Tooll10 />;
      case 11:
        return <Tooll11 />;
      case 12:
        return <Tooll12 />;
      case 13:
        return <Tooll13 />;
      case 14:
        return <Tooll14 />;
      case 15:
        return <Tooll15 />;
      case 16:
        return <Tooll16 />;
      case 17:
        return <Tooll17 />;
      case 18:
        return <Tooll18 />;
      case 19:
        return <Tooll19 />;
      case 20:
        return <Tooll20 />;
      case 21:
        return <Tooll21 />;
      case 22:
        return <Tooll22 />;
      case 23:
        return <Tooll23 />;
      case 24:
        return <Tooll24 />;
      case 25:
        return <Tooll25 />;
      case 26:
        return <Tooll26 />;
      case 27:
        return <Tooll27 />;
      case 28:
        return <Tooll28 />;
      case 29:
        return <Tooll29 />;
      case 30:
        return <Tooll30 />;
      case 31:
        return <Tooll31 />;
      case 32:
        return <Tooll32 />;
      case 33:
        return <Tooll33 />;
      case 34:
        return <Tooll34 />;
      case 35:
        return <Tooll35 />;
      case 36:
        return <Tooll36 />;
      case 37:
        return <Tooll37 />;
      case 38:
        return <Tooll38 />;
      case 39:
        return <Tooll39 />;
      case 40:
        return <Tooll40 />;
      case 41:
        return <Tooll41 />;
      case 42:
        return <Tooll42 />;
      case 43:
        return <Tooll43 />;
      case 44:
        return <Tooll44 />;
      case 45:
        return <Tooll45 />;
      case 46:
        return <Tooll46 />;
      case 47:
        return <Tooll47 />;
      case 48:
        return <Tooll48 />;
      case 49:
        return <Tooll49 />;
      case 50:
        return <Tooll50 />;
      case 51:
        return <Tooll51 />;
      case 52:
        return <Tooll52 />;
      case 53:
        return <Tooll53 />;
      case 54:
        return <Tooll54 />;
      case 55:
        return <Tooll55 />;
      case 56:
        return <Tooll56 />;
      case 57:
        return <Case1 />;
      case 58:
        return <Case2 />;
      case 59:
        return <Case3 />;
      case 60:
        return <Case4 />;
      case 61:
        return <Case5 />;
      case 62:
        return <Case6 />;

      default:
        if (searchMenu) {
          if (Array.isArray(searchMenu)) {
            // If searchMenu is an array, filter based on multiple menu items
            return filteredComponents.filter((item) => {
              return searchMenu.some((search) =>
                item.props.menu.includes(search)
              );
            });
          } else {
            // If searchMenu is a single string, filter based on that single menu item
            return filteredComponents.filter((item) => {
              return item.props.menu.includes(searchMenu);
            });
          }
        } else if (searchCategory) {
          return filteredComponents.filter(
            (component) => component.props.category === searchTerm
          );
        }
    }
  };

  const showResults = () => {
    if (showLoader) {
      return (
        <Box textAlign="center" mt="4">
          <Spinner />
        </Box>
      );
    } else {
      if (isFromCategory && searchTerm) {
        return (
          <>
            <Box
              textAlign="start"
              mt="-3"
              mb="4"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span>Showing results from</span>&nbsp;
                <span style={{ fontWeight: "600", color: "#5ae6b8" }}>
                  {searchTerm}
                </span>
              </div>
              {isClicked && (
                <button
                  className="btn backBtn"
                  style={{ textAlign: "end" }}
                  onClick={() => {
                    setToolNumber("undefined");
                    setClicked(false);
                  }}
                >
                  Back
                </button>
              )}
            </Box>
            <ShowData />
          </>
        );
      } else if (isFromCategory && searchMenu) {
        return (
          <>
            <Box
              textAlign="start"
              mt="-3"
              mb="4"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span>Showing results from</span>&nbsp;
                <span style={{ fontWeight: "600", color: "#5ae6b8" }}>
                  {titleHeading ? titleHeading : searchMenu}
                </span>
              </div>
              {isClicked && (
                <button
                  className="btn backBtn"
                  style={{ textAlign: "end" }}
                  onClick={() => {
                    setToolNumber("undefined");
                    setClicked(false);
                  }}
                >
                  Back
                </button>
              )}
            </Box>
            <ShowData />
          </>
        );
      } else if (searchTerm && !isFromCategory) {
        return showSpinner();
      } else {
        showDefault();
      }
    }
  };

  const aboutcheck = false;

  const logoStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    // borderRadius: "100px",
    // border: "3px solid #049ddb",
    cursor: "pointer",
    padding: "10px",
  };

  return (
    <>
      <div className="main-container">
        <main>
          <section className="hero-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="left-sidebar">
                    <div className="sidebar-header d-flex align-items-center justify-content-between">
                      <img
                        src={logo}
                        className="bg-transparent"
                        alt="logo"
                        style={logoStyle}
                        onClick={() => window.location.reload()}
                      />
                    </div>
                    <div className="all_menuHere">
                      <ul className="MenuLinks_here align-items-center  justify-content-center">
                        <li
                          onClick={() => {
                            setDisplay("results");
                            searchCategory("POLICY AND LEGAL FRAMEWORK");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Policy and Legal Framework
                        </li>
                        <li
                          onClick={() => {
                            searchCategory("SPATIAL PLANNING");
                            setDisplay("results");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Spatial Planning
                        </li>
                        <li
                          onClick={() => {
                            setDisplay("results");
                            searchCategory("MANAGEMENT PLANNING");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Management Planning
                        </li>
                        <li
                          onClick={() => {
                            setDisplay("results");
                            searchCategory("PROTECTED AREA FINANCING");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Protected Area Financing{" "}
                        </li>
                        <li
                          onClick={() => {
                            setDisplay("results");
                            searchCategory("CAPACITY DEVELOPMENT");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Capacity Development
                        </li>
                        <li
                          onClick={() => {
                            searchCategory(
                              "ASSESSMENT, MONITORING AND EVALUATION"
                            );
                            setDisplay("results");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Assessment, Monitoring and Evaluation
                        </li>
                        <li
                          onClick={() => {
                            setDisplay("results");
                            searchCategory("GOVERNANCE");
                            setToolNumber();
                            setSearchMenu("");
                          }}
                        >
                          Governance
                        </li>
                        {/* <li
                          onClick={() => {
                            setDisplay("reference");
                            searchCategory("");
                            setToolNumber();
                          }}
                        >
                          References
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  <StickyNav
                    searchTerm={setSearchTerm}
                    tNumber={setToolNumber}
                    menuItem={setSearchMenu}
                    setDisplay={setDisplay}
                    setIsFromCategory={setIsFromCategory}
                    setSearchTerm={setSearchTerm}
                    setVisible={setVisible}
                    setTitleHeading={setTitleHeading}
                    children={[
                      {
                        "Good Governance": [
                          "Conservation of values",
                          "Ecosystem services",
                          "Cultural values",
                        ],
                        "Sound Design and Planning": [
                          "Identify site values",
                          "Design site values",
                          "Threats",
                          "Economic",
                        ],
                        "Effective Management": [
                          "Management strategy",
                          "Ecological condition",
                          "Social and economic",
                          "Threats",
                          "Laws and regulations",
                          "Resources and tourism",
                          "Measure Success",
                        ],
                        "Successful Conservation Outcomes": [
                          "Conservation of values",
                          "Ecosystem services",
                          "Cultural values",
                        ],
                      },
                    ]}
                  />
                  <img
                    style={{
                      marginTop: "2rem",
                      width: "100%",
                      height: "100px",
                      marginBottom: "-3rem",
                    }}
                    src="https://media.istockphoto.com/id/1434551630/vector/mountain-foggy-vector-landscape.jpg?s=612x612&w=0&k=20&c=CbYnQTe4HEynVnnNh6_cfrX934TncLSG4iPXa00SS9c="
                    alt=""
                  />
                  <div className="hero-content content-width ">
                    <div className="  section-header">
                      <div className="row">
                        <div className="col-md-8 ">
                          {" "}
                          <h2 style={{ color: "#5ae6b8" }}>
                            Protected and Conserved Areas Management and
                            Governance
                          </h2>
                        </div>
                        <div className="col-md-4">
                          <div className="search_input_here pt-2">
                            <div className="form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search Here..."
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                onKeyUp={(e) => {
                                  if (e.key === "Enter") return handleSearch();
                                }}
                              />
                              <button>
                                <i
                                  onClick={handleSearch}
                                  className="fa fa-search text-light"
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-container pt-4 ">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 section-container">
                          <DropDownComponent
                          
                            menuItem={setSearchMenu}
                            setDisplay={setDisplay}
                            setIsFromCategory={setIsFromCategory}
                            setSearchTerm={setSearchTerm}
                            setVisible={setVisible}
                            img={Picture1}
                            setTitleHeading={setTitleHeading}
                            title={
                              <span>
                                Good <br />
                                Governance
                              </span>
                            }
                            menuItems={[
                              "Legitimacy",
                              "Transparency and accountability",
                              "Governance",
                            ]}
                          />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <DropDownComponent
                            menuItem={setSearchMenu}
                            setDisplay={setDisplay}
                            setIsFromCategory={setIsFromCategory}
                            setSearchTerm={setSearchTerm}
                            setVisible={setVisible}
                            setTitleHeading={setTitleHeading}
                            img={Picture2}
                            title={
                              <span>
                                Sound Design and <br />
                                Planning
                              </span>
                            }
                            menuItems={[
                              "Identify site values",
                              "Design site values",
                              "Threats",
                              "Economic",
                            ]}
                          />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <DropDownComponent
                            menuItem={setSearchMenu}
                            setDisplay={setDisplay}
                            setIsFromCategory={setIsFromCategory}
                            setSearchTerm={setSearchTerm}
                            setVisible={setVisible}
                            setTitleHeading={setTitleHeading}
                            img={Picture3}
                            title={
                              <span>
                                Effective <br />
                                Management
                              </span>
                            }
                            menuItems={[
                              "Management strategy",
                              "Ecological condition",
                              "Social and economic",
                              "Threats",
                              "Laws and regulations",
                              "Resources and tourism",
                              "Measure Success",
                            ]}
                          />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <DropDownComponent
                            menuItem={setSearchMenu}
                            setDisplay={setDisplay}
                            setIsFromCategory={setIsFromCategory}
                            setSearchTerm={setSearchTerm}
                            setVisible={setVisible}
                            setTitleHeading={setTitleHeading}
                            img={Picture4}
                            title={
                              <span>
                                Successful Conservation <br /> Outcomes
                              </span>
                            }
                            menuItems={[
                              "Conservation of values",
                              "Ecosystem services",
                              "Cultural values",
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordian_section_here">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="start_accordion">
                          {displayData(displayDiv)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "200px", width: "102%" }}>
                    <Footer />
                  </div>
                </div>
                <RightMenu setDisplay={setDisplay} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
