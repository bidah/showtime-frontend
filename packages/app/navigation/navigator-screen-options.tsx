import { HeaderLeft, HeaderCenter, HeaderRight } from "app/components/header";

export const screenOptions = ({
  safeAreaTop,
  isDark,
}: {
  safeAreaTop: number;
  isDark: boolean;
}) => ({
  animationEnabled: true,
  headerShown: true,
  headerLeft: HeaderLeft,
  headerTitle: HeaderCenter,
  headerTitleAlign: "center" as "center",
  headerRight: HeaderRight,
  headerTintColor: "#000",
  headerTransparent: true,
  headerBlurEffect: isDark ? "dark" : "light",
  headerBackVisible: false,
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  // @ts-ignore
  headerStyle: {
    height: 64 + safeAreaTop,
    // Similar to `headerShadowVisible` but for web
    // @ts-ignore
    borderBottomWidth: 0,
  },
  cardStyle: { flex: 1, backgroundColor: "transparent" },
  cardOverlayEnabled: false,
});
