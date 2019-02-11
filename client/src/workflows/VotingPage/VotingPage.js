import React from 'react';
import { connect } from "react-redux";
import * as votingPageActions from "../../redux/actions/votingPageActions";
import { bindActionCreators } from "redux";
import RegionSelectorSection from '../../components/RegionSelectorSection/RegionSelectorSection';
import PlayersGrid from '../../components/PlayersGrid/PlayersGrid';
import Player from '../../models/Player';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
const REGIONS = [{ id: 'jp', name: 'Japan' }, { id: 'zh', name: 'China' }, { id: 'tw', name: 'Taiwan' }, { id: 'sea', name: 'South East Asia' }];

class VotingPage extends React.Component {
    constructor() {
        super();
        this.onTogglePlayerVote = this.onTogglePlayerVote.bind(this);
        this.onToggleAdmimMode = this.onToggleAdmimMode.bind(this);
        this.onEndVoting = this.onEndVoting.bind(this);
        this.onRegionSelected = this.onRegionSelected.bind(this);
    }

    componentDidMount() {
        this.props.votingPageActions.loadPlayersData();
    }

    // handlers
    onTogglePlayerVote(id) {
        this.props.votingPageActions.togglePlayerVote(id);
    }

    onToggleAdmimMode() {
        this.props.votingPageActions.toggleAdminMode(!this.props.isAdminMode);
    }

    onEndVoting() {
        this.props.votingPageActions.endVoting(!this.props.isVotingEnded);
    }

    onRegionSelected(region) {
        this.props.votingPageActions.selectRegion(region);
    }

    render() {
        const titleText = this.props.isVotingEnded ? 'Results of voting for each region'
            : 'Vote for players to represent your regions team';
        const playersForRegion = this.props.selectedRegion ? this.props.players.filter(player => player.teams === this.props.selectedRegion) : [];
        const votedPlayersForRegion = this.props.selectedRegion ? this.props.votedPlayers.filter(player => playersForRegion.map(playerForRegion => playerForRegion.participantId).includes(player)) : [];
        const toggleAdminButtonText = this.props.isAdminMode ? 'Regular user mode' : 'Admin mode';
        for (let ii = 0; ii <= 8; ii++) {
            playersForRegion.push(new Player({ participantId: '' }));
        }
        return (<div className='voting-page-container'>
            <NavigationBar isAdminMode={this.props.isAdminMode} onSwitchUser={this.onToggleAdmimMode} onEndVoting={this.onEndVoting} />
            <div className='voting-page-title'><span>{titleText}</span></div>
            <RegionSelectorSection selectedRegion={this.props.selectedRegion}
                regions={REGIONS} onRegionSelected={this.onRegionSelected}
                isVotingEnded={this.props.isVotingEnded} />
            <PlayersGrid players={playersForRegion}
                votedPlayers={votedPlayersForRegion}
                onTogglePlayerVote={this.onTogglePlayerVote}
                isVotingEnded={this.props.isVotingEnded} />
        </div>);
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        players: state.votingPage.playersData,
        isAdminMode: state.votingPage.isAdminMode,
        isVotingEnded: state.votingPage.isVotingEnded,
        selectedRegion: state.votingPage.selectedRegion,
        votedPlayers: state.votingPage.votedPlayers
    };
}

const mapDispatchToProps = dispatch => {
    return {
        votingPageActions: bindActionCreators(votingPageActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingPage);