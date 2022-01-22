/**
Pigskin's main page.
authored by Daniel Cheng dcheng47@gmail.com 2022
*/

import React from 'react';
import Button from 'react-bootstrap/Button'
import * as fcl from '@onflow/fcl';

class Pigskin extends React.Component {

  constructor() {
    super()
    this.answer = 0
    this.script = fcl.script`
      pub fun main(): Int {
        return 2 + 2
      }
    `

  }

  state = {
    answer: 0
  }


  send = () => {
     fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");

     fcl.send([this.script])
      .then(
        async result => {
          this.setState({answer: await fcl.decode(result)});
      })

  }

  render() {
    return (
      <div>
        <br/>
        {this.state.answer}
        <br/>
        < button onClick={this.send}>
          Send
        </button>
      </div>
    )
  }
}

export default Pigskin;
