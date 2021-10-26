import React, { useState } from 'react';
import { COLORS } from '../../theme';

import { TextInput  ,View} from 'react-native';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){

  const [message, setMessage] = useState('');
  const [ sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
    <TextInput
    keyboardAppearance="dark"
    placeholder="Qual expectativa sobre o curso"
    placeholderTextColor={COLORS.GRAY_PRIMARY}
    multiline
    maxLength={140}
    onChangeText={setMessage}
    value={message}
    style={styles.input}
    editable={!sendingMessage}

    />

    <Button
    title="ENVIAR MENSAGEM"
    backgroundColor={COLORS.PINK}
    color={COLORS.WHITE}
    />

    </View>
  );
}