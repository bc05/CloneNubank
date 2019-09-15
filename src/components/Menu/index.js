import React from "react";
import QRCode from 'react-native-qrcode-svg';

import Icon from "react-native-vector-icons/MaterialIcons";
import { 
    Container, 
    Code, 
    Nav, 
    NavItem, 
    NavText, 
    SignOutButton, 
    SignOutButtonText 
} from "./styles";

export default function Menu() {
    return (
        <Container>
            <Code>
                <QRCode 
                    value="http://nubank.com.br"
                    logoSize={30}
                    logoBackgroundColor="transparent"
                    backgroundColor="#FFF"
                    color="#8A05BE"
                />
            </Code>
            
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão </NavText>
                </NavItem>   

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>                                             
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}