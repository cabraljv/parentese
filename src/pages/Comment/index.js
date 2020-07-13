import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import star from '../../assets/icons/starYellow/starYellow.png'
import commentIcon from '../../assets/icons/commentPrimary/commentPrimary.png'
import pp from '../../assets/images/userPic/userPic.png'
import { 
    Container,
    CommentContainer,
    Header,
    BtnClose,
    ViewHeader,
    IconHeader,
    TextCount,
    CommentItensContainer,
    Footer,
    PpUser,
    Input,
    ButtonSend
 } from './styles';
import CommentItem from '../../components/CommentItem'
import Feather from 'react-native-vector-icons/Feather'


export default function Comment({navigation}) {
  return (
    <Container >
        <CommentContainer>
            <Header>
                <BtnClose onPress={()=>{
                    navigation.goBack();
                }}>
                    <Ionicons name="ios-arrow-down" color="#AC03FF" size={40} />
                </BtnClose>
                <ViewHeader>
                    <IconHeader source={star} />
                    <TextCount>10</TextCount>
                    <IconHeader source={commentIcon}  style={{width: 25}}/>
                    <TextCount>10</TextCount>
                </ViewHeader>
            </Header>
            <CommentItensContainer>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </CommentItensContainer>
            <Footer>
                <PpUser source={pp} />
                <Input placeholder="Escreva seu comentário..." />
                <ButtonSend>
                    <Feather name="send" color="#fff" size={30} />
                </ButtonSend>
            </Footer>
        </CommentContainer>
    </Container>
  );
}
