//деструктурирующее присваивание - это разбор на части
import {ManType} from "./destructuring";

export type LessonType = {
    title: string
}



let props: ManType;
beforeEach(()=> {
    props = {
        name: 'Alex',
        age: 35,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Antonovskaja street'
            }
        }
    }
})

test('', () => {

   // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props; /*эта запись эквивалентна записи стр. 10-11. Ищем свойства у объекта*/


    const a = props.age
    const l = props.lessons

    expect(age).toBe(35)
    expect(lessons.length).toBe(2)

    expect(a).toBe(35)
    expect(l.length).toBe(2)
})
test('1', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')


})
