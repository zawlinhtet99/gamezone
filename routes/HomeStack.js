import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../ screen/Home';
import ReviewDetails from '../ screen/ReviewDetails';
import Header from "../share/Header";

export default function HomeStack({ navigation }){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Game Zone" component={Home}
                options={{ headerTitle: ()=>(
                    <Header navigation={navigation} title='Game Zone' />
                )
                }} 
                 />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    )
}