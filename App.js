import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Colors} from "./constants/colors";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent={false}/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          },
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favourite Places',
              headerRight: ({tintColor}) =>
                <IconButton
                  icon="plus"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')} options={{
                  title: 'Add a New Place'
                }}/>
            })}/>
          <Stack.Screen name="AddPlace" component={AddPlace}/>
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
