import React from 'react';

import { StatusBar } from 'react-native';
import { Container, Background } from './styles';
import bg from '../../assets/images/bgLogin/bgLogin.png'

export default function Login() {
  return (
    <Container>
      <StatusBar hidden />
      <Background source={bg} />
    </Container>
  );
}
