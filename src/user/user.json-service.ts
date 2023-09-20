import { User } from './user';
import { UserService } from './user.service';

export class UserJSONService implements UserService {
    add(username: string): User {
        //ajoute user fichier json
        throw new Error('Method not implemented.');
    }
    getById(id: number): User | null {
        //recupere user json et donne id
        throw new Error('Method not implemented.');
    }
}
