import { Hotel } from './hotel';

export class Ridgewood extends Hotel {
    getClassification(): number {
        return 5;
    }

    getPrice(type: string, date: string): number {
        if (this.isWeekend(date)) {
            return type === 'Regular' ? 150 : 40;
        }

        return type === 'Regular' ? 220: 100;
    }

    getName(): string {
        return "Ridgewood";
    }
}