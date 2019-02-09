import { playersData } from '../data/playersData';

export const getPlayersData = () => {
    return new Promise((resolve, reject) => {
        resolve(playersData);
    });
};

