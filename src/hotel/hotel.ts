export abstract class Hotel {
    abstract getPrice(type: string, date: string): number;
    abstract getClassification(): number;
    abstract getName(): string;

    protected isWeekend(date: string): boolean {
        const weekDay = date.match(/\((.{3,4})\)/);
        if (weekDay) {
            return weekDay[1] === 'sun' || weekDay[1] === 'sat';
        }
        throw 'Invalid date format';
    }
}
