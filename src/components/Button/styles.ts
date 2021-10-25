import React from 'react';


import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';



export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
      fontSize: 15,
      fontFamily:FONTS.BOLD,

  },
  icon:{
      marginRight: 15,
  }
});