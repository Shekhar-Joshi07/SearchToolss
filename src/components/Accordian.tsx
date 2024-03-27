import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Text,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

const Accordian = (props: any) => {
  const Reference =
    typeof props.Reference === "string" ? props.Reference.split("||") : []; // const separater = ',';
  const Resources =
    typeof props.Related_Resources === "string"
      ? props.Related_Resources.split("||")
      : []; // const separater = ',';
  const DocExperience =
    typeof props.DocExperience === "string"
      ? props.DocExperience.split("||")
      : []; // const separater = ',';
  // const parts = props.Reference.split(separater);

  return (
    <>
      <Accordion allowToggle style={{ backgroundColor: "#212529" }} mb="4">
        <AccordionItem
          style={{ borderRadius: "15px", border: "1px solid white" }}
          textAlign={"justify"}
        >
          <h1>
            <AccordionButton fontWeight={500} height={""}>
              <Box as="span" flex="1" textAlign="left">
                {" "}
                &nbsp;
                {props.heading}
                <span style={{ display: "none" }}> {props.category}</span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            {/* Type */}
            <Box
              as="span"
              flex="1"
              color="#44a48c"
              textAlign="left"
              fontWeight={700}
              mb={5}
            >
              Type : &nbsp;
            </Box>
            {props.type} <br />
            {/* Purpose */}
            <Box
              as="span"
              flex="1"
              color="#44a48c"
              textAlign="left"
              fontWeight={700}
            >
              Purpose : &nbsp;
            </Box>
            <Box ml={5} mb={5}>
              {props.purpose}
            </Box>
            {/* Structure And Functions */}
            <Box
              as="span"
              flex="1"
              color="#44a48c"
              textAlign="left"
              fontWeight={700}
            >
              Structure And Functions :
            </Box>
            <Box ml={5} mb={5}>
              {props.Structure_and_function}
            </Box>
            {/*Typical use */}
            <Box
              as="span"
              flex="1"
              color="#44a48c"
              textAlign="left"
              fontWeight={700}
            >
              Typical use :
            </Box>
            <Box ml={5} mb={5}>
              {props.typical_use}
            </Box>
            {props.Additional_potential_uses && (
              <>
                <Box
                  as="span"
                  flex="1"
                  color="#44a48c"
                  textAlign="left"
                  fontWeight={700}
                >
                  Additional Potential Uses : &nbsp;
                </Box>
                <Box ml={5} mb={5}>
                  {props.Additional_potential_uses}
                </Box>
              </>
            )}
            {/*                        
                        <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                            Level of Application :
                        </Box>
                        <Box ml={5} mb={5}>
                            {props.level_of_appl}
                        </Box>

                        <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                            Skill and Resource Required :
                        </Box>
                        <Box ml={5} mb={5}>
                            {props.skill_and_resource}
                        </Box>
                       
                        <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                            Strengths :
                        </Box>
                        <Box ml={5} mb={5}>
                            {props.Strengths}
                        </Box>

                      
                        <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                            Weaknesses :
                        </Box>
                        <Box ml={5} mb={5}>
                            {props.Weaknesses}
                        </Box>
                        
                        <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                            Reference :
                        </Box>
                        
                        <Box ml={5} mb={5} >
                        {Reference[0]} 
                        <Box as='span' textColor={"Highlight"} textDecoration={"underline"}>
                            <a href={Reference[1]} target='_blank'>here</a>
                     
                            </Box>
                        </Box>
        
                        {props.Documented_Experience && (
                            <Box ml={5} mb={5} >
                            {DocExperience[0]} 
                            <Box as='span' textColor={"Highlight"} textDecoration={"underline"}>
                                <a href={DocExperience[1]} target='_blank'>here</a>
                    
                                </Box>
                            </Box>
                        )}
                             
                        
                        {props.Versions_and_modifications && (
                            <>
                                <Box as="span" flex='1' textAlign='left' fontWeight={700}>
                                Versions and Modifications : &nbsp;
                                </Box>
                                {props.Versions_and_modifications} <br />
                            </>
                        )}

                        <Box ml={5} mb={5} >
                        {Resources[0]} 
                        <Box as='span' textColor={"Highlight"} textDecoration={"underline"}>
                            <a href={Resources[1]} target='_blank'>here</a>
                           
                            </Box>
                        </Box> */}
            <Link
              onClick={() => {
                props.clicked(true);
              }}
              //   href={`tool${props.Route}`}
              fontWeight={700}
              textDecoration="underline"
            >
              View more...
            </Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Accordian;
