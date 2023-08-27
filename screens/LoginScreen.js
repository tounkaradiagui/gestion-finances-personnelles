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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={require("../assets/images/login.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 270,
          marginTop: 50,
        }}
      />
      <View>
        <View style={{ alignItems: "flex-start", marginLeft: 25 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Bonjour !</Text>
        </View>
        <View style={{ alignItems: "flex-start", marginLeft: 25 }}>
          <Text style={{ fontSize: 15 }}>
            Veuillez vous connecter pour continuer
          </Text>
        </View>

        <View style={{ padding: 25, alignItems: "center" }}>
          <TextInput
            placeholder="Adresse email"
            style={{
              fontSize: 15,
              borderWidth: 2,
              borderColor: "#078ECB",
              width: "100%",
              padding: 10,
              color: "black",
              fontWeight: "400",
              borderRadius: 10,
            }}
          />

          <TextInput
            placeholder="Mot de Passe"
            secureTextEntry={!showPassword}
            style={{
              marginVertical: 10,
              fontSize: 15,
              borderWidth: 2,
              borderColor: "#078ECB",
              width: "100%",
              padding: 10,
              color: "black",
              fontWeight: "400",
              borderRadius: 10,
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#078ECB",
              borderRadius: 10,
              padding: 5,
              borderColor: "#078ECB",
              width: "100%",
              borderRadius: 10,
              alignItems: "center",
            }}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                borderColor: "#078ECB",
                padding: 10,
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              Connexion
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                alignSelf: "flex-end",
              }}
            >
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 25, alignItems: "center", paddingTop: 5 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#E9B94E",
              borderRadius: 10,
              padding: 5,
              borderColor: "#078ECB",
              width: "100%",
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                borderColor: "#078ECB",
                padding: 10,
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              Inscription
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
