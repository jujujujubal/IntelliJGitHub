import {Text, TextInput, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import * as React from 'react';

export default function NewPassword(props: any) {
  const value1 = props.value1;
  const value2 = props.value2;
  const onChangeText1 = props.onChangeText1;
  const onChangeText2 = props.onChangeText2;
  const editable = props.editable && true; // 기본값으로 활성화 사용
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
          {'새로운 비밀번호'}
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
          color: editable ? '#212529' : '#ADB5BD',
          backgroundColor: editable ? '#FFFFFF' : '#F8F9FA',
        }}
        onChangeText={onChangeText1}
        secureTextEntry={true}
        editable={editable}
        value={value1}
      />
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
          color: editable ? '#212529' : '#ADB5BD',
          backgroundColor: editable ? '#FFFFFF' : '#F8F9FA',
        }}
        onChangeText={onChangeText2}
        secureTextEntry={true}
        editable={editable}
        value={value2}
      />
    </View>
  );
}
