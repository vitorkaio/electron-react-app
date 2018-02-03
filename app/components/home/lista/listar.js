// @flow
import React, { Component } from 'react';
import styles from './listar.css';

type Props = {};

class ListarComponent extends Component<Props> {
  props: Props;

  renderLista() {
    let lista = [];

    for(let item of this.props.lista) {
      lista.push(
        <li>{item}</li>
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
