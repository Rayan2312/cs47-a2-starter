import { Platform } from "react-native";

const navBarHeight = Platform.OS === "ios"?  41 : 54;
const navBarTextSize = Platform.isPad? 24 : 14;
const titleTextSize = Platform.isPad? 36 : 24;
const footerTextSize = Platform.isPad? 18 : 12;
export {navBarHeight, navBarTextSize, titleTextSize, footerTextSize};