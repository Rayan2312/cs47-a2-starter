import { Platform } from "react-native";
import { DeviceType, getDeviceTypeAsync } from "expo-device";

const deviceType = getDeviceTypeAsync();

let navBarHeight = Platform.OS === "ios"?  41 : 54;
navBarHeight = deviceType.then((type)=> type, ()=> DeviceType.UNKNOWN) === DeviceType.TABLET || Platform.isPad? 2*navBarHeight : navBarHeight;

const navBarTextSize = deviceType.then((type)=> type, ()=> DeviceType.UNKNOWN) === DeviceType.TABLET || Platform.isPad? 24 : 14;
const titleTextSize = deviceType.then((type)=> type, ()=> DeviceType.UNKNOWN) === DeviceType.TABLET ||  Platform.isPad? 44 : 24;
const footerTextSize = deviceType.then((type)=> type, ()=> DeviceType.UNKNOWN) === DeviceType.TABLET || Platform.isPad? 18 : 12;
export {navBarHeight, navBarTextSize, titleTextSize, footerTextSize};