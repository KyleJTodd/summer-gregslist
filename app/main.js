import CarController from "./components/Car/CarController.js";
import PropertyController from "./components/Property/PropertyController.js";


class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            propertyController: new PropertyController()
        }
    }
}

window['app'] = new App()  