import React from 'react';
import { View } from 'react-native';

import { 
    Container, 
    ProfilePic, 
    Content,
    Name,
    Message
} from './styles';
import pp from '../../assets/images/userPic/userPic.png'

export default function CommentItem() {
  return (
    <Container>
        <ProfilePic source={pp} />
        <Content>
            <Name>Marina Vieira</Name>
            <Message>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Message>
        </Content>
    </Container>
  );
}
