import * as React from 'react';
import SearchPassword from '../components/SearchPassword.tsx';
import SearchId from '../components/SearchId.tsx';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../config/globalStyles';

export default function Search({navigation}) {
  //choice가 false이면 아이디 찾기, ture이면 비밀번호 찾기
  const [either, setEither] = React.useState(false);
  const clickID = () => {
    if (either) {
      setEither(false);
    }
  };
  const clickPassword = () => {
    if (!either) {
      setEither(true);
    }
  };
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <View
        style={{
          height: height * 56,
          width: width * 361,
          flexDirection: 'row',
          paddingVertical: height * 15,
          paddingHorizontal: width * 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="cover"
            source={require('../config/navigationBack.png')}
            style={{width: width * 24, height: height * 24}}
          />
        </TouchableOpacity>
        <View style={{height: height * 26, width: width * 16}} />
        <Text
          style={{
            width: width * 240,
            fontSize: 16,
            color: '#212529',
            textAlign: 'center',
            includeFontPadding: false,
          }}>
          {'아이디/비밀번호 찾기'}
        </Text>
      </View>
      <View
        style={{
          height: height * 42,
          width: width * 361,
          flexDirection: 'row',
          paddingTop: height * 4,
          paddingBottom: 0,
          paddingHorizontal: width * 12,
        }}>
        <TouchableOpacity onPress={() => clickID()}>
          <View //아이디 찾기 버튼
            style={{
              height: height * 38,
              width: width * 164,
              paddingTop: height * 8,
              paddingBottom: 0,
            }}>
            <Text
              style={{
                height: height * 18,
                fontSize: 14,
                color: '#495057',
                textAlign: 'center',
                fontWeight: either ? '500' : '700',
                includeFontPadding: false,
              }}>
              {'아이디 찾기'}
            </Text>
            <View style={{height: height * 9}} />
            {!either && (
              <View
                style={{
                  height: height * 3,
                  width: width * 164,
                  backgroundColor: '#403B36',
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        <View style={{height: height * 38, width: width * 8}} />
        <TouchableOpacity onPress={() => clickPassword()}>
          <View //비밀번호 찾기 버튼
            style={{
              height: height * 38,
              width: width * 164,
              paddingTop: height * 8,
              paddingBottom: 0,
            }}>
            <Text
              style={{
                height: height * 18,
                fontSize: 14,
                color: '#495057',
                textAlign: 'center',
                fontWeight: either ? '700' : '500',
                includeFontPadding: false,
              }}>
              {'비밀번호 찾기'}
            </Text>
            <View style={{height: height * 9}} />
            {either && (
              <View
                style={{
                  height: height * 3,
                  width: width * 164,
                  backgroundColor: '#403B36',
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: height * 1,
            backgroundColor: '#E9ECEF',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />
      </View>
      {either ? (
        <SearchPassword navigation={navigation} />
      ) : (
        <SearchId navigation={navigation} />
      )}
    </View>
  );
}
