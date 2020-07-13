import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { 
    Container,
    Header,
    BackButton,
    Logo,
    StarsView,
    StarImage,
    StarText,
    Content,
    QuizLogo,
    TextContent,
    ThemeField,
    ThemeText,
    BtnStart,
    BtnText
} from './styles';
import logo from '../../assets/images/logoWhiteHeader/LogoWhiteHeader.png'
import star from '../../assets/icons/starYellow/starYellow.png'
import quizLogo from '../../assets/images/balaoQuiz/balaoPergunta.png'

export default function Quiz({ navigation }) {
  return (
    <Container>
        <Header>
            <BackButton onPress={()=>navigation.pop()}>
                <Ionicons name="ios-arrow-back" color="#fff" size={40} />
            </BackButton>
            <Logo source={logo} />
            <StarsView>
                <StarImage source={star} />
                <StarText>100</StarText>
            </StarsView>
        </Header>
        <Content>
            <QuizLogo source={quizLogo}/>
            <TextContent>O tema de suas questões será...</TextContent>
            <ThemeField>
                <ThemeText>Romance</ThemeText>
            </ThemeField>
            <BtnStart onPress={()=>navigation.push('QuizQuestion')} >
                <BtnText>COMEÇAR</BtnText>
            </BtnStart>
        </Content>
    </Container>
  );
}
