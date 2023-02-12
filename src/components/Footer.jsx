import { Avatar, Box, Stack, Text, VStack,Flex } from "@chakra-ui/react";
import React from "react";
import source from "../assets/1.jpg";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>

        <VStack w={'full'} alignItems={['center', 'flex-start']} >
          <Text fontWeight={'bold'}>About Us</Text>
          <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>We are the best crypto trading app in India, we provide our service and guidance at best price</Text>
        </VStack> 
        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={source}/>
          <Flex direction={'column'}>
            <Text margin={'auto'}>Our Founder</Text>
            <Text margin={'auto'} w={'32'} fontWeight={'bold'}>Suraj Dhankad</Text>
          </Flex>
          
        </VStack>


      </Stack>
    </Box>

  );
};

export default Footer;
