import React from 'react';

import { StatusBar } from 'react-native';
import { Container, 
  Background, 
  Logo,
  AppText,
  ViewText ,
  ButtonLogin,
  BtnText,
  IconView,
  IconImage,
} from './styles';
import bg from '../../assets/images/bgLogin/bgLogin.png'
import logo from '../../assets/images/logoWhite/logoWhite.png'
import googleIcon from '../../assets/icons/google.png'

export default function Login({navigation}) {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <Background source={bg} />
      <Logo source={logo} />
      <ViewText>
        <AppText>
          Quantas Clarices Lispector e Machados 
          de Assis não tiveram suas obras
          publicadas por falta de oportunidade? 
          Faça parte dessa nova e promissora 
          realidade
        </AppText>
      </ViewText>
      <ButtonLogin>
        <IconView>
          <IconImage source={googleIcon} />
        </IconView>
        <BtnText onPress={()=>navigation.push('SingUp')}>Entrar com o Google</BtnText>
      </ButtonLogin>
    </Container>
  );
}
