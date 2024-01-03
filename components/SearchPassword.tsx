import {Image, Text, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import * as React from 'react';
import LabelTextinput from './LabelTextinput.tsx';
import LoginButton from './LoginButton.tsx';
import NewPassword from './NewPassword.tsx';
import Toast from 'react-native-toast-message';

export default function SearchPassword(props: any) {
  const [exist, setExist] = React.useState(false);
  const [id, setId] = React.useState('false');
  const [password, setPassword] = React.useState(''); //변경된 비밀번호
  const [repeat, setRepeat] = React.useState(''); //비밀번호 반복해서 적는거
  const [editable, setEditable] = React.useState(true);
  const navigation = props.navigation;

  const checkValid = () => {
    //서버상에 있는 데이터와 입력된 데이터가 일치하는지 확인 필요
    //서버 통신은 미구현으로 남겨두고 아이디가 false면 불일치하고 true면 일치하는걸로 가정
    if (id === 'true') {
      setExist(true);
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
  const checkSame = () => {
    if (password === repeat) {
      if (!editable) {
        navigation.navigate('LoginInput');
      }
      setEditable(false);
      Toast.show({
        type: 'resetPassword',
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
    resetPassword: () => (
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
          source={require('../config/iconSuccess.png')}
          style={{width: width * 24, height: height * 24}}
        />
        <View style={{height: height * 42, width: width * 8}} />
        <Text style={{color: '#FFF', fontSize: 15, includeFontPadding: false}}>
          {
            '비밀번호가 재설정 되었습니다.\n재설정한 비밀번호로 로그인 해주세요.'
          }
        </Text>
      </View>
    ),
  };

  return (
    <View style={{backgroundColor: '#FFF'}}>
      {exist ? (
        <>
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
              {'비밀번호를'}
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
              {'재설정해주세요.'}
            </Text>
          </View>
          <View style={{height: height * 32}} />
          <NewPassword
            value1={password}
            value2={repeat}
            onChangeText1={input => setPassword(input)}
            onChangeText2={input => setRepeat(input)}
            editable={editable}
          />
          <View style={{height: height * 330}} />
          <LoginButton
            label={
              editable ? (
                <Text>비밀번호 재설정 하기</Text>
              ) : (
                <Text>로그인 화면으로</Text>
              )
            }
            onPress={() => checkSame()}
          />
        </>
      ) : (
        <>
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
              {'아이디와 회원가입 시 인증한'}
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
              {'휴대폰 번호와 성함을 입력해주세요.'}
            </Text>
          </View>
          <View style={{height: height * 32}} />
          <LabelTextinput
            label="아이디"
            placeholder="아이디를 입력해주세요."
            onChangeText={input => setId(input)}
          />
          <View style={{height: height * 12}} />
          <LabelTextinput label="이름" placeholder="이름을 입력해주세요." />
          <View style={{height: height * 12}} />
          <LabelTextinput
            label="휴대폰 번호"
            placeholder="-를 제외한 숫자 11자리"
            keyboardType="numeric"
          />
          <View style={{height: height * 148}} />
          <LoginButton
            label={<Text>비밀번호 찾기</Text>}
            onPress={() => checkValid()}
          />
        </>
      )}
      <Toast config={toastConfig} />
    </View>
  );
}
