import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
	background: #fff;
`;
export const Header = styled.View`
  width: 100%;
`;

export const Logo = styled.Image`
    margin: 20px auto;
    width: 50px;
    height: 55px;
`;
export const ProfilePic = styled.Image`
    margin: 0 auto;
`;
export const Field = styled.View`
  width: 90%;
	margin: 20px auto;
`;
export const Label = styled.Text`
	font-size: 16px;
	color: #555;
	margin-left: 2px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
	background: #fff;
	elevation: 4;
	padding: 5px;
	color: #333;
	border-radius: 15px;
`;
export const Footer = styled.View`
	display: flex;
	flex-direction: row;
	position: relative;
	margin-top: auto;
	margin-bottom: 40px;
`;
export const FooterBar = styled.Image`
  margin: 0 auto;
  margin-top: 30px;
  width: 60px;
  height: 15px;
`;
export const ButtonNext = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
		position: absolute;
		right: 5%;
		bottom: -10px;
`;

export const TextButtonNext = styled.Text`
    font-size: 18px;
    color: #AC03FF;
    margin: auto;
`;
export const AboutYou = styled.View`
    margin-top: auto;
`;



