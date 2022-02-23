import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { SafeAreaView } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import { recipes } from "../../data/dataArrays";

// const recipes = [
//     {
//       name: "Nasi Lemak",
//       duration: 30,
//       ingrediantsNum: 10
//     },
//     {
//       name: "Kuey Teow",
//       duration: 15,
//       ingrediantsNum: 4
//     },
//     {
//       name: "Fish & Chips",
//       duration: 20,
//       ingrediantsNum: 9
//     },
//     {
//       name: "Beef Steak",
//       duration: 40,
//       ingrediantsNum: 5
//     },
//   ]

export default function HomeScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <MenuImage
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        headerRight: () => <View />,
      });
    }, []);

    const renderRecipes = ({ item }) => (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>Name: {item.title}</Text>
          <Text style={styles.category}>Category: {getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    );
    
    return (
        // <View style={styles.container}>
        // <Text>Hello World</Text>
        //   {
        //     recipes.map((recipes,index) => (
        //       <Text key={recipes.name}>{recipes.name}!</Text>
        //     ))
        //   }
        //   <StatusBar style="auto" />
        // </View>
        <View>
          <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
        </View>
      );


}