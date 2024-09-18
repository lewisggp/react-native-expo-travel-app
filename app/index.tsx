import { View } from "react-native";
import { Redirect, useNavigation } from "expo-router";

import Login from "@/components/Login";
import { auth } from "@/configs/Firebase";
import { useEffect } from "react";

export default function Index() {
  const user = auth.currentUser;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? (
        <Redirect href={'/(tabs)/my-trip'} />
      ) : (
        <Login />
      )}
    </View>
  );
}
