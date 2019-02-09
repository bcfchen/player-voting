import React from 'react';
import RegionButton from '../RegionButton/RegionButton';

const RegionSelectorSection = ({selectedRegion, regions, onRegionSelected, isVotingEnded}) => {
    const buttons = regions
    .map(region => <div key={region.id} className='button-container'>
        <RegionButton buttonText={region.name} 
        onButtonClick={() => onRegionSelected(region.id)}
        isSelected={region.id === selectedRegion}/>
    </div>);
    
    return (<div className='region-selector-container'>
        <span>Select your region to browser players.</span>
        {isVotingEnded && <span>NOTE: You may only vote for one region.</span>}
        <div className='region-selector-buttons-panel'>{buttons} </div>
    </div>);
};

export default RegionSelectorSection;
