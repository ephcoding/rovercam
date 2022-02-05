import { StyleSheet, View } from "react-native";
import NavBtn from "./NavBtn";

const NavBtnList = ({
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
        <NavBtn
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

export default NavBtnList;

const S = StyleSheet.create({
  list: {},
});
