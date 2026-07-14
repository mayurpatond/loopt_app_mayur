import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import FontAwesome6Brands from "@react-native-vector-icons/fontawesome6";
import { useNavigation } from "expo-router";
import { HeaderShownContext } from "expo-router/build/react-navigation";

export default function WelcomeScreen() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Welcome to{"\n"}Business Directory App
        </Text>
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.subtitle}>
          Discover thousands of local business{"\n"}all in one place
        </Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={require("../../assets/images/Google_logo.png")} style={{ width: 22, height: 22 }} />
          <Text style={styles.googleText}>Sign In With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY_COLOUR = "#BF360C";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOUR,
    alignItems: "center",
  },

  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    maxWidth: 430, // mobile width
  },

  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },

  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 46,
    
  },

  bottomCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
    width: "100%",
    maxWidth: 430, // mobile width
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    lineHeight: 28,
    marginBottom: 25,
  },

  googleButton: {
    height: 58,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 18,
  },

  googleText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  skipButton: {
    height: 58,
    borderRadius: 30,
    backgroundColor: PRIMARY_COLOUR,
    justifyContent: "center",
    alignItems: "center",
  },

  skipText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
