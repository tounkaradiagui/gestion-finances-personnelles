import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch
  } from "react-native";
  import React, {useState} from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from "expo-status-bar";
  import { Ionicons } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  
  const ProfileScreen = () => {
    // const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    // const toggleSwitch = () => {
    //   setDarkModeEnabled(!darkModeEnabled);
    // };
  
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.profile}>
            <StatusBar backgroundColor="#078ECB" />
            <TouchableOpacity>
              <View style={styles.ProfilePicture}>
                <Image
                  source={require("../assets/images/profile-picture.jpg")}
                  style={styles.ProfilePicture}
                />
              </View>
              <View style={styles.FeatherIcon}>
                <Feather name="edit" size={15} color="white" />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Diagui Tounkara
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                tounkaradiagui@gmail.com
              </Text>
            </View>
          </View>
  
          <View style={{paddingHorizontal:20, borderBottomWidth:1, borderBottomColor:"#078ECB", marginHorizontal:20}}>
            <Text style={{fontSize:18, marginLeft:-20}}>Préférences</Text>
          </View>
  
          <View style={styles.dark}>
            <Ionicons
                name="moon"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#078ECB",
                  borderRadius: 20,
                  marginLeft:10
                }}
              />
              <Text style={{
                  fontSize:18,
                  marginLeft:-100
                }}>Mode Nuit 
                {/* {darkModeEnabled ? "sombre" : "clair"} */}
              </Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              {/* <Switch
                value={darkModeEnabled}
                onValueChange={toggleSwitch}
              /> */}
          </View>
  
          <TouchableOpacity
            style={styles.touchable}
          >
            <MaterialIcons
              name="person"
              size={24}
              color="white"
              style={{
                backgroundColor: "#078ECB",
                justifyContent: "center",
                borderRadius: 30,
                marginLeft:10
              }}
            />
            <View 
            >
              <Text style={{
                fontSize:18,
                marginLeft:-45
              }}>Modifier Mon Profil</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>
  
          <TouchableOpacity
          style={styles.touchable}
          >
            <MaterialIcons
              name="settings"
              size={24}
              color="white"
              style={{
                backgroundColor: "#078ECB",
                borderRadius: 20,
                marginLeft:10
              }}
            />
            <View 
            >
              <Text style={{
                fontSize:18,
                marginLeft:-100
              }}>Paramètre</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>
  
          <View style={{paddingHorizontal:20, borderBottomWidth:1, borderBottomColor:"#078ECB", marginHorizontal:20, marginTop:20}}>
            <Text style={{fontSize:18, marginLeft:-20}}>Aide</Text>
          </View>
          {/* -Préférences
          Mon Profil
          Mode Nuit
          Paramètre
          -Aide
          Signaler un problème
          Nous Contactez
          Déconnexion */}
      </SafeAreaView>
    );
  };
  
  export default ProfileScreen;
  
  const styles = StyleSheet.create({
    
    profile: {
      padding: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    ProfilePicture: {
      width: 100,
      height: 100,
      borderRadius: 230,
    },
    FeatherIcon: {
      width: 28,
      height: 28,
      backgroundColor: "#078ECB",
      position: "absolute",
      borderRadius: 30,
      alignItems: "center",
      right: -5,
      bottom: 2,
      paddingTop: 4,
    },
    section: {
      paddingHorizontal: 24,
    },
    sectionHeader: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: 500,
      color: "#fefefe",
      textTransform: "uppercase",
      letterSpacing: 1.1,
    },
    touchable:{
      flexDirection: "row",
      backgroundColor: "#ffffff",
      marginHorizontal: 20,
      paddingVertical: 10,
      justifyContent: "space-between",
      borderBottomColor: "#078ECB",
      borderBottomWidth: 1,
      marginTop:10,
      borderRadius:5
    },
    dark:{
      flexDirection: "row",
      backgroundColor: "#ffffff",
      marginHorizontal: 20,
      paddingVertical: 10,
      justifyContent: "space-between",
      borderBottomColor: "#078ECB",
      borderBottomWidth: 1,
      marginTop:10,
      borderRadius:5
    }
  });
  