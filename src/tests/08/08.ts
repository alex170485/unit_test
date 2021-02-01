export const usersObj = {
    '0': 'Sasha',
    '1': 'Katja',
    '2': 'Dima',
    '3': 'Petya'
}
type UsersType = {
    [key: string]: {id: number, name: string}

}

export const users: UsersType = {
    '101': {id: 101, name: 'Sasha'},
    '15212': {id: 15212, name: 'Katja'},
    '224': {id: 224, name: 'Dima'},
    '8547': {id: 8547, name: 'Petya'}
}
let user = {id: 10500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Sasha'},
    {id: 15212, name: 'Katja'},
    {id: 224, name: 'Dima'},
    {id: 8547, name: 'Petya'}
]
//var usersArray = usersArray.filter(u => u.id !== user.id)
