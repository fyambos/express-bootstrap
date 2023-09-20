import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (!username || username.trim() === '') {
            throw new Error('Username cannot be empty or whitespace.');
        }
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
            throw new Error('Invalid user ID. Please provide a positive integer.');
        }
        return this.userService.getById(id);
    }
}
