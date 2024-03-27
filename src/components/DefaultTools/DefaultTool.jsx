import React from 'react';
import { Box } from '@chakra-ui/react';
import Accordian from '../Accordian';
import Defaultdata from "../../assets/defaultToolData.json"

const DefaultTool1 = () => {
  return (
    <React.Fragment>


      {Defaultdata?.map((data, ind) => {
        return (
          <>
            <Box color={'black'} key={ind}>
              <Accordian key={ind + 1}
                category = {data.category}
                heading={data.headingText}
                type={data.type}
                purpose={data.Purpose}
                Structure_and_function={data.Structure_and_function}
                typical_use={data.Typical_Use}
                Additional_potential_uses={data?.Additional_Potential_Uses}
                level_of_appl={data.Level_Of_Application}
                skill_and_resource={data.Skill_And_Resources_Required}
                Strengths={data.Strengths}
                Weaknesses={data.Weaknesses}
                Reference={data.Reference}
                Versions_and_modifications={data.Versions_and_modifications}
                Documented_Experience={data.Documented_Experience}
                Related_Resources={data.Related_Resources}
                Route={data.route}
              />

            </Box>
          </>
        )
      })}


    </React.Fragment>

  );
};

export default DefaultTool1;
