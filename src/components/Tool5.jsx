import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";

const Tool5 = ({ searchTerm, tNumber, cl }) => {
  const [isClicked, setClicked] = useState(false);
  const toolContent = useMemo(
    () => ({
      category: "SPATIAL PLANNING",
      headingText: "Tool 5: NATIONAL SYSTEM PLANNING FOR PROTECTED AREAS ",
      type: "Guideline including case studies",
      Purpose: "General guidance on national PA system planning",
      Structure_and_function:
        "General guideline consisting of: Explanation of general rationale and policy basis for PA system planning. Discussion of characteristics of PA systems: representativeness, comprehensiveness and balance, adequacy, coherence and complementarity, consistency, cost-effectiveness, efficiency and equity, Scope, information needs and underlying concepts of PA system plans. Requirements to implement system plans: community, involvement and consultation financing, commitment and political support, institutions, training, partnerships, Guidance on PA system planning process and product, as well as implementation and monitoring/evaluation.  Appendices, references and useful contacts",
      Typical_Use: "National PA system planning",
      Additional_Potential_Uses:
        "vSub-national or eco-regional PA system planning, Review, assessment and improvement of existing PA systems",
      Level_Of_Application: "Typically PA system level",
      Skill_And_Resources_Required:
        "vNo particular prerequisites for some uses, Need for national PA system development capacity and resources for core use, Implementation costs vary widely",
      Strengths:
        "Broad, general approach with wide applicability,Endorsement by IUCN WCPA, A solid and (to a large extent – see limitations  under weaknesses) still valid piece of basics",
      Weaknesses:
        "No specific guidance included. It pre-dates important developments in conservation policy and standard setting, such as distinguishing different governance types of protected areas and the requirement to diversify governance types in a PA system (e.g. laid down in CBD’s Programme of Work on Protected Areas of 2004, PoWPA ), the Aichi Biodiversity Target 11 of the CBD’s Strategic Plan 2011–2020 including the concept of other effective area-based conservation measures (OECMs), and requirements relating to consultation of indigenous and local communities deriving from CBD decisions (e.g. PoWPA) and other international agreements and declarations (e.g. UN Declaration on the Rights of Indigenous Peoples, UNDRIP 2008 )",
      Reference:
        "Davey, A.G. (1998). National System Planning for Protected Areas. Gland, Switzerland and Cambridge, UK:IUCN. x + 71pp. Accessed 5 October 2018 at || https://portals.iucn.org/library/efiles/documents/PAG-001.pdf",
      Documented_Experience:
        "Two case studies included in methodological guidelines",
      route: "5",
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

export default Tool5;
