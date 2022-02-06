import { StyleSheet, View } from "react-native";
import Btn_Navigation from "./mdx-core/Btn_Navigation";

const ListNavigationBtns = ({
  btnLabels,
  btnStyles,
  labelStyles,
  listStyles,
  navFunc,
}) => {
  if (!btnLabels) return;

  return (
    <View style={[S.list, listStyles]}>
      {btnLabels.map((label) => (
        <Btn_Navigation
          btnStyles={btnStyles}
          key={label}
          label={label}
          labelStyles={labelStyles}
          navFunc={navFunc}
        />
      ))}
    </View>
  );
};

export default ListNavigationBtns;

const S = StyleSheet.create({
  list: {},
});
