import React from 'react';
import { StatusBar } from 'react-native';

import { 
    Container, 
    Header, 
    Logo,TextMsg,
    TextLogo,
    MidSection,
    Footer,
    ButtonWrite,
    ButtonText,
    ButtonNext,
    TextButtonNext,
    
} from './styles';
import logo from '../../../assets/images/logo/logo.png'
import Icons from 'react-native-vector-icons/Entypo'

export default function Welcome({navigation}) {
  return (
    <Container>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Header>
            <Logo source={logo} />
        </Header>
        <MidSection>
            <TextMsg>Seja Bem Vindo(a) ao...</TextMsg>
            <TextLogo>PARÊN!..?TESES</TextLogo>
            <ButtonWrite onPress={()=>navigation.push('WriteText')}>
                <ButtonText>Escrever</ButtonText>
            </ButtonWrite>
        </MidSection>
        <Footer>
            <ButtonNext>
                <TextButtonNext>Prosseguir </TextButtonNext>
                <Icons name="chevron-right" size={50} color="#757373" />
            </ButtonNext>
        </Footer>
    </Container>
  );
}
