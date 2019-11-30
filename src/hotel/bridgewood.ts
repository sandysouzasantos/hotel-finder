import { Hotel } from './hotel';

export class Bridgewood extends Hotel {
    getClassification(): number {
        return 4;
    }

    getPrice(type: string, date: string): number {
        if (this.isWeekend(date)) {
            return type === 'Regular' ? 60 : 50;
        }

        return type === 'Regular' ? 160 : 110;
    }

    getName(): string {
        return "Bridgewood";
    }
}