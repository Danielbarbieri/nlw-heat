import React from 'react';
import {Button} from '../Button';


import {  View} from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SignInBox(){
  return (
    <View style={styles.container}>
        <Button 
        title="ENTRAR COM O GIT HUB"
        color={COLORS.BLACK_PRIMARY}   
        backgroundColor={COLORS.YELLOW}
        icon="github"
        
        />

    </View>
  );
}