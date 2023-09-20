import { User } from './user';
import { UserService } from './user.service';
import * as fs from 'fs';

export class UserJSONService implements UserService {
    add(username: string): User {
        //ajoute user fichier json et id numerique aleatoire
        const getRandomInt = (max:number, min:number) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
        const addUserData = (id: number, username: string) => {
            fs.readFile('./src/user/users.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                let usersArray: any[] = [];
                
                try {
                    usersArray = JSON.parse(data);
                } catch (parseErr) {
                    console.error('Error parsing JSON:', parseErr);
                    return;
                }

                const userExists = usersArray.some((user) => user.id === id.toString() || user.username === username);
                if (userExists) {
                    console.log('User already exists.');
                } else {
                    usersArray.push({
                        id: id.toString(),
                        username: username
                    });
                    const jstring = JSON.stringify(usersArray, null, 4); //pp space 4
    
                    // Write the updated JSON data back to the file
                    fs.writeFile('./src/user/users.json', jstring, (writeErr) => {
                        if (writeErr) {
                            console.error('Error writing file:', writeErr);
                        }
                    });
                }
            });
        };
        
        const id = getRandomInt(10000,90000);
        addUserData(id, username);
        return new User(id, username);
    }

    getById(id: number): User | null {
        //recupere user json et donne id$
    
        const data = fs.readFileSync('./src/user/users.json', 'utf8');
        let usersArray: any[] = [];
        try {
            usersArray = JSON.parse(data);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            return null;
        }
        const foundUser = usersArray.find((user) => user.id === id.toString());
        if (foundUser) {
            return new User(foundUser.id, foundUser.username);
        } else {
            return null;
        }
    }
}

const userService = new UserJSONService();

userService.add('test');
userService.add('deux');
