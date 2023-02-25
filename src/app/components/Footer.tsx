"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <Box>
        <Box backgroundColor="#051120" py="205px">
          {/* Icons */}
          <Flex gap="20px" justify="center">
            <Box color="white">
              <BsFacebook size="35px" />
            </Box>
            <Box color="white">
              <ImInstagram size="35px" />
            </Box>
            <Box color="white">
              <AiFillTwitterCircle size="40px" />
            </Box>
          </Flex>
          {/* Text */}
          <Box textAlign="center" mt="40px">
            <Text color="white">Info . Support . Marketing</Text>
          </Box>
          <Box textAlign="center" lineHeight="40px">
            <Text color="white">Term of Use . Privacy Policy</Text>
          </Box>
          <Box textAlign="center">
            <Text color="#333a44" fontWeight="semibold">
              @ 2018 Clarity Money
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
