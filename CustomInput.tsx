import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { ReactNode } from "react";

interface CustomInputProps {
  title: string;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  leftComponent?: ReactNode;
  centerComponent?: ReactNode;
  rightComponent?: ReactNode;
  leftIconSize?: number;
  rightIconSize?: number;
  numberOfLines?: number;


}

export function CustomInput(props: CustomInputProps) {
  // lay ra cac props da khai bao
  const {
    title,
    numberOfLines,
    rightIconSize,
    onPressRight,
    iconLeft,
    onPressLeft,
    iconRight,
    leftComponent,
    centerComponent,
    rightComponent,
    leftIconSize
  } = props;


  const renderItem = () => {
    return (
      <View style={style.container}>
        <View>
          <TouchableOpacity hitSlop={15} onPress={onPressLeft}>
            <Image
              style={{ width: 40, height: 40 }}
              source={iconLeft}
            />
          </TouchableOpacity>
        </View>

        <View style={style.containerCenter}>
          <Text style={style.title} numberOfLines={numberOfLines}>{title}</Text>
        </View>


        <View style={style.containerRight}>
          <Pressable hitSlop={15} onPress={onPressRight}>
            <Image
              style={{ width: 40, height: 40 }}
              source={iconRight}
            />
          </Pressable>
        </View>

      </View>
    );
  };


  return (
    <View>
      {renderItem()}
    </View>
  );
}


const style = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    flex: 1
  },
  containerCenter: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },
  containerRight: {
    width: "auto",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
