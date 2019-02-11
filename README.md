# player-voting
![alt text](https://i.imgur.com/wWcZSd1.png, "Player Voting Page")

### Implementation notes
- I updated the player data to give it a bit more teams variety
- Instead of implementing a user login, I built a nav bar to toggle between regular vs admin user
- When user is admin, the "Toggle End voting" option will be available in the nav bar dropdown. The admin user can use this option to end or resume voting
- While voting, clicking on a player's icon will vote for the player, and clicking on the same player again will un-vote the player. The number of like and hence voting percentage will update accordingly. 
- Selecting a different region will clear the user's votes in the previous region, since the user is only allowed to vote in one region

### To install
Clone this repo with 
```
git clone https://github.com/bcfchen/player-voting.git
```
cd into the __player-voting/client__ folder and install npm packages by:
```
npm install
```

### To run
Check that you're in the __player-voting/client__ folder and run the project by:
```
npm start
```
The page should automatically open up in your browser at __localhost:3000__

### Main libraries & services used
- __React/Redux__
