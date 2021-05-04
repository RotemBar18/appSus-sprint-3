import { utilService } from './util-service.js'
import { storageService } from './storage-service.js'

export const carService = {
    query,
    deleteCar,
    getCarById,
    getNextCarId,
    saveCar
}

const KEY = 'cars';
var gCars;
var gVendors = ['audi', 'fiat', 'suzuki', 'honda', 'mazda']

_createCars();

function query(filterBy) {
    if (filterBy) {
        var { vendor, maxSpeed, minSpeed } = filterBy
        maxSpeed = maxSpeed ? maxSpeed : Infinity
        minSpeed = minSpeed ? minSpeed : 0
        const filteredCars = gCars.filter(car => {
            return car.vendor.includes(vendor) && car.speed > minSpeed && car.speed < maxSpeed
        })
        return Promise.resolve(filteredCars)
    }
    return Promise.resolve(gCars)
}

function deleteCar(carId) {
    var carIdx = gCars.findIndex(function (car) {
        return carId === car.id
    })
    gCars.splice(carIdx, 1)
    _saveCarsToStorage();
    return Promise.resolve()
}
function saveCar(car) {
    return car.id ? _updateCar(car) : _addCar(car)
}
function _addCar(carToAdd) {
    var car = _createCar(carToAdd.vendor, carToAdd.speed)
    gCars.unshift(car)
    _saveCarsToStorage();
    return Promise.resolve(car)
}

function getCarById(carId) {
    var car = gCars.find(function (car) {
        return carId === car.id
    })
    return Promise.resolve(car)
}

function _updateCar(carToUpdate) {
    var carIdx = gCars.findIndex(function (car) {
        return car.id === carToUpdate.id;
    })
    gCars.splice(carIdx, 1, carToUpdate)
    _saveCarsToStorage();
    return Promise.resolve(carToUpdate)
}

function getNextCarId(carId) {
    const carIdx = gCars.findIndex(car => car.id === carId)
    var nextCarIdx = carIdx + 1
    nextCarIdx = nextCarIdx === gCars.length ? 0 : nextCarIdx
    return gCars[nextCarIdx].id
}
function _createCar(vendor, speed) {
    if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
    return {
        id: utilService.makeId(),
        vendor,
        speed,
        desc: utilService.makeLorem()
    }
}

function _createCars() {
    var cars = storageService.loadFromStorage(KEY)
    if (!cars || !cars.length) {
        cars = []
        for (let i = 0; i < 5; i++) {
            var vendor = gVendors[i]
            cars.push(_createCar(vendor))
        }
    }
    gCars = cars;
    _saveCarsToStorage();
}

function _saveCarsToStorage() {
    storageService.saveToStorage(KEY, gCars)
}
