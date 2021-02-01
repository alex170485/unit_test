export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: 'Alexandr Petrov', age: 23},
    {name: 'Petya Ivanow', age: 48},
    {name: 'Dimich Sidarow', age: 50}
]
const Transformator = (man: ManType) =>({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split( ' ')[1]
})

const messages = people.map(man=> `Hello ${man.name.split( ' ')[0]} to Minsk`)