import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll2 = (props) => {
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
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height">
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 2
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            IUCN GUIDELINES FOR PROTECTED AREAS LEGISLATION
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2011
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN, IUCN Environmental Law Programme
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
            Guidelines{" "}
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Support and guidance to the establishment, further development and
            implementation of effective national legal frameworks for PA
            systems.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of four parts
            <ol>
              <li>Basic principles and obligations</li>
              <li>Governance approaches</li>
              <li>
                Chapter 1: Generic elements of protected areas legislation
              </li>
              <li>Chapter 2: Special issues for marine protected areas</li>
              <li>
                Transboundary protected areas
                <ul>
                  <li>
                    Thematic bibliography (structured by “general and
                    cross-cutting”, “governance”, “marine protected areas” and
                    “transboundary protected areas”)
                  </li>
                  <li>
                    The guideline provides a systematic overview and detailed
                    explanations of anything that should or could be regulated
                    with regard to protected areas.
                  </li>
                  <li>
                    The document is designed in such a way that individual
                    sections can be consulted in response to specific interest,
                    or for reference on specific themes
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Support to legislative review and drafting process across the
                spectrum of national and local needs
              </li>
              <li>
                Stimulation of dialogue between government authorities and
                stakeholders to modernize national policy and legal frameworks
              </li>
              <li>
                Implementation of international commitments at the level of
                national PA law
              </li>
              <li>Guidance on legal drafting relevant to PAs</li>
              <li>
                Information for those employed in executive agencies that
                oversee and implement other policies and programmes affecting or
                affected by protected areas legislation
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Source of information for those involved with or interested in
                the progress, review or drafting of protected areas legislation
                – e.g. concerned or affected communities, organizations,
                corporations, groups or individuals
              </li>
              <li>
                Source of information for academic audiences interested in the
                progressive development of protected areas law, such as
                students, professors or researchers
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color">
          <div className="col">Typically national PA systems</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Depends on specific use; Generally, a basic to moderate legal
            understanding is required for meaningful use
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
              <li>Comprehensiveness and depth</li>
              <li>
                Authority and expertise of IUCN Environmental Law Programme and
                other contributing IUCN bodies, such as WCPA and other IUCN
                Commission members
              </li>
              <li>Availability in three languages</li>
              <li>
                Includes comprehensive consideration of specificities for the
                marine realm and for transboundary situations
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Long and complex document which requires some digesting to be
                applied in new contexts
              </li>
              <li>No step-by-step guidance on key aspects of PA legislation</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Lausche, B. (2011).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/EPLP-081.pdf">
                Guidelines for Protected Areas Legislation.
              </a>
            </span>
            &nbsp; Gland, Switzerland: IUCN. xxvi + 370 pp. Accessed on 5
            October 2018 at{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/EPLP-081.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            There was an earlier version of these guidelines by the same author
            in 1980
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Case studies on legal frameworks of national and sub-national
            protected areas systems, legal frameworks for special protected area
            types such as ICCAs or PPAs and Protected Areas Law Matrices are
            downloadable from:
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Case studies on legal frameworks of national and sub-national
            protected areas systems, legal frameworks for special protected area
            types such as ICCAs or PPAs and Protected Areas Law Matrices are
            downloadable from:{" "}
            <a href="https://portals.iucn.org/library/sites/library/files/documents/2012-015.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Lausche, B., Farrier, D., Verschuuren, J., La Viña, A. G.M.,
            Trouwborst, A. Born, C-H., Aug, L. (2013). The Legal Aspects of
            Connectivity Conservation. A Concept Paper, Gland, Switzerland:
            IUCN, xxiv + 190 pp. Accessed on 10 September 2018 at:{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/EPLP-085-001.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Farrier, D., Harvey, M., Da Silva, S., Leuzinger, M. D.,
            Verschuuren, J., Gromilova, M., Trouwborst, A., Paterson, A. R.
            (2013). The Legal Aspects of Connectivity Conservation – Case
            Studies, Gland, Switzerland: IUCN. 78 pp. Accessed on 10 September
            2018 at:
            <a href="https://portals.iucn.org/library/efiles/documents/EPLP-085-002.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll2;
