import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll51 = (props) => {
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
              <h3>Category 3.7 - GOVERNANCE</h3>
            </div>
            <h4>
              3.7.4 | RIGHTHOLDER AND STAKEHOLDER ANALYSIS AND PARTICIPATION
            </h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "110px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 51
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            BIOCULTURAL COMMUNITY PROTOCOLS (BCP)
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
            Instrument and process
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Support indigenous peoples and local communities (IPLCs) to secure
            their rights and responsibilities and strengthen customary ways of
            life and stewardship of their territories and resources
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            What is a BCP?
            <ul>
              <li>
                It is a statement about the natural resources a community is
                stewarding and the traditional knowledge it uses to manage it;
              </li>
              <li>
                It proclaims rights and sets out terms and conditions for
                outsiders engaging with the community;
              </li>
              <li>
                It demands respectful treatment, according to prescribed
                standards and procedures.
              </li>
              <br />
              <br />
              A BCP is developed in a participatory, iterative process led and
              shaped by the community.
              <br />
              <br />A BCP is usually compiled in the form of a document, which
              may contain the following elements:
              <ul>
                <li>
                  Definition of the community and its governance structure
                </li>
                <li>Aspiration / goal </li>
                <li>
                  Description of natural resources and related management
                  systems / knowledge / practices
                </li>
                <li>
                  Ways of life, culture, spirituality, customary laws, values
                </li>
                <li>
                  Responsibilities and duties regarding use of biodiversity –
                  often related to customary practices
                </li>
                <li>Relevant rights under national and international law</li>
                <li>
                  Conditions for access to resources / knowledge – e.g.
                  procedure for (F)PIC
                </li>
                <li>Challenges faced by community </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            The approach is relevant in any context where a community would like
            to clarify its position, rights and responsibilities in relation to
            the State or other external actors. The first BCPs were developed in
            the context of access and benefit-sharing (ABS), but the approach
            was soon applied also in other contexts, such as REDD+, extractive
            industries, large infrastructure projects or protected area
            management.
            <br />
            <br />
            In all these contexts, a BCP is an instrument and process for
            communities to collectively identify their values, rights and
            interests with regard to their territories and resources and to
            agree on how to communicate that to outsiders
            <br />
            <br />
            From the perspective of external actors (government, researchers,
            private sector, NGOs, etc.) a BCP creates transparency with regard
            to local governance structures, rights and responsibilities,
            clarifying, for instance, who can make decisions and grant access to
            resources on the community’s behalf. In the context of protected
            areas, a BCP can inform the development and implementation of
            (co-)management plans, as it documents customary practices of
            natural resource management and sustainable use.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            A BCP process:
            <ul>
              <li>
                Triggers a community dialogue on cultural values, rights and
                obligations regarding their natural resources and traditional
                knowledge, which has positive impacts on the conservation of
                these resources and of the community’s knowledge
              </li>
              <li>
                ncludes a key element of legal empowerment. In some countries,
                BCPs can even be officially recognised as by-laws
              </li>
              <li>
                Promotes the active participation of all groups within the
                community and can help build fair internal governance structures{" "}
              </li>
              <li>
                Can help to define “the community” in the specific context (e.g.
                inhabitants of a certain territory, several communities who
                provide the same resource or share common knowledge)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Typically PA Level</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                A BCP process requires a skilled facilitator who is familiar
                with the respective community’s culture and way of life and who
                is trusted by the community.{" "}
              </li>
              <li>
                Developing the protocol is a complex process, in which a good
                understanding of the legal basis at the local, national and
                international level is necessary. Therefore, external legal
                support is usually necessary
              </li>
              <li>
                A BCP depends on active participation. Sufficient resources are
                thus required to allow for regular con sultation with all
                members and/or subgroups of the community.{" "}
              </li>
              <li>
                Depending on the context, the implementation of a BCP may
                require further facilitation and/or legal support in the
                follow-up.
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
            BCPs …:
            <ul>
              <li>
                Make customary ways of managing and sustainably using natural
                resources visible and understandable{" "}
              </li>
              <li>
                Lead to greater transparency of community procedures, and
                therefore greater certainty for users of genetic resources and
                traditional knowledge
              </li>
              <li>
                Are developed within the community, through a participatory
                decision-making process, based on traditional norms, values and
                laws
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Being a community-led process, developing a BCP iscomplex. It
                can be time-consuming and in most cases requires external
                support
              </li>
              <li>
                Process could be overly influenced by certain parties, which
                could reinforce power asymmetries within the community{" "}
              </li>
              <li>
                Developing a BCP could raise unrealistic expectations within the
                comm
              </li>
              <li>
                In politically sensitive contexts, actively raising issues of
                rights may cause conflict with external actors
              </li>
              <li>
                It may be difficult to ensure community-based monitoring and
                evaluation of the
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            There are several sources and guidelines for BCPs. Listed here are a
            factsheet and three guidelines / tool-kits. For further information
            on lessons learned, see ‘documented experience’ and ‘related
            resources’ below. <br />
            <br />
            Lassen, B. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.abs-initiative.info/fileadmin//media/Knowledge_Center/Pulications/BCPs/giz2013-en-biodiv-biocultural-community-protocols.pdf">
                Biocultural Community Protocols.
              </a>
            </span>
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH,
            Bonn and Eschborn, Germany. 2 pp. Accessed on 10 October 2018 at
            <a href="http://www.abs-initiative.info/fileadmin//media/Knowledge_Center/Pulications/BCPs/giz2013-en-biodiv-biocultural-community-protocols.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            (9.5 MB) <br />
            <br />
            Shrumm, H., Jonas, H. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.community-protocols.org/wp-content/uploads/2015/11/BCP-Toolkit-Complete.pdf">
                Biocultural Community Protocols: A Toolkit for Community
                Facilitators. Natural Justice: Cape Town.
              </a>
            </span>
            120 pp. Accessed on 26 September 2018 at{" "}
            <a href="http://www.community-protocols.org/wp-content/uploads/2015/11/BCP-Toolkit-Complete.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            (5MB) (also available in Spanish{" "}
            <a href="http://www.community-protocols.org/wp-content/uploads/2015/11/BCP-Toolkit-Espanol-Completa.pdf">
              <Icon as={LinkIcon} />
            </a>
            ) <br />
            <br />
            LPP. (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.pastoralpeoples.org/wp-content/uploads/2018/08/Community-protocols-web.pdf">
                Community protocols for pastoralists and livestock keepers:
                Claiming rights under the Convention on Biological Diversity.
              </a>
            </span>
            League for Pastoral Peoples and Endogenous Livestock Development,
            Ober-Ramstadt, Germany. 103 pp. Accessed on 2 October 2018 at
            <a href="http://www.pastoralpeoples.org/wp-content/uploads/2018/08/Community-protocols-web.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Heinrich-Böll Stiftung.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.boell.de/en/2016/06/07/community-protocols-toolbox">
                Community Protocol Tool Box and Project Report.
              </a>
            </span>
            Accessed on 5 October 2018 at
            <a href="https://www.boell.de/en/2016/06/07/community-protocols-toolbox">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">Reviwes</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ruiz, M. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.abs-initiative.info/fileadmin//media/Knowledge_Center/Pulications/BCPs/2012_Possibilities_and_Limitations_Biocultural_Protocols_final_web_small.pdf">
                Possibilities and Limitations for a Biocultural Protocol(s) in
                Countries in the Andes and Amazon Basin.
              </a>
            </span>
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH,
            Bonn and Eschborn, Germany. 30 pp. Accessed on 10 October 2018 at
            <a href="http://www.abs-initiative.info/fileadmin//media/Knowledge_Center/Pulications/BCPs/2012_Possibilities_and_Limitations_Biocultural_Protocols_final_web_small.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://naturaljustice.org/wp-content/uploads/2018/11/2018_Community-Protocols-in-Africa_Lessons-Learned_Natural-Justice.pdf">
                Natural Justice, ABS Capacity Development Initiative (2018):
                Community Protocols in Africa – Lessons learned for ABS
                implementation.
              </a>
            </span>

            <a href="https://naturaljustice.org/wp-content/uploads/2018/11/2018_Community-Protocols-in-Africa_Lessons-Learned_Natural-Justice.pdf">
              <Icon as={LinkIcon} />
              Accessed on 4 April 2019
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Natural Justice, ABS Capacity Development Initiative, ONG CESAREN
            (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://naturaljustice.org/wp-content/uploads/2017/12/first-assessment-review-nagoya-protocol-cbd.pdf">
                Experiences and Lessons Learned from the Development and
                Implementation of Community Protocols and Procedures –
                Contribution to the first Assessment and Review of the
                Effectiveness of the Nagoya Protocol.
              </a>
            </span>
            Natural Justice. 20 pp. Ac-cessed on 2 October 2018 at
            <a href="http://naturaljustice.org/wp-content/uploads/2017/12/first-assessment-review-nagoya-protocol-cbd.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            For further documented experience, see links under “related
            resources/ further reading”.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <a href="http://www.community-protocols.org/">
              <Icon as={LinkIcon} />
            </a>{" "}
            www.community-protocols.org
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <a href="http://naturaljustice.org/">
              <Icon as={LinkIcon} />
            </a>
            www.naturaljustice.org
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <a href="https://absch.cbd.int/">
              <Icon as={LinkIcon} />
            </a>{" "}
            www.absch.cbd.int/
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <a href="http://www.abs-initiative.info/topics/integrating-iplc/">
              <Icon as={LinkIcon} />
            </a>{" "}
            www.abs-initiative.info/topics/integrating-iplc/ <br />
            <br />
            The websites contain a wide range of supplementary multimedia
            resources including short films, articles, books, e-learning modules
            and existing community protocols from Africa, America, Asia and
            Pacific.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            UNEP and EDO NSW. (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.cbd.int/doc/meetings/tk/wg8j-09/other/wg8j-09-community-protocol-guide-en.pdf">
                Community Protocols for Environmental Sustainability: A Guide
                for Policymakers.
              </a>
            </span>
            UNEP, Nairobi and EDO NSW, Sydney. 82 pp. Accessed on 27 September
            2018 at
            <a href="https://www.cbd.int/doc/meetings/tk/wg8j-09/other/wg8j-09-community-protocol-guide-en.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            IIED. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.abs-initiative.info/fileadmin//media/Knowledge_Center/Pulications/BCPs/Biodiversity_and_Culture_Exploring_Community_Protocols_Rights_and_Consent_-_IIED_-_2012.pdf">
                Biodiversity and culture: exploring community protocols, rights
                and consent.
              </a>
            </span>
            Participatory learn-ing and action, 65, 223 pp. IIED, London, UK.
            Accessed on 10 October 2018 at
            <a href="http://www.abs-initiative.info/fileadmin/media/Knowledge_Center/Pulications/BCPs/Biodiversity_and_Culture_Exploring_Community_Protocols_Rights_and_Consent_-_IIED_-_2012.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll51;
