import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ECECEC;
`;
export const Header = styled.View`
    height: 60px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    elevation: 5;
`;

export const QuizLogo = styled.Image`
 
`;
export const ViewLogo = styled.View`
        margin: 0 auto;
        padding-left: 85px;
`;
export const StarsView = styled.View`
  display: flex;
  flex-direction: row;
  background: #fff;
  padding: 5px 10px;
  border-radius: 40px;
  align-items: center;
  margin-right: 10px;
  elevation: 5;
`;
export const StarImage = styled.Image`
  height: 17px;
  width: 17px;
  margin-right: 5px;
  
`;
export const StarText = styled.Text`
  padding: 2px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Content = styled.View`
    flex: 1;
    margin: 15px;
    border-radius: 20px;
    background: #fff;
    elevation: 5;
`;
export const Question = styled.View`
    margin: 40px 20px;
    background: #fff;
    elevation: 4;
    border-radius: 20px;
    padding: 10px;
    height: 300px;
    margin-bottom: 20px;
`;
export const QuestionCount = styled.View`
    margin: auto;
    background: #A4FF54;
    border-radius: 30px;
    margin-top: -30px;
    margin-bottom: 15px;
`;
export const CountText = styled.Text`
  color: #fff;
  padding: 7px 25px;
  font-size: 18px;

`;
export const QuestionText = styled.Text`
  color: #333333;
  font-size: 16px;
`;
export const Options = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
  padding-top: 0;
`;

export const OptionField = styled.TouchableOpacity`
  background: #ECECEC;
  elevation: 4;
  padding: 10px 40px;
  border-radius: 40px;
`;

export const OptionText = styled.Text`
  color: #333;
  font-size: 20px;
`;
export const Footer = styled.View`
  margin-top: auto;
  padding: 20px;
`;
export const NextBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding: 8px 25px;
  background: ${params=>params.enableBtn ? '#AC03FF': '#ECECEC'};
  border-radius: 40px;
  elevation: 5;
`;
export const BtnText = styled.Text`
  color: #fff;
  margin: auto;
  font-size: 16px;
`;

