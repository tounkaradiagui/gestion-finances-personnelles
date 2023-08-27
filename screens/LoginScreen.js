import { Dimensions, SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'


const LoginScreen = () => {
  return (
    <ScrollView
     showsVerticalScrollIndicator={false}
    >
      <Image
        source={require('../assets/images/login.png')}
        resizeMode="contain"
        style={{ 
          width: "100%", 
          height: 270,
          marginTop:50
        }}
      />
      <View>
        <View style={{alignItems:"flex-start", marginLeft:25 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold"}}>Bonjour !</Text>
        </View>
        <View style={{alignItems:"flex-start", marginLeft:25 }}>
          <Text style={{ fontSize: 15}}>Veuillez vous connecter pour continuer</Text>
        </View>

        <View style={{ padding: 25, alignItems:"center" }}>
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
            placeholder="Mot de Passe"
            secureTextEntry
            style={{
              marginVertical:25,
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
              Connexion
            </Text>
          </TouchableOpacity>

        </View>

        <View>
          <Text 
            style={{
              marginRight:30,
              alignSelf:"flex-end"
            }}
          >
            Mot de passe oublié ?
          </Text>
        </View>
        
      </View>
      
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
        
  },
})