const sentense = 'Hello my friends!';

export function SplitIntoWords(sentense:string) {
    return sentense.toLocaleLowerCase().split(' ');
}


export function sum (a:number, b: number) {
    return a+b;
}
export function multiple (a:number, b: number) {
    return a*b;
}
