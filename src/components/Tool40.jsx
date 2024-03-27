import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import Accordian from "./Accordian";
import Tool40Content from "../assets/defaultToolData.json";

const Tool40 = ({ searchTerm, tNumber, cl }) => {
  const toolContent = Tool40Content[39];
  const [isClicked, setClicked] = useState(false);
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
    const index = text?.toLowerCase().indexOf(searchTermLC);
    if (index === -1) return text;
    const before = text?.slice(0, index);
    const match = text?.slice(index, index + searchTerm.length);
    const after = text?.slice(index + searchTerm.length);
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

export default Tool40;
