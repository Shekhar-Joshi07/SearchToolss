import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";

const Tool2 = ({ searchTerm, tNumber, cl, searchMenu }) => {
  const [isClicked, setClicked] = useState(false);
  // Define your tool content here
  const toolContent = useMemo(
    () => ({
      category: "POLICY AND LEGAL FRAMEWORK",
      headingText: "Tool 2: IUCN GUIDELINES FOR PROTECTED AREAS LEGISLATION",
      type: "Guidelines",
      Purpose:
        "Support and guidance to the establishment, further development and implementation of effective national legal frameworks for PA systems.",
      Structure_and_function: "Guideline document consisting of four parts",
      Typical_Use:
        "Support to legislative review and drafting process across the spectrum of national and local needs vStimulation of dialogue between government authorities and stakeholders to modernize national policy and legal frameworks Implementation of international commitments at the level of national PA law Guidance on legal drafting relevant to PAs Information for those employed in executive agencies that oversee and implement other policies and   programmes affecting or affected by protected areas legislation",
      Additional_Potential_Uses:
        "Source of information for those involved with or interested in the progress, review or drafting of protected areas legislation – e.g. concerned or affected communities, organizations, corporations, groups or individuals. Source of information for academic audiences interested in the progressive development of protected areas law, such as students, professors or researchers",
      Level_Of_Application: "Typically national PA systems",
      Skill_And_Resources_Required:
        "Depends on specific use; Generally, a basic to moderate legal understanding is required for meaningful use",
      Strengths:
        "Comprehensiveness and depth Authority and expertise of IUCN Environmental Law Programme and other contributing IUCN bodies, such as WCPA and other IUCN Commission members Availability in three languages Includes comprehensive consideration of specificities for the marine realm and for transboundary situations",
      Weaknesses:
        "vLong and complex document which requires some digesting to be applied in new contexts No step-by-step guidance on key  aspects of PA legislation",
      Reference:
        "Lausche, B. (2011). Guidelines for Protected Areas Legislation. Gland, Switzerland: IUCN. xxvi + 370 pp. Accessed on 5 October 2018 at || https://portals.iucn.org/library/efiles/documents/EPLP-081.pdf",
      route: "2",
    }),
    []
  );

  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (isClicked) {
      tNumber(toolContent.route);
      cl(true);
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

  // console.log(searchResult);
  return (
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
          level_of_appl={highlightSearchTerm(searchResult.Level_Of_Application)}
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
  );
};

export default Tool2;
