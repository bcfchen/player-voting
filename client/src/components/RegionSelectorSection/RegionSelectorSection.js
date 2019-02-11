import React from 'react';
import RegionButton from '../RegionButton/RegionButton';

const RegionSelectorSection = ({ selectedRegion, regions, onRegionSelected, isVotingEnded }) => {
    const buttons = regions
        .map(region => <div key={region.id} className='button-container'>
            <RegionButton buttonText={region.name}
                onButtonClick={() => onRegionSelected(region.id)}
                isSelected={region.id === selectedRegion} />
        </div>);

    return (<div className='region-selector-container'>
        <div className='title'><span>Select your region to browser players.</span></div>
        {!isVotingEnded && <span>NOTE: You may only vote for one region.</span>}
        <div className='region-selector-buttons-panel'>{buttons} </div>
        {!isVotingEnded && <span>Click on up to 3 Players to place your votes.</span>}

        {!isVotingEnded && <span>The remaining of your votes must be for {selectedRegion}</span>}
        {isVotingEnded && <span>The top 3 vote earners in each region make up that region's team.</span>}
    </div>);
};

export default RegionSelectorSection;
