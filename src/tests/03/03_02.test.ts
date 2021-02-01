import {CityType} from "../02/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";


let city: CityType;

beforeEach(()=> {
    city = {
        title: 'New York',
        houses: [
            {
            buildedAt:2012, repaired: false,
            address: { number:100, street: {title: 'white street'}}}, {
            buildedAt:2008, repaired: false,
            address: { number:100, street: {title: 'happy street'}}}, {
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
test ('Budget should be changer for Hospital', ()=> {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(600000)
})
test ('Budget should be changed to Firestation', ()=> {
    addMoneyToBudget(city.governmentBuildings[1], 100000);
    expect(city.governmentBuildings[1].budget).toBe(2600000)
})
test ('House should be repair', ()=> {
   repairHouse(city.houses[1]);
   expect(city.houses[1].repaired).toBeTruthy();
})
test('staff shoul be to creases', ()=> {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})