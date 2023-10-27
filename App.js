import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import GerenciaDespesa from "./screens/GerenciaDespesa";
import DespesaRecente from "./screens/DespesaRecente";
import TodasDespesas from "./screens/TodasDespesas";
import { GlobalStyles } from "./constants/styles";
import IconeBotao from "./components/UI/IconeBotao";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function DespesasOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconeBotao
            icone="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("GerenciaDespesa");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="DespesaRecente"
        component={DespesaRecente}
        options={{
          title: "Despesas recentes",
          tabBarLabel: "Recentes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{
          title: "Todas as despesas",
          tabBarLabel: "Despesas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="DespesasOverview"
            component={DespesasOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GerenciaDespesa"
            component={GerenciaDespesa}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
