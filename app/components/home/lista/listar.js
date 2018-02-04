// @flow
import React, { Component } from 'react';
import styles from './listar.css';

type Props = {};

class ListarComponent extends Component<Props> {
  props: Props;

  renderLista() {
    // Lista que será utilizada para listar os itens.
    let lista = [];

    for(let x = 0; x < this.props.lista.length; x++) {
      lista.push(
        <li key={x}>{this.props.lista[x]}</li>
      )
    }

    return lista;

  }

  render() {
    return (
      <div className={styles.lista}>
        <ul>
          {this.renderLista()}
        </ul>
      </div>
    );
  }
}

export default ListarComponent
