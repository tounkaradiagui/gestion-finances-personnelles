import React from "react";
import {
  Dimensions,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
     showsVerticalScrollIndicator={false}
    >
      <Image
        source={require('../assets/images/register.png')}
        resizeMode="contain"
        style={{ 
          width: "100%", 
          height: 270,
          marginTop:50
        }}
      />
      <View>
        <View style={{alignItems:"flex-start", marginLeft:25 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold"}}>Bienvenue !</Text>
        </View>
        <View style={{alignItems:"flex-start", marginLeft:25 }}>
          <Text style={{ fontSize: 15}}>Création de votre compte sur Mes Finances</Text>
        </View>

        <View style={{ padding: 25, alignItems:"center" }}>
          <TextInput
            placeholder="Nom"
            style={{
              fontSize:15,
              borderWidth:2,
              borderColor:"#078ECB",
              width:"100%",
              padding: 10,
              color:"black",
              fontWeight: "400",
              borderRadius: 10
            }}
          />
          <TextInput
            placeholder="Prénom"
            style={{
              marginVertical:10,
              fontSize:15,
              borderWidth:2,
              borderColor:"#078ECB",
              width:"100%",
              padding: 10,
              color:"black",
              fontWeight: "400",
              borderRadius: 10
            }}
          />

          <TextInput
            placeholder="Adresse email"
            style={{
              fontSize:15,
              borderWidth:2,
              borderColor:"#078ECB",
              width:"100%",
              padding: 10,
              color:"black",
              fontWeight: "400",
              borderRadius: 10
            }}
          />

          <TextInput
            placeholder="Mot de passe"
            secureTextEntry
            style={{
              marginVertical:10,
              fontSize:15,
              borderWidth:2,
              borderColor:"#078ECB",
              width:"100%",
              padding: 10,
              color:"black",
              fontWeight: "400",
              borderRadius: 10,
            }}
          />

          <TouchableOpacity
            style={{
              marginVertical:10,
              backgroundColor:'#078ECB',
              borderRadius: 10,
              padding: 5,
              borderColor:"#078ECB",
              width:"100%",
              borderRadius: 10,
              alignItems:"center"
            }}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                borderColor:"#078ECB",
                padding: 10,
                fontWeight: "bold",
                color:"white",
                fontSize:18
              }}
            >
              S'inscrire
            </Text>
          </TouchableOpacity>

            <Text>
              Avez-vous déjà un compte ?
            </Text>

          <TouchableOpacity
            style={{
              backgroundColor:'#E9B94E',
              borderRadius: 10,
              padding: 5,
              borderColor:"#078ECB",
              width:"100%",
              borderRadius: 10,
              alignItems:"center",
              marginVertical:10
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                borderColor:"#078ECB",
                padding: 10,
                fontWeight: "bold",
                color:"white",
                fontSize:18
              }}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})