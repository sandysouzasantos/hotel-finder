import { Lakewood } from '../src/hotel/lakewood';
import { expect } from 'chai';

describe('lakewood', function() {
    it('getPrice', function() {
        const lakewood = new Lakewood();
        expect(lakewood.getPrice('Regular', '16Mar2009(mon)')).equal(110);
        expect(lakewood.getPrice('Regular', '15Mar2009(sun)')).equal( 90);
        expect(lakewood.getPrice('Rewards', '15Mar2009(sun)')).equal( 80);
        expect(lakewood.getPrice('Rewards', '16Mar2009(mon)')).equal( 80);
    });
    it('getClassfication', function() {
        const lakewood = new Lakewood();
        expect(lakewood.getClassification()).equal(3);
    });
});