import {SplitIntoWords, sum} from "./01";

/*Вынос данных за тело функции*/
let a: number;
let b: number;
let c: number;
/*Фунгкция callback перед тестом запускается и присваетвает значение переменнх*/
beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3 ;
})


test ('sum should be correct', () => {
    const a = 4;
    const b = 6;

    const result = sum(a,b);

    expect(result).toBe(10);
})

test('splitting into words shpuld be corrected', () => {
    /*Подготовка*/
    const sent1 = 'Hello my friends'
    const sent2 = 'js - programming  language'
    /*Действие*/
    const result1 = SplitIntoWords(sent1);
    const result2 = SplitIntoWords(sent2);
    /*Результат*/
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('programming')
    expect(result2[3]).toBe('')
    expect(result2[4]).toBe('language')



})