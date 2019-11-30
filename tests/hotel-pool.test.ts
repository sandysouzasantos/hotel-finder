import { expect } from 'chai';
import * as mock from 'simple-mock';
import { Lakewood } from '../src/hotel/lakewood';
import { HotelPool } from '../src/hotel-pool';
import { Bridgewood } from '../src/hotel/bridgewood';

describe('hotel-pool', function() {
   it('getHotelClassificationByName', function() {
      const lakewood = new Lakewood();
      mock.mock(lakewood, 'getName').returnWith('Lakewood');
      mock.mock(lakewood, 'getPrice').returnWith(10);
      mock.mock(lakewood, 'getClassification').returnWith(3);

      const hotelPool = new HotelPool();
      hotelPool.addHotel(lakewood);
      expect(hotelPool.getHotelClassificationByName('Lakewood')).equal(3);
   });

   it('getCheapest', function() {
      const hotelPool = new HotelPool();

      const lakewood = new Lakewood();
      mock.mock(lakewood, 'getName').returnWith('Lakewood');
      mock.mock(lakewood, 'getPrice').returnWith(10);
      mock.mock(lakewood, 'getClassification').returnWith(3);

      hotelPool.addHotel(lakewood);

      const bridgewood = new Bridgewood();
      mock.mock(bridgewood, 'getName').returnWith('Bridgewood');
      mock.mock(bridgewood, 'getPrice').returnWith(20);
      mock.mock(bridgewood, 'getClassification').returnWith(4);

      hotelPool.addHotel(bridgewood);

      expect(hotelPool.getCheapest('Regular', '20Mar2019(tue)')).equal('Lakewood');
      mock.mock(lakewood, 'getPrice').returnWith(20);
      expect(hotelPool.getCheapest('Regular', '20Mar2019(tue)')).equal('Bridgewood');
   });
});