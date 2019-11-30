import { Hotel } from './hotel/hotel';

export class HotelPool {
    private hotels: Hotel[] = [];

    public addHotel(hotel: Hotel): void {
        this.hotels.push(hotel);
    }

    public getHotelClassificationByName(name: string): number {
        for (const hotel of this.hotels) {
            if (hotel.getName() !== name) {
                continue;
            }
            return hotel.getClassification();
        }

        throw new Error('Unknown hotel');
    }

    public getCheapest(type: string, ...dates: string[]): string {
        const prices: any = {};
        for (const hotel of this.hotels) {
            prices[hotel.getName()] = 0;
        }

        for (const date of dates) {
            for (const hotel of this.hotels) {
                prices[hotel.getName()] += hotel.getPrice(type, date);
            }
        }

        let cheapest: string = '';

        for (const name in prices) {
            // If cheapest is empty, initiate with the first;
            if (cheapest === '') {
                cheapest = name;
                continue;
            }

            // If the current price is lower than the current cheapest price, we replace the cheapest for the current
            if (prices[name] < prices[cheapest]) {
                cheapest = name;
                continue;
            }

            // If the current price equals the current cheapst price, then we check the hotel classification
            if (prices[name] === prices[cheapest]) {
                cheapest = this.getHotelClassificationByName(name) > this.getHotelClassificationByName(cheapest) ? name : cheapest;
            }
        }
console.log(prices);
        return cheapest;
    }
}
