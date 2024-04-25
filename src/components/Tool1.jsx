import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";

const Tool1 = ({ searchTerm, tNumber, cl, searchMenu }) => {
  const [isClicked, setClicked] = useState(false);

  const toolContent = useMemo(
    () => ({
      category: "POLICY AND LEGAL FRAMEWORK",
      headingText: "Tool 1: Ecolex the gateway to environmental law",
      type: "A set of online databases",
      Purpose:
        "Providing the most comprehensive possible global source of information on environmental law (including PA related) to increase knowledge of, and build capacity on, environmental law at local, national and global levels.",
      Structure_and_function:
        "Set of online databases of treaties, legislation, court decisions and, literature",
      Typical_Use:
        "Very wide range of applications which require access to existing legal documents, e.g. analysis, development, implementation, evaluation of legal tools to support effective PA system",
      Level_Of_Application: "Usually national system and higher",
      Skill_And_Resources_Required:
        "Database access free of charge. Personal computer and internet access required. Basic understanding of database search and data retrieval methods. Some basic legal and contextual understanding is required to produce meaningful results from the databases",
      Strengths:
        "Wide range of resources covered (largest globally for environmental law). Detailed information and full text links for most items. Relatively easy search function, both in simple and advanced mode. Operates in three languages. Availability of support from IUCN Environmental Law Centre",
      Weaknesses:
        "Outputs are a mix of various classes of documents which typically require further screening. No export function for outputs to general or literature database programmes",
      Reference:
        "IUCN, UNEP and FAO: About Ecolex. Accessed on 5 October 2018 || https://www.ecolex.org/p/about/",
      route: "1",
    }),
    []
  );

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
      timeoutId = setTimeout(() => {
        const searchTermLC = searchTerm.toLowerCase();
        const toolContentValues = Object.values(toolContent);
        const isMatched = toolContentValues.some((value) =>
          value.toLowerCase().includes(searchTermLC)
        );
        const result = isMatched ? toolContent : null;
        setSearchResult(result);
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

  if (!searchResult) {
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

export default Tool1;
