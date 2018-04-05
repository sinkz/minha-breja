import React, { Component } from 'react';
import {
    List,
    ListItem,
    Left,
    Thumbnail,
    Right,
    Body,
    Text
} from 'native-base'
var cervejas = require('../../../assets/cervejas.json');

const PromocaoList = () => (
    <List style={{ marginTop: 10 }}>
        {cervejas.map(cerveja => (
            <ListItem key={cerveja.id} avatar>
                <Left>
                    <Thumbnail />
                </Left>
                <Body>
                    <Text>{cerveja.nome}</Text>
                    <Text note>{cerveja.local}</Text>
                </Body>
                <Right>
                    <Text note>R$ {cerveja.preco}</Text>
                </Right>
            </ListItem>
        ))}
    </List>
)

export default PromocaoList;