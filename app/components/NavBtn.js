import { Pressable, StyleSheet, Text, View } from "react-native";

const NavBtn = ({ btnStyles, label, labelStyles, navFunc, screen }) => {
  return (
    <Pressable
      key={label}
      onPress={() => navFunc(label)}
      style={[S.touchOpac, btnStyles]}
    >
      <Text style={[S.text, labelStyles]}>{label}</Text>
    </Pressable>
  );
};

export default NavBtn;

const S = StyleSheet.create({
  touchOpac: {
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
  },
  text: {
    color: "#fff",
    alignSelf: "center",
  },
});
