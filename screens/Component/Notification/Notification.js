import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, FlatList, Image, Button } from "react-native";
import { NativeBaseProvider, Heading, Center, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';



export default class Notification extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View>hello</View>

      </NativeBaseProvider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: '100%',

  },
  container1: {
    flexDirection: "row",
    height: 100,


  },
})