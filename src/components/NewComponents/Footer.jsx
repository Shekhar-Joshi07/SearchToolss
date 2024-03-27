"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaGlobe,
  FaInstagram,
  FaMailBulk,
  FaMobile,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import logo from "../../assets/pcalogo.png";
const Logo = (props) => {
  return <img width="140px" src={logo} alt="footer logo" />;
};

const SocialButton = ({ children, label, href, type }) => {
  return (
    <chakra.button
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      type={type}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={
        {
          // bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }
      }
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      borderTop="1px solid #ffff"
      // bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue("gray.400", "gray.200")}
      mt="3.67rem"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text mt="1rem" fontSize="small" textAlign="center">
          © Copyright PCA Toolkit v.1.0.2024{" "}
        </Text>
        <Stack direction={"row"} spacing={6} color="white">
          <SocialButton label={"Website"} href={"#"}>
            <FaGlobe />
          </SocialButton>
          <SocialButton label={"Mail"} href={"#"}>
            <FaEnvelope />
          </SocialButton>
          <SocialButton label={"Phone"} href={"#"}>
            <FaPhoneAlt />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
