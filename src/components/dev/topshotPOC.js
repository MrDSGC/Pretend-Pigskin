/**
 * Proof of Concept for reading topshot moment data
 *
 * main page
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import {
  CardHeader,
  CardContent,
  Card,
  Button,
  Box,
  ListItem,
  List,
} from '@mui/material'
import { useState } from 'react'
import { fetchAllTopshots } from '../../cadence/scripts/tsMomentScript'
import * as fcl from '@onflow/fcl'

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')

export default function TopShotPOC() {
  const useInput = () => {
    const [value, setValue] = useState('')
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={'text'}
      />
    )
    return [value, input]
  }

  const [playKey, newPlayKeyInput] = useInput()
  const [play, setPlay] = useState()

  const fetchPlaysByKey = async () => {
    const result = await fcl
      .send([fcl.script(fetchAllTopshots)])
      .then(fcl.decode);

    setPlay(result[playKey])
  }

  const QueryInput = () => (
    <CardContent>
      <Box>
        Enter a topshot between 0 - 679:
        {newPlayKeyInput}
      </Box>
      <Button onClick={() => fetchPlaysByKey()}>Get Plays By Key</Button>
    </CardContent>
  )

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader>TOPSHOT MOMENT DATA</CardHeader>
      <QueryInput />
      {play && (
        <List>
          <ListItem>
            <h1>PlayId: {play.playID}</h1>
          </ListItem>
          <ListItem>Birthdate: {play.metadata.AwayTeamName}</ListItem>
          <ListItem>Birthplace: {play.metadata.AwayTeamScore}</ListItem>
          <ListItem>FirstName: {play.metadata.Birthdate}</ListItem>
          <ListItem>NbaSeason: {play.metadata.Birthplace}</ListItem>
          <ListItem>PlayType: {play.metadata.DateOfMoment}</ListItem>
          <ListItem>TeamAtMomentNBAID: {play.metadata.DraftRound}</ListItem>
          <ListItem>DraftRound: {play.metadata.DraftSelection}</ListItem>
          <ListItem>DateOfMoment: {play.metadata.DraftTeam}</ListItem>
          <ListItem>JerseyNumber: {play.metadata.DraftYear}</ListItem>
          <ListItem>Height: {play.metadata.FirstName}</ListItem>
          <ListItem>PrimaryPosition: {play.metadata.FullName}</ListItem>
          <ListItem>TotalYearsExperience: {play.metadata.Height}</ListItem>
          <ListItem>DraftTeam: {play.metadata.HomeTeamName}</ListItem>
          <ListItem>AwayTeamScore: {play.metadata.HomeTeamScore}</ListItem>
          <ListItem>AwayTeamName: {play.metadata.JerseyNumber}</ListItem>
          <ListItem>DraftSelection: {play.metadata.LastName}</ListItem>
          <ListItem>LastName: {play.metadata.NbaSeason}</ListItem>
          <ListItem>PlayCategory: {play.metadata.PlayCategory}</ListItem>
          <ListItem>HomeTeamName: {play.metadata.PlayType}</ListItem>
          <ListItem>Weight: {play.metadata.PlayerPosition}</ListItem>
          <ListItem>HomeTeamScore: {play.metadata.PrimaryPosition}</ListItem>
          <ListItem>FullName: {play.metadata.TeamAtMoment}</ListItem>
          <ListItem>TeamAtMoment: {play.metadata.TeamAtMomentNBAID}</ListItem>
          <ListItem>
            PlayerPosition: {play.metadata.TotalYearsExperience}
          </ListItem>
          <ListItem>DraftYear: {play.metadata.Weight}</ListItem>
        </List>
      )}
    </Card>
  )
}
