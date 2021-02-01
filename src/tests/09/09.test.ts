function incAgeUser (u: UserType) {
    u.age ++;
}
type UserType = {
    name: string
    age: number
    address:{title: string}
}
test ( 'Test', () => {
    let user: UserType = {
        name: 'Alex',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }
    incAgeUser(user)
    expect(user.age).toBe(36)
})
test( 'array test', () => {
    let users = [
        {name: 'Alex', age: 35},
        {name: 'Katya', age: 33}
    ]
    let  admins = users
    admins.push({name: 'Dasha', age: 15})
    expect(admins[2]).toEqual({name: 'Dasha', age: 15})
})
test('value test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = 101
})
test ( 'Test reference', () => {
    let user: UserType = {
        name: 'Alex',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }
    user2.address.title = 'Kanary'
    expect(user.address.title).toBe('Kanary')
})
test( 'Array test', () => {
    let user: UserType = {
        name: 'Alex',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }
    const users = [user, user2, {name: "Dima", age: 40, address: 'Minsk'}]
    const admins = [user, user2]
    admins[0].name = 'Alexandr'
    expect(admins[0].name).toBe('Alexandr')
    expect(user.name).toBe('Alexandr')
})