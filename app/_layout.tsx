import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { CreateTripContext } from "@/contexts/CreateTripContext";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [tripData, setTripData] = useState<any>([])

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'outfit-regular': require('@/assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium': require('@/assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </CreateTripContext.Provider>
  );
}
