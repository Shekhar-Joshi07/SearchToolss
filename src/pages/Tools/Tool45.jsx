import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll45 = (props) => {
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
            <h4>3.6.5 | ECOSYSTEM SERVICES ASSESSMENT AND VALUATION</h4>
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
            TOOL 45
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            INTEGRATED VALUATION OF ECOSYSTEM SERVICES AND TRADEOFFS (INVEST){" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Natural Capital Project (Stanford University, TNC, WWF, and the
            University of Minnesota){" "}
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
            Approach, method and software tool.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Mapping and assessing ecosystem services across spatial scales to
            inform land use related decision making.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            InVEST is a family of tools to assess how distinct scenarios of land
            use development might lead to different ecosystem services and human
            well-being related outcomes in particular geographic areas. InVEST
            enables decision-makers to assess the tradeoffs associated with
            alternative choices and to identify areas where investment in
            natural capital can enhance human development and conservation in
            different ecosystems. InVEST models are spatially explicit, using
            diverse data as information input and producing maps as outputs.
            InVEST produces results in either biophysical terms (e.g., tons of
            carbon sequestered) or economic terms (e.g., net present value of
            that sequestered carbon). Maps, trade-off curves and balance sheets
            are produced, which can be used for assessing scenarios in an
            iterative process of stakeholder consultations.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Decision making on land use (often involving multiple land use
            options) based on the impact of alternative land use scenarios and
            tradeoffs on ecosystem service provision and the benefits derived
            from them by various actors.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Other types of analysis and/or decision making related to ecosystem
            service provision, including addressing the following questions:
            <br />
            <ul>
              <li>
                Where do ecosystem services originate and where are they
                con-sumed?
              </li>
              <li>
                How does a proposed forestry management plan affect timber
                yields, biodiversity, water quality and recreation?
              </li>
              <li>
                What kinds of coastal management and fishery policies will yield
                the best returns for sustainable fisheries, shoreline protection
                and recrea-tion?
              </li>
              <li>
                Which parts of a watershed provide the greatest carbon
                sequestration, biodiversity, and tourism values?
              </li>
              <li>
                Where would reforestation achieve the greatest downstream water
                quality benefits while maintaining or minimizing losses in water
                flows?
              </li>
              <li>
                How will climate change and population growth impact ecosystem
                ser-vices and biodiversity?
              </li>
              <li>
                What benefits does marine spatial planning provide to society in
                addi-tion to food from fishing and aquaculture and secure
                locations for re-newable energy facilities?
              </li>
              (Source:{" "}
              <a href="https://storage.googleapis.com/releases.naturalcapitalproject.org/invest-userguide/latest/the_need_for.html#who-should-use-invest">
                <Link as={LinkIcon} />
              </a>{" "}
              )
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Local: usually specific areas, such as PAs and their surroundings
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                The resources needed for applying the method are strongly
                dependent on data availability, available expertise for using
                the InVEST model and the scale of stakeholder process required
                for analysing the issue of interest.
              </li>
              <li>
                InVEST software is free of charge. Hiring experts with GIS
                skills and knowledge of using InVEST is likely to be the main
                cost influencing factor.
              </li>
              <li>Basic to intermediate skills in GIS are required.</li>
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
                Geared towards real decision making processes – not just an
                academic method.
              </li>
              <li>
                Tiered design allows the use of simple to more complex models
                based on availability of data and expertise.
              </li>
              <li>
                Comprehensive analysis of comparative benefits of alternative
                land use scenarios, able to suggest optimization and tradeoffs.
              </li>
              <li>
                InVEST is open source and available for free. Compatibility of
                most modules with free GIS software
              </li>
              <li>Documentation and guidance are available.</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Quality and availability of input data can be an issue and can
                influence the quality of results.
              </li>
              <li>
                Experience and expertise in using InVEST can influence the
                credibility of results.
              </li>
              <li>
                Processing and interpreting results can be difficult for
                beginning users
              </li>
              <li>
                Some models may be oversimplified for a particular purpose. In
                this case it is recommended people use alternative ecosystem
                service models such as Soil and Water Assessment Tool (SWAT ) in
                combination with InVEST.
              </li>
              <li>Only available in English.</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Sharp, R., Tallis, H. T., Ricketts, T., Guerry, A. D., Wood, S. A.,
            Chaplin-Kramer, R., Nelson, E., Ennaanay, D., Wolny, S., Olwero, N.,
            Vigerstol, K., Pennington, D., Mendoza, G., Aukema, J., Foster, J.,
            Forrest, J., Cameron, D., Arkema, K., Lonsdorf, E., Kennedy, C.,
            Verutes, G., Kim, C.K., Guannel, G., Papenfus, M., Toft, J., Marsik,
            M., Bernhardt, J., Griffin, R., Glowinski, K., Chaumont, N.,
            Perelman, A., Lacayo, M. Mandle, L., Hamel, P., Vogl, A. L., Rogers,
            L., Bierbower, W. (2015).{" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://data.naturalcapitalproject.org/invest-releases/documentation/current_release/">
                InVEST+VERSION + User’s Guide.Research report
              </a>
            </span>{" "}
            The Natural Capital Project, Stanford University, University of
            Minnesota, The Nature Conservancy, and World Wildlife Fund. Accessed
            on 19 September 2018 at{" "}
            <a href="https://www.researchgate.net/publication/323832082_InVEST_User%27s_Guide">
              {" "}
              <Link as={LinkIcon} />
            </a>{" "}
            (9.5 MB)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Various updates since first release in 2007. Current version is
            3.5.0. (2018)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Tallis, H., S. Polasky (2009).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1749-6632.2009.04152.x/abstract;jsessionid=F4ACCD9D26130005042C57C30FF2735D.f02t04">
                Mapping and valuing ecosystem services as an approach for
                conservation and natural-resource management.
              </a>
            </span>
            Annals of the New York Academy of Sciences 1162: 265–283. Accessed
            on 19 September 2018 at
            <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1749-6632.2009.04152.x/abstract;jsessionid=F4ACCD9D26130005042C57C30FF2735D.f02t04">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Ruckelshaus, M., McKenzie, E., Tallis, H., Guerry, A., Daily, G.,
            Kareiva, P., Polasky, S., Ricketts, T., Bhagabati, N., Wood, S.A.,
            Bernhardt, J. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://ac.els-cdn.com/S0921800913002498/1-s2.0-S0921800913002498-main.pdf?_tid=819bf8c8-2bb7-4d02-aab2-af7779704aea&acdnat=1536590233_97836b4667e92ad1a7dec36228fd1a8c">
                Notes from the field: Lessons learned from using ecosystem
                service ap-proaches to inform real-world decisions.
              </a>
            </span>
            Ecological Economics Volume 115, 11-21 pp. Accessed on 19 September
            2018 at
            <a href="https://www.sciencedirect.com/science/article/pii/S0921800913002498">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guerry, A. D., M. H. Ruckelshaus, K. K. Arkema, J. R. Bernhardt, G.
            Guannel, Choong-Ki Kim, M. Marsik, M. Papenfus, J. E. Toft, G.
            Verutes, S. A. Wood, M. Beck, F. Chan, K. M. A. Chan, G. Gelfenbaum,
            B. D. Gold, B. S. Halpern, W. B. Labiosa, S. E. Lester, P. S. Levin,
            M. McField, M. L. Pinsky, M. Plummer, S. Polasky, P. Ruggiero, D. A.
            Sutherland, H. Tallis, A. Day & J. Spencer (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.tandfonline.com/doi/abs/10.1080/21513732.2011.647835">
                Modeling benefits from nature: using eco-system services to
                inform coastal and marine spatial planning. International
                Journal of Biodiversity Science, Ecosystem Services & Management
                8
              </a>
            </span>
            (1-2):107-121. Accessed on 19 September 2018 at
            <a href="http://www.tandfonline.com/doi/abs/10.1080/21513732.2011.647835">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Natural Capital Project has used InVEST in 20 decision making
            processes worldwide, including in a development context{" "}
            <a href="https://naturalcapitalproject.stanford.edu/invest-software-platform/software-support-resources">
              {" "}
              <Link as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            A wide range of related resources – many with links to abstracts or
            full text – is listed at{" "}
            <a href="https://naturalcapitalproject.stanford.edu/software/invest">
              {" "}
              <Link as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Learning resources (online courses etc.) are listed at{" "}
            <a href="https://naturalcapitalproject.stanford.edu/invest-software-platform/software--support-resources">
              {" "}
              <Link as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Descriptions for application of the methodology for specific ES
            (carbon sequestration, pollination, water purification, nutrient
            retention, recreation, sediment retention, etc.) are provided at{" "}
            <a href="http://www.aboutvalues.net/">
              {" "}
              <Link as={LinkIcon} />
            </a>{" "}
            (Search Method Data-base for InVEST)
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll45;
