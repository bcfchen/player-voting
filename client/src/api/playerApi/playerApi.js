import { playersData } from '../data/playersData';
import Player from '../../models/Player';

export const getPlayersData = () => {
    return new Promise((resolve, reject) => {
        // transform into Player objects for easier manipulation
        const players = playersData.map(playerData => new Player(playerData));
        resolve(players);
    });
};

