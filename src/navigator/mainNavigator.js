import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings198720Navigator from '../features/Settings198720/navigator';
import UserProfile198713Navigator from '../features/UserProfile198713/navigator';
import Settings198712Navigator from '../features/Settings198712/navigator';
import Settings198710Navigator from '../features/Settings198710/navigator';
import SignIn2198708Navigator from '../features/SignIn2198708/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings198720: { screen: Settings198720Navigator },
UserProfile198713: { screen: UserProfile198713Navigator },
Settings198712: { screen: Settings198712Navigator },
Settings198710: { screen: Settings198710Navigator },
SignIn2198708: { screen: SignIn2198708Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
