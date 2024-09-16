import { View } from "react-native";
import { Redirect } from "expo-router";

import Login from "@/components/Login";
import { auth } from "@/configs/Firebase";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? (
        <Redirect href={'/(tabs)mytrip'} />
      ) : (
        <Login />
      )}
    </View>
  );
}
