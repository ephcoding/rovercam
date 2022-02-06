import { Image, Text, View } from "react-native";

const Img_Background = ({
  bgColor = "#000",
  children,
  imgSrc,
  opacity = 0.5,
}) => {
  return (
    <View style={{ backgroundColor: bgColor, flex: 1 }}>
      <Image
        source={imgSrc}
        style={{
          height: "100%",
          opacity: opacity,
          position: "absolute",
          width: "100%",
          zIndex: 0,
        }}
      />
      {children}
    </View>
  );
};

export default Img_Background;
