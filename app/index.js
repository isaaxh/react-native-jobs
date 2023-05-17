import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightwhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightwhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   {/* Use the `Screen` component to configure the layout. */}
    //   <Stack.Screen options={{ title: "Overview" }} />
    //   {/* Use the `Link` component to enable optimized client-side routing. */}
    //   <Link href='/details'>Go to Details</Link>
    // </View>
  );
}
