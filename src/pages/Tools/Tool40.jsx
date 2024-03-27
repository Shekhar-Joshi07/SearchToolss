import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll40 = (props) => {
  return (
    <>
      <header className="container">
        <div className="row my-2">
          <div className="col mt-2 col-lg-2 d-flex justify-content-start">
            <div className="" style={{ height: "80px", width: "150px" }}>
              <Link to="/home">
                {!props.logoDisplay ? <></> : <img src={logo} alt="logo" />}
              </Link>
            </div>
          </div>
          <div className="col col-lg-10 " style={{ marginLeft: "-50px" }}>
            <div
              className="d-flex justify-content-start"
              style={{ marginTop: "25px" }}
            >
              <h3>Category 3.6 - ASSESSMENT, MONITORING AND EVALUATION</h3>
            </div>
            <h4>3.6.3 | BIODIVERSITY MONITORING AND SURVEILLANCE TOOLS</h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "80px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 40
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            COMMUNITY-BASED MONITORING, REPORTING AND VERIFICATION KNOW-HOW:
            SHARING KNOWLEDGE FROM PRACTICE (CMRV)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2015
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF Forest and Climate Programme
          </div>
        </div>
        <div className="row fw-bold ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            TYPE
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            Purpose
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            Collection of approaches and methods
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Community-based monitoring, reporting and verification of carbon
            stocks and other forest data
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Collection and short description of nine approaches and methods
            (some supported by online tools and/or more complex software setups)
            <br />
            <br />
            <ol>
              <li>Open Data Kit</li>
              <li>Geodok</li>
              <li>Geo-Wiki</li>
              <li>Moabi DRC</li>
              <li>Sound recordings</li>
              <li>Sapelli</li>
              <li>Cybertracker</li>
              <li>Interactive Forest Monitoring</li>
              <li>Participatory mapping and GIS</li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Community-based monitoring, reporting and verification of carbon
            stocks and other forest data in the context of REDD+
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <li>
              Mapping and monitoring of biodiversity, ecosystem services, direct
              threats/pressures and their drivers in and around forest PAs
            </li>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col col-md-6 col-sm-6 col-lg-6 border ">
            STRENGTHS
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border ">
            WEAKNESSES
          </div>
        </div>
        <div className="row border-color">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Strengths and weaknesses vary depending on individual tools.
            <br />
            <br />
            General strengths:
            <br />
            <br />
            <ul>
              <li>Relative simplicity of methods and tools</li>
              <li>Cost effectiveness</li>
              <li>Contribution to community empowerment</li>
              <li>
                Potential for increased sustainability of monitoring programmes,
                because of the factors listed above
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Strengths and weaknesses vary depending on individual tools.
            <br />
            <br />
            General weaknesses
            <br />
            <br />
            <ul>
              <li>Limitations to types of data that can be collected</li>
              <li>Often need of internet access</li>
              <li>Some tools need further development</li>
              <li>Community take-up of technologies can take time</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            WWF (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://d2ouvy59p0dg6k.cloudfront.net/downloads/cmrv_web.pdf">
                Community-based monitoring, reporting and verification know-how:
                sharing knowledge from practice.
              </a>
            </span>
            Gland, Switzerland: WWF. 42 pp. Accessed on 8 October 2018 at
            <a href="https://wwf.panda.org/?239457/Community-based-Monitoring-Reporting-and-Verification-Know-how">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            One case study from North Rupununi Forest (Guyana) included in
            method collection
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Jeffrey-Coker, F., Basinger, M., Modi, V. (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://qsel.columbia.edu/assets/uploads/blog/2013/06/Open-Data-Kit-Review-Article.pdf">
                Open Data Kit: Implications for the Use of Smartphone Soft-ware
                Technology for Questionnaire Studies in International
                Development.
              </a>
            </span>
            12 pp. Accessed on 24 September 2018 at
            <a href="https://qsel.columbia.edu/assets/uploads/blog/2013/06/Open-Data-Kit-Review-Article.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Corrigan C. & Hay-Edie T. 2013.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.iccaregistry.org/assets/ICCA%20toolkit%20final%20Version%202%20en-d28f988305a52c562d77fd2b1868a547534d5852ecb6abb05819fab8f6bae6e8.pdf">
                A toolkit to support conservation by indigenous peoples and
                local communi-ties: building capacity and sharing knowledge for
                indigenous peoples and community conserved territories and areas
                (ICCAs).
              </a>
            </span>
            <a href="http://www.iccaregistry.org/assets/ICCA%20toolkit%20final%20Version%202%20en-d28f988305a52c562d77fd2b1868a547534d5852ecb6abb05819fab8f6bae6e8.pdf">
              <Icon as={LinkIcon} />
            </a>
            UNEPWCMC, Cambridge. Accessed on 22 February 2019
          </div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Pratihast, A.K., B. DeVries, V. Avitabile, S. de Bruin, L. Kooistra,
            M. Tekle,M., M. Herold (2014). Combining satellite data and
            community-based observations for forest monitoring. Forests 5:
            2464–2489.
          </div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Pratihast, A.K., M. Herold, V. de Sy, D. Murdiyarso, M. Skutsch
            (2013). Linking community-based and national REDD+ monitoring: A
            review of the potential. Carbon Management 4: 91–104.
          </div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Further resources are available on the websites of the individual
            tools.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll40;
