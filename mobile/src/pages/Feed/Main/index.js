import React from 'react';

import { 
  Container, 
  Header, 
  BtnDrawer, 
  ImageDrawer, 
  Logo, 
  BtnQuiz, 
  ImageQuiz,
  FeedArea,
  
} from './styles';

import logo from '../../../assets/images/logoWhiteHeader/LogoWhiteHeader.png'
import quiz from '../../../assets/images/quizHeader/QuizHeader.png'
import pp from '../../../assets/images/userPic/userPic.png'
import FeedItem from '../../../components/FeedItem';
import {StatusBar} from 'react-native'

export default function Main({navigation}) {
  return (
    <Container>
      <StatusBar backgroundColor="#8600D9" barStyle='light-content' hidden={false} translucent={false} />
      
      <Header>
        <BtnDrawer onPress={()=>navigation.openDrawer()} >
          <ImageDrawer source={pp} />
        </BtnDrawer>
        <Logo source={logo} />
        <BtnQuiz onPress={()=>navigation.push('Quiz')} >
          <ImageQuiz source={quiz} />
        </BtnQuiz>
      </Header>
      <FeedArea>
        <FeedItem onClickComment={()=>navigation.push('Comment')}/>
        <FeedItem onClickComment={navigation}/>
        <FeedItem onClickComment={navigation}/>
        <FeedItem onClickComment={navigation}/>
        <FeedItem onClickComment={navigation}/>
      </FeedArea>
    </Container>
  );
}
