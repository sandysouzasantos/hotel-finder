import { expect } from 'chai';
import { Bridgewood } from '../src/hotel/bridgewood';

describe('bridgewood', function() {
    it('getPrice', function() {
        const bridgewood = new Bridgewood();
        expect(bridgewood.getPrice('Regular', '16Mar2009(mon)')).equal(160);
        expect(bridgewood.getPrice('Regular', '15Mar2009(sun)')).equal( 60);
        expect(bridgewood.getPrice('Rewards', '15Mar2009(sun)')).equal( 50);
        expect(bridgewood.getPrice('Rewards', '16Mar2009(mon)')).equal( 110);
    });
    it('getClassfication', function() {
        const bridgewood = new Bridgewood();
        expect(bridgewood.getClassification()).equal(4);
    })
});