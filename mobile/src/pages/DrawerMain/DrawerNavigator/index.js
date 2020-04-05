import React from 'react';

import { Container,Header,ProfilePic,Item,ItemText } from './styles';
import pp from '../../../assets/images/userPic/userPic.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function DrawerNavigator(props) {
  return (
    <Container >
        <Header>
          <ProfilePic source={pp} />
        </Header>
        <Item>
          <AntDesign name='user' color='#fff' size={35} />
          <ItemText>Perfil</ItemText>
        </Item>
        <Item>
          <AntDesign name='isv' color='#fff' size={35} />
          <ItemText>Loja</ItemText>
        </Item>
        <Item style={{marginTop: 'auto'}}>
          <AntDesign name='setting' color='#fff' size={35} />
          <ItemText>Configurações</ItemText>
        </Item>
       
    </Container>
  );
}
