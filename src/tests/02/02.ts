type LocalCityType = {
    title: string
    countryTitle: string
}
type addresType = {
    streetTitle: string
    city: LocalCityType
}
type technologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addresType
    technologies: Array<technologiesType>
}

export const student:StudentType = {
    id:1,
    'name': 'Sasha',
    age: 32,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id:1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id:3,
            title: 'React'
        }
    ]
}

console.log(student.address.city.title)
console.log(student.technologies[2].title)
