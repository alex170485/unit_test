import {student, StudentType} from "../02/02";
import {governmentBuildingsType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;

}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (governmentBuildingsType: governmentBuildingsType, number: number) => {
    governmentBuildingsType.budget += number;
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}
export const toFireStaff = (governmentBuildingsType: governmentBuildingsType, number: number) => {
governmentBuildingsType.staffCount -= number;
}