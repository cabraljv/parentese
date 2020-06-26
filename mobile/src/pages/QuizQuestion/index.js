import React from 'react';
import {View} from 'react-native'
import { 
    Container,
    Header, 
    QuizLogo, 
    StarsView, 
    StarImage, 
    StarText,
    ViewLogo,
    Content,
    Question,
    QuestionCount,
    CountText,
    QuestionText,
    Options,
    OptionField,
    OptionText,
    Footer,
    NextBtn,
    BtnText
} from './styles';
import quizLogo from '../../assets/images/quizHeaderQuestion/quizHeaderQuestion.png'
import star from '../../assets/icons/starYellow/starYellow.png'
import Icons from 'react-native-vector-icons/Entypo'
 
export default function QuizQuestion() {
  return (
    <Container>
        <Header>
            <ViewLogo>
                <QuizLogo source={quizLogo} />
            </ViewLogo>
            <StarsView>
                <StarImage source={star} />
                <StarText>100</StarText>
            </StarsView>
        </Header>
        <Content>
            <Question>
                <QuestionCount>
                    <CountText>1/4</CountText>
                </QuestionCount>
                <QuestionText>
                    O gênero Romance é caracterizado por qual(quais) característica(s)?{'\n'}
                    {'\n'}
                    I- Temporalidade;{'\n'}
                    II- Enredo;{'\n'}
                    III- Amor;{'\n'}
                    IV- Impessoalidade{'\n'}
                </QuestionText>
            </Question>
            <View>
                <Options>
                    <OptionField BtnColor={0}>
                        <OptionText>A</OptionText>
                    </OptionField>
                    <OptionField>
                        <OptionText>B</OptionText>
                    </OptionField>
                </Options>
                <Options>
                    <OptionField>
                        <OptionText>C</OptionText>
                    </OptionField>
                    <OptionField>
                        <OptionText>D</OptionText>
                    </OptionField>
                </Options>
                <Options>
                    <OptionField>
                        <OptionText>E</OptionText>
                    </OptionField>
                </Options>
            </View>
            <Footer>
                <NextBtn enableBtn={true}>
                    <BtnText>
                        Próximo       
                    </BtnText>
                    <Icons name="chevron-right" size={35} color="#fff" />
                </NextBtn>
            </Footer>
        </Content>
    </Container>
  );
}
