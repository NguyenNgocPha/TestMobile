
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
    name: 'Amy Farha',
    avatar_url: 'https://hthaostudio.com/wp-content/uploads/2019/08/Anh-Doanh-nhan-56.jpg',
    subtitle: 'Vice President',
    timeStamp: "Tue, 30 Sept at  11:11 PM",
    description: "difficulty breathing"
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://songkhoe.medplus.vn/wp-content/uploads/2019/12/B%C3%A1c-s%C4%A9-%C4%90%E1%BA%B7ng-Ho%C3%A0ng-Anh-chuy%C3%AAn-khoa-Da-li%E1%BB%85u-%E1%BA%A3nh-minh-h%E1%BB%8Da.jpg',
    subtitle: 'Vice Chairman',
    timeStamp: "Tue, 30 Sept at  11:11 PM",
    description: "difficulty breathing",
  },
  {
    name: 'Amanda Martin',
    avatar_url:
      'https://nhathauxaydung24h.com/wp-content/uploads/2021/11/anh-anime-nam-cute-lanh-lung.jpg',
    subtitle: 'CEO',
    timeStamp: "Tue, 30 Sept at  11:11 PM",
    description: "difficulty breathing",
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
    subtitle: 'Lead Developer',
    timeStamp: "Tue, 30 Sept at  11:11 PM",
    description: "difficulty breathing",
  },
  {
    name: 'Melissa Jones',
    avatar_url:
      'https://topshare.vn/wp-content/uploads/2021/10/hinh-anh-anime-ngau-va-cute-19.jpg',
    subtitle: 'CTO',
    timeStamp: "Tue, 30 Sept at  11:11 PM",
    description: "difficulty breathing",
  },
];

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Appointments</Text>
      </View>
      <ButtonGroup
        buttons={['Accept', 'Pending', 'Cancel']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <ScrollView>
        <View>
          {
            list.map((l, i) => (
              <View  key={i}style={{ marginBottom: "10px" }}>
                <ListItem    >
                  <FontAwesome name="calendar" size={20} color="black" />
                  <ListItem.Content>
                    <ListItem.Title>{l.timeStamp}</ListItem.Title>
                  </ListItem.Content></ListItem>
                <ListItem key={i} topDivider>
                  <Avatar rounded size={60} source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title >{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content right>
                    <ListItem.Title right>
                      <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Icon size={15}
                          reverse
                          name='phone' />

                        <Button
                          title="Cancel"
                          buttonStyle={{
                            backgroundColor: '#00CED1',
                            borderRadius: 5,
                          }}
                          titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                          containerStyle={{
                            height: 50
                          }}
                          onPress={() => console.log('aye')}
                        />
                      </View>
                    </ListItem.Title>
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
    justifyContent:"center",
  },
  textHeader: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingTop: "3%"
  }

});
