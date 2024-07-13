import { moderateScale, scale, verticalScale } from "react-native-size-matters"

//genislik
export const rS = (size) => {
    return scale(size)
}

//yukseklik
export const rV = (size) => {
    return verticalScale(size)
}

//margin ve padding
export const rM = (size) => {
    return moderateScale(size)
}