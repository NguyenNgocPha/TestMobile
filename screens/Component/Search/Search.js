import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, FlatList, Button } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-elements';
import { NativeBaseProvider, Heading, Center, Image, Icon, Avatar, Box, VStack, HStack, Spacer, Title } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Square } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Pricing from "./Item.jsx";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class search extends Component {
  render() {
    return (
      <NativeBaseProvider>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.sliderTextHeader}>Find local doctors who take your insurance</Text>

            <View style={styles.boldHeader}>
              <Searchbar
                placeholder="Search"
              />
              <View style={styles.boldHeaderButton}>
                <Button
                  title='Find care'
                  color='#00CED1'
                  onPress={() => console.log('Pressed')}>
                </Button>
              </View>
            </View>
          </View>
          
          <View style={styles.center}>
            <Text style={styles.sliderText}>Top-searched specialties</Text>
            <View style={styles.container1}>
              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%"  _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={{
                    uri: "https://romatoo.com/resource/icon/retro-category/dermatologist.png"
                  }} alt="Alternate Text" size="sm" />
                </Center><Text style={{ width: '80%', color:"white"}} numberOfLines={1} ellipsizeMode='tail'>Dermatologist</Text>
              </Center>

              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%"  _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={
                    require("../../../assets/x_ray.png")
                  } alt="Alternate Text" size="sm" />
                </Center>
                X-ray
              </Center>

              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%"  _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={
                    require("../../../assets/obgyn.png")
                  } alt="Alternate Text" size="sm" />
                </Center>
                obgyn
              </Center>
            </View>


            <View style={styles.container1}>
              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%" _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={
                    require("../../../assets/Pediatrics.png")
                  } alt="Alternate Text" size="sm" />
                </Center>
                Pediatrics
              </Center>

              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%"  _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={{
                    uri: "https://dentistofredmond.com/wp-content/uploads/2021/01/Oral-Surgery.png"
                  }} alt="Alternate Text" size="sm" />
                </Center>
                Dentist
              </Center>

              <Center width="24%" bg="#00CED1" borderRadius="20px" marginRight="8%"  _text={{
                color: "warmGray.50",
                fontWeight: "medium"
              }} shadow={"3"}>
                <Center>
                  <Image source={{
                    uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/patient-surgery-3568978-2983120.png"
                  }} alt="Alternate Text" size="sm" />
                </Center>
                Surgery
              </Center>
            </View>


          </View>

          <View style={styles.footer}>
            <Text style={styles.sliderText}>Nearby doctors</Text>
            <Example />
          </View>

        </View>
      </NativeBaseProvider>
    )
  }
}


const Example = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    role: "Nearby",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    role: "Nearby",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    role: "Nearby",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    role: "Nearby",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    role: "Nearby",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];
  return <Box>
    <ScrollView style={styles.scrollView} horizontal={true}>
      {data.map((item, i) => {
        return (
          <View style={{ justifyContent: "center", alignItems: "center", height: "100%", marginLeft: '3%', marginTop: "4px", width: "25%" }} key={i}>
            <Avatar size="70px" source={{
              uri: item.avatarUrl
            }} />
            <Text style={{ fontSize: "20px" }} >{item.fullName}</Text>
            <Text>{item.role}</Text>

          </View>);
      })}
    </ScrollView>
  </Box>;
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    height: "35%",
    width: "100%",
    backgroundColor: '#00CED1'
  },

  boldHeader: {
    marginTop: "10px",
    marginLeft: "7%",
    height: "50%",
    width: "86%",
    borderRadius: "4%",
    backgroundColor: "#FFFAFA",

  },
  boldHeaderButton: {
    marginTop: "10px",
    width: "70%",
    height: "30%",
    marginLeft: "15%"
  },
  sliderCard: {
    width: 178,
    height: 98,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginLeft: 15,
    borderRadius: 10,
  },
  sliderTextHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  sliderText: {
    fontSize: 15,
    marginLeft: "6%",
    paddingTop: "2px",
    fontWeight: 'bold',

  },
  center: {
    height: "40%",
    width: "100%",

  },
  footer: {
    height: "25%",
    width: "100%",
  },
  container1: {
    flexDirection: "row",
    height: "40%",
    width: "100%",
    marginLeft: "6%",
    marginTop: "12px"

  },



});
