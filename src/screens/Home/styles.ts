
import { StyleSheet } from 'react-native';

import { COLORS } from '../../theme';

import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        paddingTop:getStatusBarHeight() + 15,

        flex:1,
        backgroundColor: COLORS.BLACK_SECONDARY,
        color:COLORS.WHITE,
    }
});