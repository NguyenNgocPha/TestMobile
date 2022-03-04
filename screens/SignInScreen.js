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
  ScrollView,
} from "native-base";

import { doc, setDoc } from "firebase/firestore";
import NativeBaseIcon from "../components/NativeBaseIcon";
import { LinearGradient } from "expo-linear-gradient";
import { auth, db } from "../firebase";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

export default function SignInScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSignUp = () => {
    if (data.name === "" || data.age < 0) {
      alert("Please fill full name and valid age!");
    } else {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);

          const patient = {
            Name: data.name,
            Age: data.age,
            UserID: user.uid,
          };

          const myDoc = db
            .collection("patient")
            .doc(user.uid)
            .set({ patient })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => alert(error.message));
    }
  };

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
          <Modal.Header>Want to set focus somewhere?</Modal.Header>
          <Modal.Body>
            The below input will get focus upon opening of the Modal
            <Input
              mt={4}
              ref={initialRef}
              placeholder="I'll recieve focus on Modal's opening"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
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
              color="emerald.600"
              fontWeight="medium"
              size="xs"
            >
              Create an account
            </Heading>
          </Center>

          <VStack space={3} mt="5">
            <ScrollView>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input
                  onChangeText={(value) => setData({ ...data, name: value })}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Age</FormControl.Label>
                <Input
                  onChangeText={(value) => setData({ ...data, age: value })}
                />
              </FormControl>
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
                  onChangeText={(value) =>
                    setData({ ...data, password: value })
                  }
                />
              </FormControl>
            </ScrollView>
            <Button mt="2" colorScheme="rose" onPress={handleSignUp}>
              Create an account
            </Button>
            <Button
              mt="2"
              colorScheme="blue"
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Go To Sign In
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
