import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CompontentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: CompontentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
