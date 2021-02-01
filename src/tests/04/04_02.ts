import {CityType, governmentBuildingsType} from "../02/02_02";

export function demolishHouseToTheStreat(city: CityType, happyStreat: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== happyStreat)
}

export const getBuildingsWithStaffCount = (governmentBuildings: Array<governmentBuildingsType>, number: number) => {
    return governmentBuildings.filter(b=> b.staffCount > number)
}