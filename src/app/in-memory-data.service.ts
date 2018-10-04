import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 1, name: 'Ironman' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Hulk' },
            { id: 4, name: 'Thor' },
            { id: 5, name: 'Hawkeye' },
            { id: 6, name: 'Black Widow' },
            { id: 7, name: 'Black Panther' },
            { id: 8, name: 'Spiderman' },
            { id: 9, name: 'Doctor Strange' },
            { id: 10, name: 'Guardians of the Galaxy' }
        ];
        return { heroes };
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
