import { Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isIphoneX = Platform.OS === "ios" && (height > 800 || width > 800) ;