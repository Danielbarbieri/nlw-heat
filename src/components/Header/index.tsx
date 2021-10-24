import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



import { UserPhoto } from '../UserPhoto'

import LogoSvg from '../../assets/logo.svg'


import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
        <LogoSvg/>

        <UserPhoto
          imageUri='https://github.com/danielbarbieri.png'
          
        />

        <TouchableOpacity>
          <Text style={styles.logOutText}>
            Sair
          </Text>
        </TouchableOpacity>
    </View>
  );
}