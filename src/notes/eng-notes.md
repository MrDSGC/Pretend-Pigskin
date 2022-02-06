# Engineering Notes

TOPSHOT SHOOTERS
SHOOTERS SHOOT

#### nba apis
- end of day stat update scoreboard: http://data.nba.net/10s/prod/v1/20170218/scoreboard.json
- player profiles :http://data.nba.net/10s/prod/v1/2016/players.json
- daily update for all files: http://data.nba.net/10s/prod/v1/today.json
- live box-score: api-football.com/documentation-v3


## MVP
- accounts can mint player card with topshot metadata
- accounts can create a weekly lineup with  playercard tokens
- account lineups are ranked by player performance


### cadence stuff:
- transaction to access topshot
- create contract for minting resource
- create contract for minting player card? do we even mint a card?i want this token to have 0 value and be tied to the topshot. is that possible? want a lot of meta data. how much metadata is too much?

### regular fullstack stuff
- generate league/league db structure
- generate scoring system/ modular structure
- generate views and displays for showing player data,
- generate views for player cards/inventory
- generate views for leagues

- create balancing rules
- non-fungible lifetime player stats
- player fantasy league history
- user fantasy league history
- player card market, searchable by stats/bonuses

# the bible
kitty items: https://github.com/onflow/kitty-items

dapper nba smart contracts: https://github.com/dapperlabs/nba-smart-contracts

### topshot balancing
![image](https://user-images.githubusercontent.com/23225108/150630916-06a00c63-965c-420f-8ba2-bfedb861296c.png)
link: https://blog.nbatopshot.com/posts/nba-top-shot-rarity-blog
- metadata of topshot will determine scoring bonuses
- rarity of topshot gives you % chance of getting one of 4 tiered player card
- player cards tier range from total bonus from 0%, 50%, 75%, 100%
- can create player cards of NON-FANTASY-VIABLE-PLAYERS. put a lot of guardrails around this to prevent accidental player card minting
- what are game design best practices??? where to find them
- multiple topshots able to affect 1  playercard?
- re-rerolling stats mechanic?
- recycling playercards with poor stats?
- playrs on a winning squads earn rerolls? (weekly? seasonal?) earn bonus stats? tenured player  cards > fresh?
