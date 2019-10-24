import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShownScreen from './src/screens/ResultsShownScreen';

const navigator = createStackNavigator(
  {
  Search: SearchScreen,
  Results: ResultsShownScreen

},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);


