import React from 'react';
import { StatusBar } from 'react-native';
import logo from '../../../assets/images/logoBig/LogoBig.png'
import footerBar from '../../../assets/images/footerBar1/footerBar1.png'
import { 
    Container,
    Logo,
    MidText,
    Footer,
    FooterBar,
    ButtonNext,
    TextButtonNext 
} from './styles';
import Icons from 'react-native-vector-icons/Entypo'

export default function Info1({navigation}) {
  return (
    <Container>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Logo source={logo}/>
        <MidText>
            Quase la...{'\n'}
            So precisamos que você {'\n'}
            crie o seu perfil
        </MidText>
        <Footer>
            <ButtonNext onPress={()=>navigation.push('Info2')}>
                <TextButtonNext>Prosseguir </TextButtonNext>
                <Icons name="chevron-right" size={50} color="#AC03FF" />
            </ButtonNext>
            <FooterBar source={footerBar} />
        </Footer>
    </Container>
  );
}
