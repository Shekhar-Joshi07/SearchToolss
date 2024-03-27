"use client";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Footer from "../components/NewComponents/Footer";
import logo from "../assets/pcalogo.png";
const logoStyle = {
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  borderRadius: "100px",
  border: "3px solid #049ddb",
  cursor: "pointer",
};
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-2 col-md-3">
            <div className="left-sidebar">
              <div className="d-flex align-items-center justify-content-between">
                <img
                  src={logo}
                  className="bg-transparent"
                  alt="logo"
                  style={logoStyle}
                  onClick={() => (window.location.href = "/home")}
                />
              </div>
              <div className="all_menuHere">
                <ul className="MenuLinks_here align-items-center  justify-content-center">
                  {/* <li>
                <Link href="/casestudies/Index">
                  Policy and Legal Framework
                </Link>
              </li> 
                  <Link to="/home">
                    <li>Home</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-12">
            <Container maxW={"5xl"}>
              <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ md: 14 }}
                // py={{ base: 20 }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                  lineHeight={"110%"}
                >
                  <Text as={"span"} color={"green.400"}>
                    About Toolkit
                  </Text>
                </Heading>
                <Text color={"white"} textAlign={"justify"} lineHeight={"180%"}>
                  Protected areas are one of the most important instruments of
                  worldwide conservation efforts. Vital for healthy and
                  functioning ecosystems, protected area systems determine the
                  fate of many endangered species along with the genetic
                  diversity and ecological processes they sustain. Moreover,
                  preserved natural habitats provide all living beings on earth
                  with essential life-sustaining benefits and ecosystem services
                  such as air, water and food and thus also play a key role in
                  supporting human livelihoods. Against the backdrop of climate
                  change, continued ecosystem degradation and ongoing
                  biodiversity loss worldwide, well-designed, connected and
                  effectively managed protected areas are essential in
                  maintaining the adaptive capacity and health of ecosystems. As
                  increasingly recognised in the light of the COVID-19 pandemic,
                  they are also key to human health. In the past few decades,
                  the world has experienced a surge in the formal establishment
                  of protected areas, their surface area to date covering about
                  15% of land area and 8% of the ocean. Most protected areas are
                  governed and managed by national or sub-national government
                  agencies. During recent years, however, the range of actors
                  involved in protected area governance and management has
                  broadened through increasing numbers of co-management
                  arrangements, indigenous peoples’ and community conserved
                  areas and protected areas initiated by private actors. This
                  sign of growing ownership is encouraging and gives hope for
                  more acceptance and sustainability of protected areas.
                  Nevertheless, a great deal remains to be done both to enhance
                  good and equitable governance and management effectiveness of
                  protected areas worldwide and to expand and increase efforts
                  in other key biodiversity areas and in areas that are
                  important for ecosystem services that are not legally
                  protected.
                  {/* <Footer /> */}
                </Text>
                {/* <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text>
            </Box>
          </Stack> */}
              </Stack>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
