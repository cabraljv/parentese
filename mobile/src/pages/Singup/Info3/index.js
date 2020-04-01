import React from 'react';
import { View } from 'react-native';

import { 
  Container, 
  Header, 
  Logo,
  Field,
  Label,
  Input,
  Footer,
  FooterBar,
  ButtonNext,
  TextButtonNext,
  ProfilePic,
  AboutYou
} from './styles';
import footerBar from '../../../assets/images/footerBar3/footerBar3.png'
import Icons from 'react-native-vector-icons/Entypo'
import logo from '../../../assets/images/logo/logo.png'
import pp from '../../../assets/images/userPic/userPic.png'

export default function Info3({navigation}) {
  return (
    <Container>
      <Header>
          <Logo source={logo} />
      </Header>
      <AboutYou>
          <ProfilePic source={pp} />
      </AboutYou>
      <Field>
        <Label>Qual é o seu autor favorito?</Label>
        <Input placeholder="Ex: Machado de Assis" />
      </Field>
      <Field>
        <Label>Qual é o seu livro preferido?</Label>
        <Input placeholder="Ex: Dom Casmurro" />
      </Field>
      
      <Footer>
        <FooterBar source={footerBar} />
        <ButtonNext onPress={()=>navigation.push('Welcome')}>
          <TextButtonNext>Prosseguir </TextButtonNext>
          <Icons name="chevron-right" size={35} color="#AC03FF" />
        </ButtonNext>
      </Footer>
      
    </Container>
  );
}
