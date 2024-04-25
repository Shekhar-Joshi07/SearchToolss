import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";

const Tool3 = ({ searchTerm, tNumber, cl, searchMenu }) => {
  const [isClicked, setClicked] = useState(false);
  const toolContent = useMemo(
    () => ({
      category: "SPATIAL PLANNING",
      headingText: "Tool 3: BIODIVERSITY A-Z (SECTION: AREAS)",
      type: "Compilation of approaches, methods and tools",
      Purpose:
        "Overview over different types of areas of biodiversity importance and protected area categories and designations to support site prioritisation for  conservation. ",
      Structure_and_function:
        "Alphabetically listed summaries of globally relevant systems to identify, prioritise and protect areas of importance for biodiversity. These fall into two main categories:, 1. Protected areas are those under protected area frameworks, that have legal or other effective protection at the national level. Some have additional recognition through regional or international conventions and agreements (such as UNESCO World Heritage Sites).  2. Biodiversity designations (such as KBA, EBSA) are developed by governments, academics and NGOs  in order to identify areas of biodiversity importance or areas where biodiversity is threatened, as a means to focus attention and resources on their conservation. Each entry comprises the following: Map of current sites under the given type/designation Description Supported by Year of creation Geographical coverage Criteria for designation Management obligations/requirements Business relevance (since this was originally linked to a business and biodiversity initiative)  Downloadable factsheets, hyperlinks to original documentation and references where appropriate are also provided.",
      Typical_Use:
        "Overview over approaches, methods and tools for site prioritization in the context of conservation planning or PA system development Information of other actors (e.g. private sector) about the location of areas important for biodiversity Entry point for choosing methodologies for systematic conservation and PA system planning",
      Level_Of_Application: "Typically PA system level",
      Skill_And_Resources_Required: "Personal computer and internet access",
      Strengths:
        "Good overview and relatively wide coverage- Includes many of the important approaches and designations, such as Important Bird Areas (IBA), Important Plant Areas (IPA), Alliance of Zero Extinction (AZE) sites, biodiversity hotspots, etc. Comprehensive and consistent documentation of and links to each approach, method or tool documented Good presentation",
      Weaknesses: "The collection is comprehensive but not complete",
      Reference:
        "UN-Environment-WCMC: About Biodiversity a-z. Accessed on 5 October 2018 at || https://www.biodiversitya-z.org/themes/areas?s=home-icons ",
      route: "3",
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

    if (searchTerm || searchMenu) {
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

export default Tool3;
