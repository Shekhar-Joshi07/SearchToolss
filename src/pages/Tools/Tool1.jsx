import { LinkIcon } from "@chakra-ui/icons";
import { Heading, Icon, Link } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import logo from "../../assets/pcalogo.png";

const Tooll1 = (props) => {
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
              <h3>Category 3.1 - POLICY AND LEGAL FRAMEWORK</h3>
            </div>
          </div>
        </div>
        <hr className="mt-0" />
      </header>

      <section>
        <div
          className="container my-2 "
          style={{ width: "800px", backgroundColor: "white", color: "black" }}
        >
          <div className="row fw-bold fs-5 height">
            <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
              TOOL 1
            </div>
            <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
              ECOLEX THE GATEWAY TO ENVIRONMENTAL LAW
            </div>
          </div>
          <div className="row ">
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10"></div>
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
              IUCN, UN-Environment, FAO
            </div>
          </div>
          <div className="row fw-bold ">
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
              TYPE
            </div>
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
              PURPOSE
            </div>
          </div>
          <div className="row ">
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
              A set of online databases{" "}
            </div>
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
              Providing the most comprehensive possible global source of
              information on environmental law (including PA related) to
              increase knowledge of, and build capacity on, environmental law at
              local, national and global levels.
            </div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col ">STRUCTURE AND FUNCTION</div>
          </div>
          <div className="row border-color">
            <div className="col">
              Set of online databases of treaties, legislation, court decisions
              and literature
              <ul>
                <li>
                  Simple mode: searchable by terms (with or without full text
                  included)
                </li>
                <li>
                  Advanced mode: complex search menu including thematic,
                  typological and geographical filters, which can be combined
                  with each other
                </li>
                <li>
                  Output is list of documents (each with description, commentary
                  and additional information) from the above categories, many of
                  which hyper-linked to full text
                </li>
                <li>Support provided by IUCN Environmental Law Centre</li>
              </ul>
            </div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col">TYPICAL USE</div>
          </div>
          <div className="row border-color ">
            <div className="col">
              <ul>
                <li>
                  Very wide range of applications which require access to
                  existing legal documents, e.g. analysis, development,
                  implementation, evaluation of legal tools to support effective
                  PA systems{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col">LEVEL OF APPLICATION</div>
          </div>
          <div className="row border-color">
            <div className="col">Usually national system and higher</div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col">SKILLS AND RESOURCES REQUIRED</div>
          </div>
          <div className="row border-color">
            <div className="col">
              <ul>
                <li>Database access free of charge</li>
                <li>Personal computer and internet access required</li>
                <li>
                  Basic understanding of database search and data retrieval
                  methods{" "}
                </li>
                <li>
                  Some basic legal and contextual understanding is required to
                  produce meaningful results from the databases
                </li>
              </ul>
            </div>
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
              <ul>
                <li>
                  Wide range of resources covered (largest globally for
                  environmental law)
                </li>
                <li>Detailed information and full text links for most items</li>
                <li>
                  Relatively easy search function, both in simple and advanced
                  mode
                </li>
                <li>Operates in three languages</li>
                <li>
                  Availability of support from IUCN Environmental Law Centre
                </li>
              </ul>
            </div>
            <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
              <ul>
                <li>
                  Outputs are a mix of various classes of documents which
                  typically require further screening
                </li>
                <li>
                  No export function for outputs to general or literature
                  database programmes
                </li>
              </ul>
            </div>
          </div>
          <div className="row border fw-bold bg-fill">
            <div className="col">REFERENCE</div>
          </div>
          <div className="row border-color">
            <div className="col">
              <span style={{ textDecoration: "underline", color: "green" }}>
                <a href="">IUCN, UNEP and FAO: About Ecolex.</a>
              </span>
              &nbsp; Accessed on 5 October 2018 at{" "}
              <a href="https://www.ecolex.org/p/about/">
                <Icon as={LinkIcon} />
              </a>
            </div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
          </div>
          <div className="row border-color">
            <div className="col">
              Released in 2001, since then successive updating of online
              database
            </div>
          </div>
          <div className="row border-color fw-bold bg-fill">
            <div className="col">DOCUMENTED EXPERIENCE</div>
          </div>
          <div className="row border-color">
            <div className="col">
              It is likely that most of the use of this instrument in a
              development cooperation context has not been documented.
            </div>
          </div>

          <div className="row border-color fw-bold bg-fill">
            <div className="col">RELATED RESOURCES/FURTHER READING</div>
          </div>
          <div className="row border-color">
            <div className="col">
              A more detailed description of ECOLEX is included in:
              <span style={{ textDecoration: "underline", color: "green" }}>
                <a href="https://portals.iucn.org/library/sites/library/files/documents/2012-015.pdf">
                  IUCN, UNEP and FAO: About Ecolex.
                </a>
                IUCN (2012). IUCN Knowledge Products – The basis for a
                partnership to support the functions and work programme of
                IPBES.
              </span>
              &nbsp; Accessed on 5 October 2018 at{" "}
              <a href="https://portals.iucn.org/library/sites/library/files/documents/2012-015.pdf">
                <Icon as={LinkIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="mt-5">{/* @ All copyright reserved  */}</div>
      </footer>
    </>
  );
};

export default Tooll1;
