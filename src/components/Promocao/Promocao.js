import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title } from 'native-base';

import PromocaoList from './PromocaoList';

export default class Promocao extends Component {
    render() {
        return (
          <Container>
              <PromocaoList/>
          </Container>
        );
    }
}