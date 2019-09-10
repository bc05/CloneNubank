import React from 'react';

import { Container, Content } from "./styles";

import Header from "~/components/Header";
import Tabs from "~/components/Tabs";
import Card from "~/components/Card";

export default function Main() {
  return (
      <Container>
        <Header />

        <Content>
          <Card />
        </Content>

        <Tabs />
      </Container>
    );
}