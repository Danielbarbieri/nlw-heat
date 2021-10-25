import React from 'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  Text, 
  ColorValue,
  ActivityIndicator,


} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import { styles } from './styles';
import { isLoaded, isLoading } from 'expo-font';

type Props ={
  title: string;
  color:ColorValue;
  backgroundColor:ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: false;
}

export function Button( {
  title, 
  color, 
  backgroundColor, 
  icon,  
  isLoading = false,
  ...rest
}:Props){
  return (
    <TouchableOpacity
    style={[styles.button,{ backgroundColor }]}
    activeOpacity={0.7}
    disabled={isLoading}
    {...rest}
    >

     {
     isLoading ? <ActivityIndicator color={color}/>:
      <>
        <AntDesign name={icon} size={25} style={styles.icon}/>
        <Text style={[styles.title, {color}]}>
          {title}
        </Text>
      </>
      }


    </TouchableOpacity>
  );
}