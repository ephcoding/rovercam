import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles";

const Text_Body = ({ children, styleChanges = null }) => {
  return <Text style={[S.base, styleChanges]}>{children}</Text>;
};

export default Text_Body;

const S = StyleSheet.create({
  base: {
    color: COLORS.textLT,
    fontFamily: FONTS.primary,
    fontSize: SIZES[4],
  },
});
