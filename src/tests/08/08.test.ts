import {usersObj} from "./08";
type UsersType = {
    [key: string]: {id: number, name: string}

}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Sasha'},
        '15212': {id: 15212, name: 'Katja'},
        '224': {id: 224, name: 'Dima'},
        '8547': {id: 8547, name: 'Petya'}
    }

})

test('should be update ', () => {
    users['101'].name = 'Alexandr'
    expect(users['101'].name).toBe('Alexandr');
    expect(users['224'].name).toBe('Dima');
})