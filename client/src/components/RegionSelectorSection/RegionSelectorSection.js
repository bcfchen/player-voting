import React from 'react';
import RegionButton from '../RegionButton/RegionButton';

const RegionSelectorSection = ({ votesRemaining, selectedRegionId, regions, onRegionSelected, isVotingEnded }) => {
    const buttons = regions
        .map(region => <div key={region.id} className='button-container'>
            <RegionButton buttonText={region.name}
                onButtonClick={() => onRegionSelected(region.id)}
                isSelected={region.id === selectedRegionId} />
        </div>);

    const selectedRegionName = selectedRegionId ? regions.find(region => region.id === selectedRegionId).name : undefined;
    return (<div className='region-selector-container'>
        <div className='description'><span>Select your region to browse players.</span></div>
        {!isVotingEnded && <div className='description'><span>NOTE: You may only vote for one region.</span></div>}
        <div className='region-selector-buttons-panel'>{buttons} </div>
        {!isVotingEnded && <div className='description'>
            <span>Click on up to 3 Players to place your votes. </span><span className='gray-text'>({votesRemaining} votes remaining)</span>
        </div>}
        {!isVotingEnded && selectedRegionName && <div className='description'><span>The remaining of your votes must be for {selectedRegionName}.</span></div>}
        {isVotingEnded && <div className='description'><span>The top 3 vote earners in each region make up that region's team.</span></div>}
    </div>);
};

export default RegionSelectorSection;
