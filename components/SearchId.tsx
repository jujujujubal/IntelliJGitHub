import {Image, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {height, width} from '../config/globalStyles';
import * as React from 'react';
import LabelTextinput from './LabelTextinput.tsx';
import LoginButton from './LoginButton.tsx';
import Toast from 'react-native-toast-message';

export default function SearchId(props: any) {
  const [exist, setExist] = React.useState(false);
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const navigation = props.navigation;
  const checkValid = () => {
    //서버상에 있는 데이터와 입력된 데이터가 일치하는지 확인 필요
    //서버 통신은 미구현으로 남겨두고 아이디가 false면 불일치하고 true면 일치하는걸로 가정
    if (name === 'true') {
      setExist(true);
      setId('folletto');
    } else {
      setExist(false);
      Toast.show({
        type: 'existError',
        position: 'bottom',
        bottomOffset: height * 60,
        visibilityTime: 1000,
      });
    }
  };
  const toastConfig = {
    existError: () => (
      <View
        style={{
          height: height * 66,
          width: width * 312,
          backgroundColor: '#1C1E20',
          paddingVertical: height * 12,
          paddingHorizontal: width * 16,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="cover"
          source={require('../config/iconError.png')}
          style={{width: width * 24, height: height * 24}}
        />
        <View style={{height: height * 42, width: width * 8}} />
        <Text style={{color: '#FFF', fontSize: 15, includeFontPadding: false}}>
          {
            '정보와 일치하는 회원이 없습니다.\n입력하신 정보를 한 번 더 확인해주세요.'
          }
        </Text>
      </View>
    ),
  };

  return (
    <View style={{backgroundColor: '#FFF'}}>
      <View
        style={{
          height: height * 100, //원래 108인데 위치가 안 맞아서 줄였습니다
          width: width * 361,
          paddingTop: height * 32,
          paddingBottom: height * 16,
          paddingHorizontal: width * 20,
        }}>
        <Text
          style={{
            height: height * 28,
            width: width * 320,
            fontSize: 22,
            color: '#212529',
            includeFontPadding: false,
          }}>
          {exist ? '회원님의' : '회원가입 시 인증한'}
        </Text>
        <View style={{height: height * 4, width: width * 320}} />
        <Text
          style={{
            height: height * 28,
            width: width * 320,
            fontSize: 22,
            color: '#212529',
            includeFontPadding: false,
          }}>
          {exist ? '아이디 정보입니다!' : '휴대폰 번호와 성함을 입력해주세요.'}
        </Text>
      </View>
      <View style={{height: height * 32}} />
      {exist ? (
        <>
          <View
            style={{
              height: height * 96,
              width: width * 320,
              backgroundColor: '#F2F3F5',
              paddingTop: height * 20,
              paddingBottom: height * 16,
              paddingHorizontal: width * 8,
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#454C53',
                width: width * 71,
                fontSize: 16,
                textAlign: 'center',
                alignSelf: 'center',
                includeFontPadding: false,
              }}>
              {id}
            </Text>
            <View style={{height: height * 10}} />
            <TouchableOpacity onPress={() => Clipboard.setString(id)}>
              <View
                style={{
                  height: height * 30,
                  width: width * 79,
                  paddingVertical: height * 6,
                  paddingHorizontal: width * 8,
                  borderRadius: 8,
                  backgroundColor: '#FFF',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#495057',
                    fontSize: 14,
                    textAlign: 'center',
                    alignSelf: 'center',
                    includeFontPadding: false,
                  }}>
                  아이디 복사
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: height * 316}} />
        </>
      ) : (
        <>
          <LabelTextinput
            label="이름"
            placeholder="이름을 입력해주세요."
            onChangeText={input => setName(input)}
          />
          <View style={{height: height * 12}} />
          <LabelTextinput
            label="휴대폰 번호"
            placeholder="-를 제외한 숫자 11자리"
            keyboardType="numeric"
          />
          <View style={{height: height * 240}} />
        </>
      )}
      <LoginButton
        label={exist ? <Text>로그인 화면으로</Text> : <Text>아이디 찾기</Text>}
        onPress={
          exist ? () => navigation.navigate('LoginInput') : () => checkValid()
        }
      />
      <Toast config={toastConfig} />
    </View>
  );
}
