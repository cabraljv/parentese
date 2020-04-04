import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.Image`
    position: absolute;
    top:0;
    left: 0;
    transform: scale(1.5);
`;

export const Logo = styled.Image`
    width: 140px;
    height: 155px;
`;
export const AppText = styled.Text`
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 25px;
`;

export const ViewText = styled.View`
    width: 85%;
    margin: 30px 0;
`;
export const ButtonLogin = styled.TouchableOpacity`
    width: 80%;
    height: 70px;
    border-radius: 35px;
    background: #fff;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    elevation: 4;
`;
export const BtnText = styled.Text`
    font-size: 18px;
    color: #444;
    margin: auto;
    
`;
export const IconView = styled.View`
    width: 70px;
    height: 100%;
    background: #efefef;
    border-bottom-left-radius: 35px;
    border-top-left-radius: 35px;
`;
export const IconImage = styled.Image`
    width: 35px;
    height: 35px;
    margin: auto;
`;