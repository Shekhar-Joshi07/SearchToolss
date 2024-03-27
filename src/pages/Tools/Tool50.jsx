import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll50 = (props) => {
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
            TOOL 50
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            FREE, PRIOR AND INFORMED CONSENT (FPIC)
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
            Standard, principle and process
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Safeguard the collective rights of indigenous peoples (and local
            communities) to self-determination by enabling them to negotiate the
            conditions under which the project / activity will be designed,
            implemented, monitored and evaluated. FPIC ensures that rights
            holders are involved in all stages of projects / activities that
            will affect their land, livelihoods and resources through freely
            chosen representatives and according to customary laws or other
            institutions
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            What is FPIC?
            <ul>
              <li>
                An internationally enshrined human rights standard that is
                referenced in the ILO Convention 169, the Convention on
                Biological Diversity (CBD), UN Declaration on the Rights of
                Indigenous Peoples (UNDRIP) as well as safeguards policies of
                international financing agencies. It is not a stand-alone right
                but enables a wider set of collective indigenous peoples’ rights
                and freedoms, including the right to self-determination.
              </li>
              <li>
                A principle that a community has the right to give or withhold
                consent to activities that are likely to affect land and
                resources they own, occu-py or customarily use.
              </li>
              <li>
                It is a collective and iterative process between a project
                proponent (government, company, NGO, or other) and the affected
                community. It is not a “tick-the-box” procedure that is
                completed with the community signing an agreement.{" "}
              </li>
              <br />
              <br />
              What does FPIC stand for ?
              <br />
              <ul>
                <li>
                  Free: a process self-directed by the community without
                  coercion, intim-idation, manipulation, threat or bribery.
                </li>
                <li>
                  Prior: consent has been sought sufficiently in advance, before
                  the au-thorization / commencement of any project / activity;
                  also, time re-quirements of the community’s internal
                  consultation / consensus processes have been respected.{" "}
                </li>
                <li>
                  Informed: Information has been provided in a language and form
                  that are easily understood by the community. It should cover
                  the (i) nature, size, pace, reversibility and scope of the
                  project or activity; (ii) its purpose, duration and locality;
                  (iii) information about areas that will be affected, (iv)
                  economic, social, cultural and environmental impacts,
                  including potential risks; (v) information on all involved
                  actors, and (vi) the procedures that the project or activity
                  may entail (permits, licenses, administrative procedures).
                </li>
                <li>
                  Consent: The right of indigenous peoples to give or withhold
                  their con-sent to any decision that will impact their lands,
                  territories, resources, and livelihoods.
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            FPIC becomes relevant or, depending on the country, legally binding
            in any context where an indigenous community enters a relationship
            with a third party that intends to implement projects / activities
            with likely impacts on the community, their land and resources. With
            the rising legal recognition of indigenous peoples’ rights in
            international law and instruments, the use of FPIC has grown
            significantly, encompassing development projects in infrastructure
            and extractive industries as well as in forestry, RED and protected
            areas
            <br />
            <br />
            In the context of conservation, FPIC is applicable when establishing
            a new protected area, expanding an existing area or elaborating /
            adjusting PA management plans and use regulations that will affect
            indigenous communities living within or adjacent to the area or that
            will affect the lands, territories and resources they have
            traditionally owned and used.
            <br />
            <br />
            Beyond the legal requirement, following an iterative two-way FPIC
            process is a respectful and meaningful tool to engage with
            indigenous peoples and local communities. It can create transparency
            on the project / activity as well as on the community’s culture,
            governance and traditional use of land and resources.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Respecting FPIC and following the respective processes, can:
            <ul>
              <li>
                Increase the mutual understanding between indigenous peoples /
                local communities and external actors and contribute to mutually
                beneficial cooperation;
              </li>
              <li>
                Promote and strengthen customary decision-making processes as
                well as customary or other institutions;
              </li>
              <li>
                Contribute to improved governance and self-determination beyond
                the project /activity, through tools employed in FPIC process
                (e.g. socio-economic research, leadership training,
                capacity-building, stakeholder, land and resource mapping, etc).
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Mainly PA level; possibly for selected communities within PA
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Respecting FPIC and reaching robust and legitimate outcomes will
            require:
            <ul>
              <li>
                Time, as the rights-holders need to be consulted fully and
                effectively to understand, appraise and analyse the project for
                as long as they deem ne
              </li>
              <li>
                Wide participation, as broad involvement of the affected
                community may increase the legitimacy of the decision taken and
                reduce the risk of conflict, dispute or grievances at later
                stages. Also, including in heterogenous communities.
              </li>
              <li>
                Resources, as meaningful engagement with a community will
                require investments in people, capacity building, communication
                materials as well as technical and legal advice.{" "}
              </li>
              <li>
                Mutual trust and respect, as transparent, two-way communication,
                repeated negotiation and good-faith engagement are fundamental
                building blocks of a meaningful FPIC process.
              </li>
              <li>
                Cultural sensitivity, as indigenous peoples will have cultural
                norms that are likely to shape consultation processes,
                decision-making mechanisms as well as time requirements.
              </li>
              <li>
                Accepting a “no” by the community, as a rejection of the project
                / activity is an equally legitimate outcome of an FPIC process.
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
              <li>The meaningful application of FPIC:</li>
              <li>
                Means that duty-bearers (primarilythe state, but also companies,
                NGOs) and rights-holders (IP, local communities) follow a
                human-rightsbased approach to conservation projects and PA
                management in particular.{" "}
              </li>
              <li>
                Minimizes the risk for the state, companies and NGO that
                disputes escalate into conflicts, jeopardizing the
                sustainability of the project.
              </li>
              <li>
                Contributes to establishing open, equitable and culturally
                appropriate relations between IP and thirdparty stakeholder
              </li>
              <li>
                Furthers understanding / recognition of the strong cultural and
                spiritual ties many IP have with their land and territories.
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Given the diversity of legal, social, economic and
                culturalcontexts, there is no “one-size-fits-all” approach for
                FPIC. Technical, legal and anthropological advice as well as
                capacity building may be required to make the process meaningful
                for the specific community.
              </li>
              <li>
                Projects / activities are often highly complex and require a
                high degree of information. Getting the right balance for
                providing full and accurate information without raising
                expectations or confusing community members constitutes a
                challenge.{" "}
              </li>
              <li>
                he manipulation of traditional institutions and decisionmaking
                pro-cesses by indigenous elites (elite capture) constitutes a
                risk for the project’s overall legitimacy
              </li>
              <li>
                Following indigenous peoples’ or local communities’
                decisionmaking processes is time-consuming and resource
                intensive. Considering FPIC as part of project development and
                duly following it can however enhance the legitimacy and hence
                sustainability of the intervention.
              </li>
              <li>
                The representation of women and marginalized groups may not
                always be guaranteed in traditional institutions and
                decision-making processes and thus requiring additiona
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            There are manifold reference documents on FPIC, including practical
            guidelines, toolkits as well as full studies and reports. Listed
            here are a position paper as well as five practical guidance
            documents. For further information on lessons learned, see
            ‘documented experience’ and ‘related resources’ below. <br />
            <br />
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://undesadspd.org/IndigenousPeoples/MeetingsandWorkshops/InternationalWorkshoponFPIC.aspx">
                Report of the International Workshop on Methodologies Regarding
                Free, Prior and Informed Consent.{" "}
              </a>
            </span>
            E/C.19/2005/3, United Nations Economic and Social Council.
            <a href="https://undocs.org/E/C.19/2005/3">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://cms.fauna-flora.org/wp-content/uploads/2019/06/FFI_2019_Position-on-free-prior-and-informed-consent.pdf">
                Fauna & Flora International’s position on free, prior and
                informed consent.
              </a>
            </span>
            FFI, May 2019
            <a href="https://cms.fauna-flora.org/wp-content/uploads/2019/06/FFI_2019_Position-on-free-prior-and-informed-consent.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Implementing free, prior, and informed consent (FPIC):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://ic.fsc.org/file-download.fpic-discussion-paper-public-consultation-version.7489.htm">
                A Forest Stewardship Council Discussion Paper.
              </a>
            </span>
            March 2018.
            <a href="https://ic.fsc.org/file-download.fpic-discussion-paper-public-consultation-version.7489.htm">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            .
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.fao.org/3/a-i3496e.pdf">
                Respecting free, prior and informed consent: Practical guidance
                for governments, companies, NGOs, indigenous peoples and local
                communities in relation to land acquisition.
              </a>
            </span>
            Food and Agriculture Organization (FAO), Rome 2014
            <a href="http://www.fao.org/3/a-i3496e.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            RECOFTC – The Center for People and Forests & Deutsche Gesellschaft
            für Internationale Zusammenarbeit (GIZ) GmbH:
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://theredddesk.org/sites/default/files/resources/pdf/2011/free_prior_consent.pdf">
                Free, Prior, and Informed Consent in REDD+: Principles and
                Approaches for Policy and Project Development.{" "}
              </a>
            </span>
            Bangkok, 2011.
            <a href="http://theredddesk.org/sites/default/files/resources/pdf/2011/free_prior_consent.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Theresa Buppert and Adrienne McKeehan.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.conservation.org/docs/default-source/publication-pdfs/ci_fpic-guidelines-english.pdf?sfvrsn=16b53100_2">
                Guidelines for Applying Free, Prior and Informed Consent: A
                Manual for Conservation International.
              </a>
            </span>
            Arlington, VA: Conservation International, 2013.
            <a href="https://www.conservation.org/docs/default-source/publication-pdfs/ci_fpic-guidelines-english.pdf?sfvrsn=16b53100_2">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">Reviwes</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Marcus Colchester and Maurizio Farhan Ferrari.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.forestpeoples.org/sites/default/files/publication/2010/08/fpicsynthesisjun07eng.pdf">
                Making FPIC Work: Challenges and Prospects for Indigenous
                Peoples.
              </a>
            </span>
            Forest Peoples Programme, Moreton-in-Marsh, 2007
            <a href="https://www.forestpeoples.org/sites/default/files/publication/2010/08/fpicsynthesisjun07eng.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Project case study: Inclusive processes of consultation with
            indigenous communities to underpin sustainable development in the
            Mesoamerican Biological Corridor (chapter 5.1 )
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ),
            Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung
            (BMZ), Deutsches Institut für Menschenrechte.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mia.giz.de/qlink/ID=49240000">
                Promising Practices – On the human rights-based approach in
                German development cooperation: Consult – Consent – Cooperate:
                Integrating indigenous practices in biodiversity conservation in
                the Agusan Marsh, Mindanao, Philippines, 2015.{" "}
              </a>
            </span>
            Accessed on 20 January at
            <a href="https://mia.giz.de/qlink/ID=49240000">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ),
            Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung
            (BMZ).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mia.giz.de/qlink/ID=244109000">
                Negotiating with the Spirits: Recognizing the Conservation
                Values of Indigenous Knowledge Systems and Practices of the
                Agusanon Manobo, Agusan del Sur, Philippines, 2017.
              </a>
            </span>
            Accessed on 20 January at
            <a href="https://mia.giz.de/qlink/ID=244109000">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.giz.de/de/downloads/giz2013-en-assessing-free-and-prior-informed-consent-fpic-phillipinen.pdf">
                Assessing Free and Prior Informed Consent (FPIC) implementation
                in the Philippines, 2013.
              </a>
            </span>
            <a href="https://www.giz.de/de/downloads/giz2013-en-assessing-free-and-prior-informed-consent-fpic-phillipinen.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.un.org/development/desa/indigenouspeoples/wp-content/uploads/sites/19/2018/11/UNDRIP_E_web.pdf">
                United Nations Declaration on the Rights of Indigenous Peoples
                (UNDRIP),
              </a>
            </span>
            A/RES/61/295. United Nations General Assembly, 13 September 2007.
            <a href="https://www.un.org/development/desa/indigenouspeoples/wp-content/uploads/sites/19/2018/11/UNDRIP_E_web.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.fao.org/3/i2801e/i2801e.pdf">
                Voluntary guidelines on the responsible governance of tenure of
                land, fisheries and forests in the context of national food
                security (VGGT),{" "}
              </a>
            </span>
            Food and Agriculture Organizations of the United Nations (FAO),
            Rome, 2012.
            <a href="http://www.fao.org/3/i2801e/i2801e.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.ifc.org/wps/wcm/connect/topics_ext_content/ifc_external_corporate_site/sustainability-at-ifc/policies-standards/performance-standards/ps7">
                International Finance Corporation (IFC) Performance Standard 7
                on Indigenous Peoples{" "}
              </a>
            </span>
            (2012).
            <a href="https://www.ifc.org/wps/wcm/connect/topics_ext_content/ifc_external_corporate_site/sustainability-at-ifc/policies-standards/performance-standards/ps7">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C169">
                Indigenous and Tribal Peoples Convention (Convention 169),{" "}
              </a>
            </span>
            International Labour Organization (ILO), Geneva, 1989
            <a href="https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C169">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Cathal M. Doyle.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.taylorfrancis.com/books/9781315780665">
                Indigenous Peoples, Title to Territory, Rights and Resources:
                The Transformative Role of Free Prior and Informed Consent.
              </a>
            </span>
            Routledge, 2015
            <a href="https://www.taylorfrancis.com/books/9781315780665">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll50;
