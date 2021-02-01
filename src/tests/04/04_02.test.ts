import {CityType} from "../02/02_02";
import {demolishHouseToTheStreat, getBuildingsWithStaffCount} from "./04_02";

let city: CityType;

beforeEach(()=> {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt:2012, repaired: false,
                address: { number:100, street: {title: 'white street'}}
                },
            {
                id: 2,
                buildedAt:2008, repaired: false,
                address: { number:100, street: {title: 'happy street'}}
                },
            {
                id:3,
                buildedAt:2020, repaired: false,
                address: { number:101, street: {title: 'white street'}}}
        ],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 500000,
                staffCount: 200,
                address:
                    {street:
                            {title: 'Central str'}}
            },{
                type: "Firestation",
                budget: 2500000,
                staffCount: 1000,
                address:
                    {street:
                            {title: 'New str'}}
            }
        ],
        citizensNumber: 1000000
    }
})

test('Houses should be destroed ', () => {
    demolishHouseToTheStreat(city, "happy street");
    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})
test('get my building to correct staff', () => {
    let building  = getBuildingsWithStaffCount(
        city.governmentBuildings,
        500);
    expect(building.length).toBe(1);
    expect(building[0].type).toBe('Firestation')
})
