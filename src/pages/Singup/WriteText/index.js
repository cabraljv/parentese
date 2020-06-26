import React from 'react';
import { StatusBar } from 'react-native';

import Icons from 'react-native-vector-icons/Entypo'
import { 
    Container, 
    Header,
    TextShowTheme,
    TextTheme,
    TextArea,
    Footer,
    ButtonNext,
    TextButtonNext,
    
 } from './styles';

export default function WriteText({navigation}) {
  return (
    <Container>
        <StatusBar backgroundColor="#fff" barStyle='dark-content' translucent={false} />
        <Header>  
            <TextShowTheme>O tema de seu texto é...</TextShowTheme>
            <TextTheme>Amizade</TextTheme>
        </Header>
        <TextArea multiline placeholder="Escreva seu texto aqui..."/>
        <Footer>
            <ButtonNext onPress={()=>navigation.push('Info1')}>
                <TextButtonNext>Prosseguir </TextButtonNext>
                <Icons name="chevron-right" size={50} color="#AC03FF" />
            </ButtonNext>
        </Footer>
    </Container>
  );
}
