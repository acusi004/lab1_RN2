import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
interface EventProps{
  title?:string;
  time?: string;
  transport?: string
  image?: ImageSourcePropType
  address?: string
  oClock?: string
}
export function ViewCustom(props: EventProps){
  const {title,oClock,address, time, transport, image} = props;

  return(
    <View >
      <Text style={style.title}>{title}</Text>
      <View style={[style.card2, style.shadowProp]}>
        <View>
          <Text style={style.time2}>Ten khach san</Text>
          <Text style={style.time}>{address}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={style.time2}>Gio mo cua</Text>
          <Text style={style.time}>{time}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={style.time2}>Dia diem</Text>
          <Text style={style.time}>{transport}</Text>
        </View>
        <View style={{marginTop:10}}>
          <Button title={'CHI TIET'}/>
        </View>


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
