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
import HandlingTextInput from './HandlingTextInput';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';
import Scrolling from './Scrolling';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';
import FetchExample from './FetchExample';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FetchExample);
