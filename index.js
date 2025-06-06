const returnFirstTwoDrivers = (function (drivers) {
    return drivers.slice(0, 2)
})

const returnLastTwoDrivers = (function (drivers) {
    return drivers.slice(drivers.length-2, drivers.length)
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(someValue) {
    function multiplier(fare) {
        return fare * someValue
    }

    return multiplier
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}
