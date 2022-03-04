import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  NativeBaseProvider,
  Text,
  Box,
  Center,
  FormControl,
  Input,
  KeyboardAvoidingView,
} from "native-base";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import {
  useFonts,
  Raleway_200ExtraLight,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";

const showUser = () => {
  console.log(auth.currentUser);
};

const HomeScreen = () => {
  const [data, setData] = useState("");
  const navigation = useNavigation();

  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
  });

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const NBBox = (props) => {
    return <Box borderRadius="md" bg="primary.600" {...props} />;
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        h={{
          base: "400px",
          lg: "auto",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Box safeArea p="1" py="8" w="100%" h="50%" bg="primary.200">
          <NBBox m="5" px="5" py="5" h="100%" bg="primary.100">
            <Center>
              <Text style={{ fontFamily: "Raleway_400Regular", fontSize: 22 }}>
                Find your doctor
              </Text>
              <FormControl>
                <Input
                  size="sm"
                  variant="rounded"
                  onChangeText={(value) => setData({ ...data, name: value })}
                />
              </FormControl>
            </Center>
          </NBBox>
          <Text>Specialty</Text>
        </Box>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
