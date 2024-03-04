import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

interface TextInput{
  title: string;

}
export function CustomEditText(props: TextInput){
  const {title} = props;
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  return(
    <View style={{padding:10}}>
      <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10}}>{title}</Text>
      <TextInput value={text}
                 onChangeText={(text)=>{
                  setText(text);
                 setIsError(false)}}  // reset loi khi bat dau nhap du lieu
                 placeholder={'Place holder'}
                 selectionColor={'#B4D2D9'}
                 style={[style.textInput, isError && style.errorInput]}/>
      {isError && <Text style={style.errorText}> Error</Text>}
    </View>
  )
}
const style = StyleSheet.create({
  textInput:{
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    height:50
  },
  errorInput: {
    borderColor: 'red',
    borderWidth:3
  },
  errorText:{
    color: 'red',
    marginTop: 5,
  }

});
