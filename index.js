/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './HelloWorld';
import Props from './Props';
import Props2 from './Props2';
import State from './State';
import Style from './Style';
import FixedDimensions from './FixedDimensions';
import FlexDimensions from './FlexDimensions';
import FlexDirections from './FlexDirections';
import JustifyContent from './JustifyContent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => JustifyContent);
