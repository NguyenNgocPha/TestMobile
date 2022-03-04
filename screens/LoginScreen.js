import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  FormControl,
  Button,
  Input,
  Box,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Modal,
  Image,
} from "native-base";

import NativeBaseIcon from "../components/NativeBaseIcon";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebase";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

export default function LoginScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const sendResetPass = () => {
    auth
      .sendPasswordResetEmail(data.emailReset)
      .then(() => {
        alert("Email have send!");
      })
      .catch((error) => alert(error.message));
    setModalVisible(!modalVisible);
  };
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsub;
  }, []);

  return (
    <NativeBaseProvider>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password</Modal.Header>
          <Modal.Body>
            Enter your email
            <Input
              mt={4}
              ref={initialRef}
              placeholder="Your Email"
              onChangeText={(value) => setData({ ...data, emailReset: value })}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button
                colorScheme="blue"
                onPress={() => {
                  sendResetPass();
                }}
              >
                SEND CODE
              </Button>
              <Button colorScheme="rose">CLOSE</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center w="100%">
        <Box safeArea p="1" py="8" w="100%" maxW="350">
          <Center>
            <Image
              source={require("../assets/images/U3db117176e5048109d53049785397510I.png")}
              alt="Doctor Home Logo"
              size={"xl"}
            />

            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome To Doctor Home
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign in to continue!
            </Heading>
          </Center>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                type="email"
                onChangeText={(value) => setData({ ...data, email: value })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={(value) => setData({ ...data, password: value })}
              />
              <Link
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                _
                text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                a
                lignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="rose" onPress={handleSignIn}>
              Sign in
            </Button>
            <Button
              mt="2"
              colorScheme="blue"
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              Create new account
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
