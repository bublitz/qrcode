import react from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screen/Preload';
import CreateQr from '../screen/CreateQr';
import ReadQr from '../screen/ReadQr';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="ReadQr" component={ReadQr} />
    <Stack.Screen name="CreateQr" component={CreateQr} />
  </Stack.Navigator>
);
