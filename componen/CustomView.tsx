import { Button, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextStyle, View } from "react-native";
import { ReactNode } from "react";


interface SectionProps{
  title:string;
  titleStyle? : TextStyle;
  events? : EventProps;
}

interface EventProps{
  title?:string;
  time?: string;
  transport?: string
  image?: ImageSourcePropType
  address?: string
  oClock?: string
}
export function CustomView(props: EventProps){

  const {title,oClock,address, time, transport, image} = props;

  return(
   <View>
      <Text style={style.title}>{title}</Text>
     <View  style={[style.card2, style.shadowProp]}>
        <View>
          <Text style={style.time2}>Dia diem</Text>
          <Text style={style.time}>{address}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={style.time2}>Thoi gian</Text>
          <Text style={style.time}>{time}</Text>
        </View>
       <View style={{marginTop:10}}>
         <Text style={style.time2}>Phuong tien di chuyen</Text>
         <Text style={style.time}>{transport}</Text>
       </View>
       <Text style={{fontWeight:'bold', marginTop:10}}>Hinh anh</Text>
       <Image
         style={{width:'100%', height:150, borderRadius:10}}
       source={image}/>

     </View>
   </View>
  )
}




const style = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
    color:'grey'
  },
  container:{
    padding:10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5

  },
  card2: {
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 10,
    height: 'auto',

  }, time:{
    fontSize:18,
    fontWeight:'bold',
    color:'purple'
  },
  time2:{
    fontWeight:'bold'
  }


});
