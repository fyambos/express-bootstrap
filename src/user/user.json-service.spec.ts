import { UserJSONService } from './user.json-service';
import { User } from './user';

jest.mock('fs');

describe('UserJSONService', () => {
    let userService: UserJSONService;

    beforeEach(() => {
        userService = new UserJSONService();
    });

    //Mock Test

    it('adds a user', () => {
        const user = userService.add('dummyUser');
        expect(user).toBeInstanceOf(User);
    });

});
