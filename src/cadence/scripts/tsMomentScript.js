/**
 * Script to fetch NbaTopshot Moment Metadata
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 export const fetchAllTopshots = `
 import TopShot from 0x877931736ee77cff

 // This script returns an array of all the plays
 // that have ever been created for Top Shot

 // Returns: [TopShot.Play]
 // array of all plays created for Topshot

 pub fun main(): [TopShot.Play] {

     return TopShot.getAllPlays()
 }
 `
