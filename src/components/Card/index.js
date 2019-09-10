import React from "react";

import { Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { 
    Container, 
    CardHeader, 
    CardContent, 
    CardFooter, 
    Title,
    Description,
    Annotation,
    NameUser
} from "./styles";

export default function Card() {
    return (
        <Container>
            <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 59.689,78</Description>
            </CardContent>

            <CardFooter>
                <Annotation>
                    Compra em Suprema Kawasaki de R$ 979,59 no débito domingo
                </Annotation>
            </CardFooter>
        </Container>
    );
}