import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

export default function Drawer(){

    const Drawer = createDrawerNavigator();

    return (
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name="Home" component={HomeStack} />
                    <Drawer.Screen name="About" component={AboutStack} />
            </Drawer.Navigator>
    )
}

