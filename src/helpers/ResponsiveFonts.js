
"use strict";

import {Dimensions, Platform} from "react-native";
export const {width, height} = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const heightScale = (size, factor = 0.5) => {
  if (Platform.OS === "web") {
    factor = 0.12;
  }
  return size + (verticalScale(size) - size) * factor;
};

export const widthScale = (size, factor = 0.5) => {
  if (Platform.OS === "web") {
    factor = 0.12;
  }
  return size + (horizontalScale(size) - size) * factor;
};
export const fontScale = size => {
  if(Platform.OS === "web"){
    return heightScale(+size+5)
  }else return heightScale(size)
}
// export default {scale, verticalScale, heightScale};
