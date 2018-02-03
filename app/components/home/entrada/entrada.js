// @flow
import React, { Component } from 'react';
import styles from './entrada.css';

type Props = {};

class EntradaComponent extends Component<Props> {
  props: Props;

  constructor() {
    super();
    this.state = {frames: ""};
  }

  entradaFrame(e) {
    const enter = e.target.value;
    this.setState({frames: enter});
  }

  submit() {
    this.props.entrada(this.state.frames);
    this.setState({frames: ""});
  }

  render() {
    return (
      <div className={styles.enter}>
        <input type="text" placeholder="Digite algo..." value={this.state.frames} onChange={this.entradaFrame.bind(this)} />
        <button onClick={this.submit.bind(this)}>Adicionar</button>
      </div>
    );
  }
}

export default EntradaComponent
