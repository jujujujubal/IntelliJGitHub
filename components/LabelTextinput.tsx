import {Text, TextInput, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import * as React from 'react';

export default function LabelTextinput(props: any) {
  const label = props.label;
  const placeholder = props.placeholder;
  const onChangeText = props.onChangeText || (() => {}); // 기본값으로 빈 함수 사용
  const secureTextEntry = props.secureTextEntry || false; // 기본값으로 마스킹 안되게 사용
  const editable = props.editable || true; // 기본값으로 활성화 사용
  const keyboardType = props.keyboardType || 'default';

  return (
    <View
      style={{
        height: height * 80,
        width: width * 361,
        paddingVertical: 0,
        paddingHorizontal: width * 20,
      }}>
      <View
        style={{
          height: height * 18,
          width: width * 320,
          paddingVertical: 0,
          paddingHorizontal: width * 4,
        }}>
        <Text
          style={{
            height: height * 18,
            width: width * 312,
            fontSize: 14,
            color: '#212529',
            includeFontPadding: false,
          }}>
          {label}
        </Text>
      </View>
      <View style={{height: height * 8}} />
      <TextInput
        style={{
          height: height * 54,
          width: width * 320,
          paddingVertical: height * 18,
          paddingHorizontal: width * 16,
          borderWidth: width * 1,
          borderRadius: 9,
          borderColor: '#E9ECEF',
          fontSize: 15,
          color: '#212529',
        }}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#ADB5BD"
      />
    </View>
  );
}
