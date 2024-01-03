import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../config/globalStyles';
import axios from 'axios';
import LabelTextinput from '../components/LabelTextinput.tsx';

export default function Dummy({navigation}) {
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [findId, setFindId] = React.useState(101);
  const [body, setBody] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const requestHttpGet = async () => {
    try {
      setIsLoading(true);
      const datas = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(datas.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    requestHttpGet();
  }, []);

  React.useEffect(() => {
    if (findId < 101) {
      requestGet();
    }
  }, []); //[findId]);
  const requestGet = async () => {
    try {
      const datas = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {params: {id: findId}},
      );
      setData(datas.data);
    } catch (err) {
      console.log(err);
    }
  };

  const requestPost = async () => {
    try {
      const datas = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {userId: 12, id: 101, title: 'first post', body: body},
      );
      const datass = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(datass.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      {isLoading && <View style={{flex: 1, backgroundColor: '#FAE64D'}} />}
      {!isLoading && (
        <>
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
              {'axios로 데이터 받아오기'}
            </Text>
          </View>
          <ScrollView
            style={{
              padding: 10,
            }}
            contentContainerStyle={{
              paddingBottom: height * 15,
            }}>
            {data.map((dataa, index) => (
              <React.Fragment key={index}>
                <Text>
                  {index + 1}번째 데이터: {dataa.title}
                </Text>
              </React.Fragment>
            ))}
          </ScrollView>
          <LabelTextinput
            label={'아이디 조회하기'}
            placeholder={'조회를 원하는 아이디를 입력해주세요'}
            keyboardType={'numeric'}
            onChangeText={input => setId(input)}
          />
          <TouchableOpacity onPress={() => setFindId(id)}>
            <Text
              style={{
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              아이디 조회 버튼
            </Text>
          </TouchableOpacity>
          <View>
            {findId > 100 ? (
              <View />
            ) : (
              <Text style={{padding: 10}}>{data[findId - 1].title}</Text>
            )}
          </View>
        </>
      )}
    </View>
  );
}
