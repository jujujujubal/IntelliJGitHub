import * as React from 'react';
import {useEffect} from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import CustomButton from '../CustomButton';
import Search from './Search.tsx';
import Dummy from './Dummy.tsx';
import Toast from 'react-native-toast-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LoginInput = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  useEffect(() => {
    if (isInvalid) {
      Toast.show({
        type: 'tomatoToast',
        position: 'bottom',
        bottomOffset: height * 60,
        visibilityTime: 2000,
      });
    }
  }, [isInvalid]);
  const checkValid = () => {
    // Alert.alert('계정 정보를 확인 중입니다.');
    //틀린 경우
    setIsInvalid(true);
    //처음 틀렸을 때는 useEffect로 toast를 보여주고(안 쓰고 싶은데 처음에는 안 쓰면 알림이 안떠서) 그 뒤에는 아래의 if로 확인하여 보여준다.
    if (isInvalid) {
      Toast.show({
        type: 'tomatoToast',
        position: 'bottom',
        bottomOffset: height * 60,
        visibilityTime: 1000,
      });
    }
  };

  const toastConfig = {
    tomatoToast: () => (
      <View
        style={{
          height: height * 48,
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
        <View style={{height: height * 18, width: width * 8}} />
        <Text
          style={{
            color: '#FFF',
            fontSize: 15,
            includeFontPadding: false,
          }}>
          {'계정정보가 올바르지 않습니다.'}
        </Text>
      </View>
    ),
  };

  function Home({navigation}) {
    const Tab = createBottomTabNavigator();
    return (
      <SafeAreaView>
        <View
          style={{
            height: height * 736,
            width: width * 361,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View style={{height: height * 88, width: width * 361}} />
          <Image
            resizeMode="cover"
            source={require('../config/logo1.png')}
            style={{width: width * 166, height: height * 32}}
          />
          <View style={{height: height * 72, width: width * 361}} />
          {/* 아이디입력 */}
          <TextInput
            style={{
              height: height * 54,
              width: width * 320,
              paddingVertical: height * 18,
              paddingHorizontal: width * 16,
              borderWidth: isInvalid ? width * 2 : width * 1,
              borderRadius: 9,
              borderColor: isInvalid ? '#FF8787' : '#E9ECEF',
              fontSize: 15,
              includeFontPadding: false,
              color: '#212529',
            }}
            placeholder="아이디를 입력해주세요"
            placeholderTextColor="#ADB5BD"
          />
          <View style={{height: height * 16, width: width * 361}} />
          {/* 비밀번호입력 */}
          <TextInput
            style={{
              height: height * 54,
              width: width * 320,
              paddingVertical: height * 18,
              paddingHorizontal: width * 16,
              borderWidth: isInvalid ? width * 2 : width * 1,
              borderRadius: 9,
              borderColor: isInvalid ? '#FF8787' : '#E9ECEF',
              fontSize: 15,
              color: '#212529',
            }}
            secureTextEntry={true}
            placeholder="비밀번호를 입력해주세요"
            placeholderTextColor="#ADB5BD"
          />
          <View style={{height: height * 24, width: width * 361}} />
          <CustomButton
            title="아이디/비밀번호 찾기"
            onPress={() => navigation.navigate('Search')}
            width={width * 137}
            height={height * 30}
            borderColor="#E9ECEF"
            buttonColor="#FFF"
            titleColor="#495057"
            fontSize={14}
            paddingVertical={height * 6}
            paddingHorizontal={width * 8}></CustomButton>
          <View style={{height: height * 146, width: width * 361}} />
          <CustomButton
            title="로그인"
            onPress={() => checkValid()}
            width={width * 320}
            height={height * 52}
            borderColor="#4D4741"
            buttonColor="#4D4741"
            titleColor="#FFF"
            fontSize={16}
            paddingVertical={height * 16}
            paddingHorizontal={width * 12}
            borderRadius={10}></CustomButton>
          <View style={{height: height * 12, width: width * 361}} />
          <CustomButton
            title="회원가입"
            onPress={() => navigation.navigate('Dummy')}
            width={width * 320}
            height={height * 52}
            borderColor="#FFF"
            buttonColor="#FFF"
            titleColor="#495057"
            fontSize={16}
            paddingVertical={height * 16}
            paddingHorizontal={width * 12}
            borderRadius={10}></CustomButton>
          <Toast config={toastConfig} />
        </View>
      </SafeAreaView>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginInput'} component={Home} />
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'Dummy'} component={Dummy} />
    </Stack.Navigator>
  );
};

export default LoginInput;
