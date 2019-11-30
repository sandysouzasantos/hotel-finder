import { Lakewood } from './hotel/lakewood';
import { HotelPool } from './hotel-pool';
import { Bridgewood } from './hotel/bridgewood';
import { Ridgewood } from './hotel/ridgewood';
import * as fs from 'fs';

const fileName: string = process.argv[2];
const hotelPool = new HotelPool();
hotelPool.addHotel(new Lakewood());
hotelPool.addHotel(new Bridgewood());
hotelPool.addHotel(new Ridgewood());

fs.readFile(fileName, 'UTF-8', (error: any, data: any) => {
    const lines: string[] = data.split("\n");
    for (const line of lines) {
        if (line.length < 7) {
            continue;
        }

        const type: string = line.substr(0, 7);
        const dates: string[] = line.substr(9).split(", ");
        console.log(hotelPool.getCheapest(type, ...dates));
    }
});