/**
 * Scripts to fetch NbaTopshot Moment Metadata
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */

/**
 * Fetches all topshots
 *
 */
 export const fetchAllPlays = `
 import TopShot from 0x877931736ee77cff

 // This script returns an array of all the plays
 // that have ever been created for Top Shot

 // Returns: [TopShot.Play]

 pub fun main(): [TopShot.Play] {

     return TopShot.getAllPlays()
 }
 `

 export const getOwnedNFTs = `
 import TopShot from 0x877931736ee77cff

 pub fun main(): {
     return TopShot.Collection.owndNFTs()
 }

 ownedNFTs
 `

 /**
  * Fetches all moment IDs  by account
  *
  */
 export const fetchIDsByAccount = `
 import TopShot from 0x877931736ee77cff

 // This sccript returns an array of all the plays owned by an account

 // Returns: [Topshot.Play]

 pub fun main(): [TopShot.Play] {
     return TopShot.Collection.getIDs()
 }
 `

/**
 * fetches Topshot play by ID
 *
 */
export const fetchPlayByID =`
`
