import { expect } from 'chai';
import { Ridgewood } from '../src/hotel/ridgewood';

describe('bridgewood', function() {
    it('getPrice', function() {
        const ridgewood = new Ridgewood();
        expect(ridgewood.getPrice('Regular', '16Mar2009(mon)')).equal(220);
        expect(ridgewood.getPrice('Regular', '15Mar2009(sun)')).equal( 150);
        expect(ridgewood.getPrice('Rewards', '15Mar2009(sun)')).equal( 40);
        expect(ridgewood.getPrice('Rewards', '16Mar2009(mon)')).equal( 100);
    });
    it('getClassfication', function() {
        const ridgewood = new Ridgewood();
        expect(ridgewood.getClassification()).equal(5);
    })
});