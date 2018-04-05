
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title } from 'native-base';
import Promocao from './Promocao/Promocao';

export default class TelaInicial extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Minha Breja</Title>
          </Body>
        </Header>
        <Content>
          <Promocao/>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}