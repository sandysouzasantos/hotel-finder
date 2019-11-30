import { Hotel } from './hotel';

export class Lakewood extends Hotel {
    public getPrice(type: string, date: string): number {
        if (type === 'Rewards') {
            return 80;
        }

        return this.isWeekend(date) ? 90 : 110;
    }

    public getClassification(): number {
        return 3;
    }

    public getName(): string {
        return "Lakewood";
    }
}