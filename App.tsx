

import React from 'react';

import { MyView } from "./MyView.tsx";
import { ImageSourcePropType, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { CustomInput } from "./CustomInput.tsx";
import { Header } from "react-native/Libraries/NewAppScreen";
import { CustomView } from "./componen/CustomView.tsx";
import { CustomEditText } from "./componen/CustomEditText.tsx";
import { ViewCustom } from "./componen/ViewCustom.tsx";





function App(): React.JSX.Element {

  const leftIcon: ImageSourcePropType = require('./img/black.jpg');
  const rightIcon: ImageSourcePropType = require('./img/OIP.jpg');
  const imageK: ImageSourcePropType = require('./img/hinh-anh-bien-dep-29.jpg');

  return (
   <ScrollView>
     <View>
       <CustomInput title={'Header'}  iconLeft={leftIcon} iconRight={rightIcon}/>
       <CustomInput title={'Header'}  iconLeft={leftIcon} />
       <CustomInput title={''}  iconLeft={leftIcon} />
     </View>
     <View>
      <CustomEditText title={'Title'}/>
     </View>

      <View style={{padding:15}}>
        <CustomView title={'Lich trinh'} time={'9:00 AM - 12:00, 12/12/2024'} transport={'Xe bus'} oClock={'21:00 - 22:00'} address={'Ho tram, vung tau'} image={imageK}/>
        <ViewCustom title={'Khach san'} address={'Hong quynh'} time={'6:00 AM - 12:00 AM'} transport={'234 Quang trung, Ho chi minh'}/>
      </View>
   </ScrollView>

  )
}



export default App;
