
import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
export interface  RNViewProps extends ViewProps{
  bg? : string;
  row? : boolean;
  height? : number;
  width? : number;
}
export function MyView(props: RNViewProps){

  const {bg, row, height, width} = props;
  // dinh nghia cap gtri cho style
  const viewStyle:{}=[
    // neu bg duoc truyen vao thi gia tri background se la bg
    bg&&{backgroundColor: bg},
    height&&{height},
    width&&{width},
    row&&{flexDirection: 'row'}
  ]
  return(
    <View style={[styles.container,viewStyle]}>

    </View>
  )


}
const styles = StyleSheet.create({
  container:{
    borderRadius:3,
    width:'auto',
    height:'auto'
  }
});
