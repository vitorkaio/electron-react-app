// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css';
import EntradaComponent from './entrada/entrada';
import ListarComponent from './lista/listar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor() {
    super();

    this.state = {lista: []};
  }

  entradaDados(dado) {
    if(dado.length !== 0) {
      let array = this.state.lista.slice();
      array.push(dado);
      this.setState({lista: array.slice()});
    }
  }

  render() {
    return (
      <div>
        <EntradaComponent entrada={this.entradaDados.bind(this)}/>
        <div className={styles.cont}>
          <ListarComponent lista={this.state.lista}/>
        </div>
      </div>
    );
  }
}
