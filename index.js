const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = [...drivers]
    return newDrivers.splice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    let newDrivers = [...drivers] 
    return newDrivers.slice(2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(num) {
    return function(fare) {
       return fare * num
    }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, funk) {
   return funk(driversArray)
}