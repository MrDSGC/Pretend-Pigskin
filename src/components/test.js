/**
 * Test component
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */

import {doTheThing} from '../cadence/scripts/exampleScript';
import {doTheOtherThing} from '../cadence/transactions/exampleTransaction';
import {useState} from 'react';

fcl.config()
.put("accessNode.api", "https://access-testnet.onflow.org")
.put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

function Pigskin() {

  const [greeting, setGreeting] = useState();

  const useInput= () => {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={"text"}/>;
    return [value, input];
  }
  const [newGreeting, newGreetingInput] = useInput();
  const [user, setUser] = useState();
  const login = () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);


  const getTheGreeting = async () => {

    const result = await fcl.send([
      fcl.script(doTheThing)
    ]).then(fcl.decode);

    setGreeting(result);
  }

  const changeTheGreeting = async (greeting) => {
    const transactionId = await fcl.send([
      fcl.transaction(doTheOtherThing),
      fcl.args([
        fcl.arg(greeting, types.String)
      ]),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(9999)
    ]).then(fcl.decode)

    console.log(transactionId);
  }



  return (
    <div className='App'>
      <h1>Account Address: {user && user.addr ? user.addr : 'nothing'}</h1>
      <br/>
      {greeting ?? 'GoodBye Sun'}
      <br/>
      < button onClick={() => getTheGreeting()}>
        GREETINGS
      </button>
      <br/>
      {newGreetingInput} -> {newGreeting}
      < button onClick={() => changeTheGreeting(newGreeting)}>
        GREETINGS CHANGE
      </button>
      <br/>
      < button onClick={() => login()}>
        LOG IN
      </button>
      < button onClick={fcl.authenticate}>
        LOG OUT
      </button>
    </div>
  )
}

export default Pigskin;
