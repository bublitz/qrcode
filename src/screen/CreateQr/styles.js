import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  background-color: #fff000;
  text-align: center;
  margin: 5px;
  padding: 5px;
`;
