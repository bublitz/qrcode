import React, { useEffect, useContext, useState } from 'react';
import {
  StatusBar,
  Image,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import VersionInfo from 'react-native-version-info';

import { Container, LoadingIcon, FooterText } from './styles';

export default () => {
  const navigation = useNavigation();

  const altura = Math.floor(Dimensions.get('screen').height / 2.5);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  /*
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [{ name: 'CreateQr' }],
      });
    }, 2000);
  }, []);
*/
  return (
    <>
      <StatusBar hidden />
      <Container>
        <ImageBackground
          color={'#f2f2f2'}
          source={require('../../assets/imgs/backg.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        >
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'column-reverse',
            }}
          >
            <Image
              source={require('../../assets/imgs/drache.png')}
              style={{ width: '100%', height: 80, resizeMode: 'contain' }}
            />
            <Image
              source={require('../../assets/imgs/drache_inc.png')}
              style={{ width: '100%', height: 50, resizeMode: 'contain' }}
            />
            <LoadingIcon size="small" color="#333333" />
            <FooterText>
              {VersionInfo.appVersion} (Build {VersionInfo.buildVersion})
            </FooterText>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
};
