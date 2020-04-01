import React from 'react';
import { StatusBar,ScrollView } from 'react-native';

import { 
  Container, 
  Header, 
  ButtonPP,
  ImagePP,
  Field,
  Label,
  Input,
  Footer,
  FooterBar,
  ButtonNext,
  TextButtonNext
} from './styles';
import user_pp from '../../../assets/images/userPic/userPic.png'
import footerBar from '../../../assets/images/footerBar2/footerBar2.png'
import Icons from 'react-native-vector-icons/Entypo'

export default function Info2({navigation}) {
  return (
    <Container>
      <StatusBar backgroundColor="#8600D9" barStyle='light-content' />
        <Header>
          <ButtonPP>
            <ImagePP source={user_pp} />
          </ButtonPP>
        </Header>
        <ScrollView >
          <Field>
            <Label>Nome:</Label>
            <Input />
          </Field>
          <Field>
            <Label>Idade:</Label>
            <Input />
          </Field>
          <Field>
            <Label>Cidade:</Label>
            <Input />
          </Field>
          <Field style={{marginBottom: 'auto'}}>
            <Label>Estado:</Label>
            <Input />
          </Field>
        
      <Footer>
        <FooterBar source={footerBar} />
        <ButtonNext onPress={()=>navigation.push('Info3')}>
          <TextButtonNext>Prosseguir </TextButtonNext>
          <Icons name="chevron-right" size={35} color="#AC03FF" />
        </ButtonNext>
      </Footer>
      </ScrollView>
    </Container>
  );
}
