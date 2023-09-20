export class User {
    constructor(
        public id: number,
        public username: string,
        public coords: Array<number>,
        public hash: string,
        timestamp: number,
    ) {}
}