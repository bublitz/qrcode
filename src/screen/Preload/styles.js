import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #02f2f2;
  color: #f1f;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 5px;
  padding: 5px;
`;
