import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from '../ screen/About';
import Header from "../share/Header";

export default function AboutStack({ navigation }){
    
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="About GameZone" component={About} options={{
                headerTitle: ()=>(
                    <Header navigation={navigation} title="About Game Zone" />
                )
            }} />
        </Stack.Navigator>
    )
}