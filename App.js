import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Drawer from "./routes/Drawer";

export default function App(){
  const [fontsloaded] = useFonts({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  });

  const onLayoutRootView  = useCallback(async()=>{
    if(fontsloaded){
      await SplashScreen.hideAsync();
    }
  },[fontsloaded])

  if (!fontsloaded){return null;}

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>

  )

}

// import { NavigationContainer } from "@react-navigation/native";
// import Drawer from 