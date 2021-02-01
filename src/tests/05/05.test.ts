import {ManType} from "./05";


let people: Array<ManType> = []

beforeEach(()=> {
    people = [
        {name: 'Alexandr Petrov', age: 23},
        {name: 'Petya Ivanow', age: 48},
        {name: 'Dimich Sidarow', age: 50}
    ]
})

test('shoul get array to greating messages', () => {
    const messages = people.map(man=> `Hello ${man.name.split( ' ')[0]} to Minsk`);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Alexandr to Minsk')
    expect(messages[1]).toBe('Hello Petya to Minsk')
    expect(messages[2]).toBe('Hello fimich to Minsk')
})