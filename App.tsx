import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { useCallback } from "react";

type RootStackParamList = {
  //페이지들의 목록
  Home: undefined; //파라미터로 넣어 줄게 업으면 undifined
  Details: { itemId: number; otherParam?: string };
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate("Details");
  }, [navigation]);
  //flex: colum이 default 서로간의 비율
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flex: 2,
          backgroundColor: "yellow",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={onClick}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white" }}>HOME SCREEN</Text>
        </Pressable>
      </View>
      <View style={{ flex: 5, backgroundColor: "orange" }}>
        <Text>second</Text>
      </View>
    </View>
  );
}

function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  /* 2. Get the param */
  // const { itemId, otherParam } = route.params;
  const onClick = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "제목" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <Stack.Screen name="Details">
          {(props) => <DetailsScreen {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
