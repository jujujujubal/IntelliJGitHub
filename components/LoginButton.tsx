import {Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import * as React from 'react';

export default function LoginButton(props: any) {
  const label = props.label;
  return (
    <View
      style={{
        height: height * 86,
        width: width * 361,
        paddingTop: height * 10,
        paddingBottom: height * 24,
        paddingHorizontal: width * 20,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            height: height * 52,
            width: width * 320,
            paddingVertical: height * 16,
            paddingHorizontal: width * 12,
            borderRadius: 10,
            backgroundColor: '#4D4741',
          }}>
          <Text
            style={{
              height: height * 20,
              fontSize: 16,
              color: '#FFF',
              textAlign: 'center',
              includeFontPadding: false,
            }}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
