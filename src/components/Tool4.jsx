import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";

const Tool4 = ({ searchTerm, tNumber, cl }) => {
  const [isClicked, setClicked] = useState(false);
  const toolContent = useMemo(
    () => ({
      category: "SPATIAL PLANNING",
      headingText:
        "Tool 4: A GLOBAL STANDARD FOR THE IDENTIFICATION OF KEY BIODIVERSITY AREAS (KBA)",
      type: "Guideline, assessment methodology andglobal standard",
      Purpose:
        "To locate and highlight sites that make significant contributions to the global persistence of biodiversity and, thus, identify high priority areas for protection of biodiversity",
      Structure_and_function:
        "The standard is a set of 11 criteria with corresponding thresholds for KBA status, explanations and guidance for application. If at least one KBA criterion is met, a site is considered a KBA. General guidance on the spatial delineation of KBAs (i.e. where to draw their borders) and a glossary of all relevant terms is also provided. KBA criteria: Threatened biodiversity Threatened species Threatened ecosystem types Geographically restricted biodiversity Individual geographically restricted species Co-occurring geographically restricted species Geographically restricted assemblages Geographically restricted ecosystem types Ecological integrity Biological processes Demographic aggregations Ecological refugia Recruitment sources Irreplaceability through quantitative analysis",
      Typical_Use:
        "Site prioritization for PA system development or individual PA siting/zoning, based on occurrence of species of high conservation importance",
      Additional_Potential_Uses:
        "Review of existing PA systems Site prioritisation for PA system support Species conservation action planning in a spatial context Site prioritization for other effective area-based conservation measures (OECMs)",
      Level_Of_Application: "Individual PAs (e.g. for zoning) or PA systems",
      Skill_And_Resources_Required:
        "Sound information on the distribution patterns of globally (or, in the case of national adaptations) nationally important biodiversity that potentially triggers KBA criteria in the area of interest, including on relative abundance/coverage. If this is not readily available, considerable taxonomic and/or field ecological expertise GIS expertise for spatial delineation of KBAs Capacity to run expert consultation workshops to apply the criteria and to produce reports presenting and discussing the findings",
      Strengths:
        "Transparent, reproducible and concise guideline and method with quantitative thresholds  Relatively simple Direct link to IUCN Red List of Threatened Species, which provides sound information base for evaluation of species extinction risk Developed with strong expertise and authority of IUCN network, and tested through extensive user consultation during preparation and before publication Integrates earlier approaches that focused on individual taxonomic groups, such as birds (IBA) or plants (IPA)",
      Weaknesses:
        "Focused on site-based conservation measures. Does not provide clear guidance or a GIS tool for spatially explicit site prioritization. Requires comprehensive data, particularly in relation to judging the irreplaceability of a given area for the species in question. Thresholds of criteria are set for global bio-diversity importance and may need adaptation. Method detects importance of sites for bio-diversity conservation only – not degree of being threatened or costs of conservation measures. Further analysis may be needed to derive conservation priorities from KBA results",
      Reference:
        "IUCN (2016). A Global Standard for the Identification of Key Biodiversity Areas, Version 1.0. First edition. Gland, Switzerland: IUCN. 46 pp. Accessed on 12 October 2018 || https://portals.iucn.org/library/sites/library/files/documents/2016-048.pdf",
      route: "4",
    }),
    []
  );

  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [isResultFound, setIsResultFound] = useState(false);

  useEffect(() => {
    if (typeof tNumber !== "undefined") {
      if (isClicked) {
        tNumber(toolContent.route);
        cl(true);
      }
    }
  }, [isClicked]);

  useEffect(() => {
    let timeoutId;

    const delayedSearch = () => {
      setLoading(true);
      timeoutId = setTimeout(() => {
        const searchTermLC = searchTerm.toLowerCase();
        const toolContentValues = Object.values(toolContent);
        const isMatched = toolContentValues.some((value) =>
          value.toLowerCase().includes(searchTermLC)
        );
        const result = isMatched ? toolContent : null;
        setSearchResult(result);
        setLoading(false);
        if (result === null) {
          setIsResultFound(false);
        }
      }, 0);
    };

    if (searchTerm) {
      delayedSearch();
    } else {
      setSearchResult(null);
    }

    return () => clearTimeout(timeoutId);
  }, [searchTerm, toolContent]);

  if (!searchResult && !loading) {
    return null;
  }

  const highlightSearchTerm = (text) => {
    const searchTermLC = searchTerm.toLowerCase();
    const index = text.toLowerCase().indexOf(searchTermLC);
    if (index === -1) return text;
    const before = text.slice(0, index);
    const match = text.slice(index, index + searchTerm.length);
    const after = text.slice(index + searchTerm.length);
    return (
      <>
        {before}
        <Text as="span" bg="yellow" fontWeight="bold" color="black">
          {match}
        </Text>
        {after}
      </>
    );
  };

  return (
    <React.Fragment>
      <Box color={"black"}>
         {searchResult && (
          <Accordian
            clicked={setClicked}
            heading={highlightSearchTerm(searchResult.headingText)}
            category={searchResult.category}
            type={highlightSearchTerm(searchResult.type)}
            purpose={highlightSearchTerm(searchResult.Purpose)}
            Structure_and_function={highlightSearchTerm(
              searchResult.Structure_and_function
            )}
            typical_use={highlightSearchTerm(searchResult.Typical_Use)}
            level_of_appl={highlightSearchTerm(
              searchResult.Level_Of_Application
            )}
            skill_and_resource={highlightSearchTerm(
              searchResult.Skill_And_Resources_Required
            )}
            Strengths={highlightSearchTerm(searchResult.Strengths)}
            Weaknesses={highlightSearchTerm(searchResult.Weaknesses)}
            Reference={highlightSearchTerm(searchResult.Reference)}
            Route={searchResult.route}
          />
         
        )}
      </Box>
    </React.Fragment>
  );
};

export default Tool4;
