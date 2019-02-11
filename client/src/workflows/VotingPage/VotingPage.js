import React from 'react';
import { connect } from "react-redux";
import * as votingPageActions from "../../redux/actions/votingPageActions";
import { bindActionCreators } from "redux";
import RegionSelectorSection from '../../components/RegionSelectorSection/RegionSelectorSection';
import PlayersGrid from '../../components/PlayersGrid/PlayersGrid';
import Player from '../../models/Player';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { regions } from '../../api/data/regionsData';

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
        const votesRemaining = 3 - this.props.votedPlayers.length;

        // this is to add some placeholder cards to deal with flexbox limitation
        for (let ii = 0; ii < 8; ii++) {
            this.props.playersInRegion.push(new Player({ participantId: '' }));
        }

        return (<div className='voting-page-container'>
            <NavigationBar isAdminMode={this.props.isAdminMode}
                onSwitchUser={this.onToggleAdmimMode}
                onEndVoting={this.onEndVoting} />
            <div className='voting-page-title'><span>{titleText}</span></div>
            <RegionSelectorSection votesRemaining={votesRemaining}
                selectedRegionId={this.props.selectedRegionId}
                regions={regions} onRegionSelected={this.onRegionSelected}
                isVotingEnded={this.props.isVotingEnded} />
            <PlayersGrid players={this.props.playersInRegion}
                votesRemaining={votesRemaining}
                onTogglePlayerVote={this.onTogglePlayerVote}
                isVotingEnded={this.props.isVotingEnded} />
        </div>);
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        isAdminMode: state.votingPage.isAdminMode,
        isVotingEnded: state.votingPage.isVotingEnded,
        selectedRegionId: state.votingPage.selectedRegionId,
        votedPlayers: state.votingPage.votedPlayers,
        playersInRegion: state.votingPage.playersInRegion
    };
}

const mapDispatchToProps = dispatch => {
    return {
        votingPageActions: bindActionCreators(votingPageActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingPage);