import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
   <Container maxW='xl' centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg="Beige"
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px">
      <Text fontSize="4xl" fontFamily="Work sans" color="black"
      textAlign="center" fontWeight="bold">
        RADION
        </Text>
    </Box>
    <Box bg="Beige" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
   </Container>
  );
}

export default Homepage
