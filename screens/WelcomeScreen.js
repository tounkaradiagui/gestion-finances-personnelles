import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  Button,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import IMAGES from "../assets/index";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {

  const navigation = useNavigation();

  const _carousel = useRef();
  const [activeDotIndex, setactiveDotIndex] = useState(0);

  const data = [
    {
      id: 2,
      title: "Le solde de votre compte",
      description:
        "Gardez une vue d'ensemble de vos finances en un coup d'oeil. Suivez et gérer facilement le solde de votre compte personnel et restez informé de vos disponibilités financières en temps réel.",
      image: IMAGES.BALANCE,
    },
    {
      id: 3,
      title: "Mes recettes",
      description:
        "Suivez vos sources de revenus et maximisez vos gains grâce à notre application. Identifiez et catégorisez vos différentes sources de revenus et obtenez une vision claire de vos rentrées d'argent.",
      image: IMAGES.CHECKING,
    },
    {
      id: 2,
      title: "Mes dépenses",
      description:
        "Contrôlez vos dépenses et améliorer votre gestion financière. Enregistrez et classez facilement vos dépenses dans différentes catégories et visualisez vos habitudes de dépenses pour mieux comprendre où va votre argent.",
      image: IMAGES.LOADING,
    },
    {
      id: 1,
      title: "Mon budget",
      description:
        "Créez et  suivez votre budget personnel pour atteindre vos objectifs financiers. Notre application vous permet de définir des limites budgétaires, de suivre vos dépenses par rapport à celles-ci et de recevoir des alertes pour vous aider à rester sur la bonne voie",
      image: IMAGES.BANKING,
    },
  ];

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          style={{
            height: Dimensions.get("window").width,
            width: Dimensions.get("window").width,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#078ECB" color="#fff"/>
      <View style={{alignItems: "flex-end", marginTop:40, marginEnd:10}}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('Login')}}
        >
          <Text
            style={{
              fontSize:15,
              fontWeight:'bold',
              color:"#078ECB"
            }}
          >Sauter</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        ref={_carousel}
        onSnapToItem={index => setactiveDotIndex(index)}
        autoplay
        autoplayInterval={3000}
        loop
      />
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Pagination 
          activeDotIndex={activeDotIndex}
          dotsLength={4}
          carouselRef={_carousel}
          dotStyle={{
            backgroundColor:"#078ECB",
            width:15
          }}
          inactiveDotStyle={{
            width:10,
            height:10,
            backgroundColor:"#E9B94E",
          }}
        />

        <View style={{padding:15, flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>{
              _carousel.current.snapToItem(activeDotIndex - 1)
            }}
          >
            
            <View 
              style={{
                height:40,
                width:40,
                borderRadius:25,
                backgroundColor:"#E9B94E",
                marginEnd:10
              }}
              
            >
              <FontAwesome
                style={{
                  justifyContent:"center",
                  alignItems:'center',
                  alignSelf:"center",
                  padding:10
                }}
               name="arrow-left"
               size={18}
               color="white"/>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>{
              _carousel.current.snapToItem(activeDotIndex + 1)
            }}>
            <View 
              style={{
                height:40,
                width:40,
                borderRadius:25,
                backgroundColor:"#078ECB",
              }}
            >
              <FontAwesome
                style={{
                  alignSelf:"center",
                  padding:10
                }}
                name="arrow-right"
                size={18}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent:"space-between",
  }
})