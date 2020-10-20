import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import home from "./Screens/Home";
import resultsshow from "./Screens/ResultShow";
const navigator = createStackNavigator(
  {
    Home: home,
    Results: resultsshow,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Bomato",
      headerTitleAlign: "center",
      headerTintColor: "red",
    },
  }
);

export default createAppContainer(navigator);
