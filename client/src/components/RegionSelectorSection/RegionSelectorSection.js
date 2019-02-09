import React from 'react';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import { selectRegion } from '../../redux/actions/votingPageActions';

const RegionSelectorSection = ({regions, onRegionSelected, isVotingEnded}) => {
    return (<div className='region-selector-container'>
        <span>Select your region to browser players.</span>
        {isVotingEnded && <span>NOTE: You may only vote for one region.</span>}
        <ButtonsPanel buttonTexts={regions} selectedButton={selectRegion} onButtonClick={onRegionSelected}/>
    </div>);
};

export default RegionSelectorSection;
