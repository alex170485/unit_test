import {CityType} from "./02_02";

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
test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('white street')

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('happy street')

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('white street')
})

test ('test city should contains hospital and fire station ', ()=> {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('Hospital');
    expect(city.governmentBuildings[0].budget).toBe(500000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe('Central str')

    expect(city.governmentBuildings[1].type).toBe('Firestation');
    expect(city.governmentBuildings[1].budget).toBe(2500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe('New str')
})