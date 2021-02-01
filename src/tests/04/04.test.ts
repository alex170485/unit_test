test('should take all old mens', ()=> {
    const ages = [18,20,21,1,100,90,14];
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
})
test('should take courses chipper to 160', ()=> {
    const courses = [
        {title: 'css', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]
    const cheapPredicate = (course: CourseType) => course.price < 160 ;
    const cheapCourses = courses.filter(cheapPredicate);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('css');
    expect(cheapCourses[1].title).toBe('React')
})

test('get omly complited task', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const complitedTasks = tasks.filter(task=> task.isDone)
    expect(complitedTasks.length).toBe(2)
    expect(complitedTasks[0].title).toBe('Bread')
    expect(complitedTasks[1].title).toBe('Sugar')
})
test('get only uncompleted task', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const unCompleted = tasks.filter(task=> task.isDone === false)
    expect(unCompleted.length).toBe(2)
    expect(unCompleted[0].id).toBe(2)
    expect(unCompleted[1].title).toBe('Salt')
})

