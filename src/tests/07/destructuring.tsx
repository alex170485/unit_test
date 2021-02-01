import React, {useState} from "react";
import {LessonType} from "./07.test";
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car:{model:string}
}

function useAlexState(message: string) {
    return [message, function(){}]

}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
      const [message, setMessage] =useState<string>('hello')
    return (
    <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>

    </div>
    )
}
