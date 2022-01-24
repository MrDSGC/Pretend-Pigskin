/**
 * Test Transaction
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */

export const doTheOtherThing = `
import Hello_World from 0x3fee9800cf957801

transaction(newGreeting: String) {
  prepare(acct: AuthAccount){}

  execute {
    Hello_World.changeGreeting(newGreeting: newGreeting)
    log("changed greeting")
  }
}
`
