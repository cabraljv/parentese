import React, {useState} from 'react';

import { 
    Container,
    Header,
    ProfilePic,
    UserInfo,
    UserName,
    UserAccount,
    Time,
    ContentView,
    Title,
    Content,
    Footer,
    BtnFooter,
    BtnIcon
 } from './styles';
import star from '../../assets/icons/star/star.png'
import starYellow from '../../assets/icons/starYellow/starYellow.png'
import comment from '../../assets/icons/comment/comment.png'
import share from '../../assets/icons/share/share.png'
import pp from '../../assets/images/userPic/userPic.png'

export default function FeedItem({onClickComment}) {
    const [liked, setLiked] = useState(false);

    return (
    <Container>
            <Header>
            <ProfilePic source={pp} /> 
            <UserInfo>
                <UserName>Carlos Augusto</UserName>
                <UserAccount>Escritor</UserAccount>
            </UserInfo>
            <Time>
                1h
            </Time>
            </Header>
            <ContentView>
            <Title>
                AMIZADE
            </Title>
            <Content>
                A amizade consegue ser tão complexa... {'\n'}
                Deixa uns desanimados, outros bem felizes...{'\n'}
                É a alimentação dos fracos{'\n'}
                É o reino dos fortes{'\n'}
                {'\n'}
                Faz-nos cometer erros{'\n'}
                Os fracos deixam se ir abaixo{'\n'}
                Os fortes erguem sempre a cabeça{'\n'}
                os assim assim assumem-os{'\n'}
                {'\n'}
                Sem pensar conquistamos{'\n'}
                O mundo geral{'\n'}
                e construímos o nosso pequeno lugar{'\n'}
                deixando brilhar cada estrelinha{'\n'}
                {'\n'}
                Estrelinhas...{'\n'}
                Doces, sensíveis, frias, ternurentas...{'\n'}
                Mas sempre presentes em qualquer parte{'\n'}
                Os donos da amizade...{'\n'}
            </Content>
            </ContentView>
            <Footer>
            <BtnFooter onPress={()=>setLiked(true)} >
                {
                    liked ? <BtnIcon source={starYellow} />:
                    <BtnIcon source={star} />
                }
            </BtnFooter>
            <BtnFooter onPress={()=>onClickComment()} >
                <BtnIcon source={comment} style={{width: 27}} />
            </BtnFooter>
            <BtnFooter>
                <BtnIcon source={share} />
            </BtnFooter>
            </Footer>
        </Container>
    );
}
