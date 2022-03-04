import React, { useState } from 'react'
import { ButtonGroup } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { View, ScrollView, StyleSheet, FlatList, Image } from "react-native";

import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors
} from 'react-native-elements';

const list = [
  {
    name: 'A việt Duương cu te',
    id: '2321443434',
    avatar_url: 'https://hthaostudio.com/wp-content/uploads/2019/08/Anh-Doanh-nhan-56.jpg',
    subtitle: 'Vice President',
    dob: "06/12/2000",
    phone: "0238543586",
    email: "duongcute2001@gmail.com",
    address: "Kom tom city omai que nhoa"
  }
];

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader} >Profile</Text>
      </View>

      <ScrollView>
        <View>
          {
            list.map((l, i) => (
              <View key={l.id} style={{ marginBottom: "10px" }}>

                <ListItem bottomDivider>
                  <Avatar rounded size={80} source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <Text numberOfLines={1} style={{ width: 300, fontWeight: 'bold', marginBottom: "10px", fontSize: "25px" }} >{l.name}</Text>
                    <Text style={{ width: 200, }} numberOfLines={1} ellipsizeMode='tail'>Insurance code: {l.id}</Text>
                  </ListItem.Content>
                </ListItem>


                <ListItem bottomDivider>

                  <ListItem.Content>
                    <ListItem.Title style={{ fontSize: "20px" }}>D.O.B: </ListItem.Title>

                  </ListItem.Content>
                  <ListItem.Content right>
                    <ListItem.Title style={{ fontSize: "20px" }} right><Text>{l.dob}</Text></ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>

                  <ListItem.Content>
                    <ListItem.Title style={{ fontSize: "20px" }}>Phone number:</ListItem.Title>

                  </ListItem.Content>
                  <ListItem.Content right>
                    <ListItem.Title style={{ fontSize: "20px" }} right><Text>{l.phone}</Text></ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>

                  <ListItem.Content>
                    <ListItem.Title style={{ fontSize: "20px" }}>Email: </ListItem.Title>

                  </ListItem.Content>
                  <ListItem.Content right>
                    <Text numberOfLines={2} style={{ width: "500px", fontSize: "20px" }} >{l.email}</Text>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>

                  <ListItem.Content>
                    <ListItem.Title style={{ fontSize: "20px" }}>Address: </ListItem.Title>

                  </ListItem.Content>
                  <ListItem.Content right>
                    <Text numberOfLines={2} style={{ width: "500px", fontSize: "20px" }} >{l.address}</Text>
                  </ListItem.Content>
                </ListItem>
              </View>
            ))
          }

        </View>

      </ScrollView>


    </View>


  )

}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    height: "10%",
    width: "100%",
    backgroundColor: '#00CED1',
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingTop: "3%"
  }

});
