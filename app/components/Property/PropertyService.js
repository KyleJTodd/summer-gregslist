import Property from "../../models/Property.js";

//private

let _propertyApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})

let _state = {
  properties: []

}

let _subscribers = {
  properties: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//public

export default class PropertyService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Properties() { //from state
    return _state.properties.map(p => new Property(p))
  }
  getAllProperty() { //from api
    _propertyApi.get()
      .then(res => {
        let property = res.data.data.map(p => new Property(p))
        _setState('properties', property)
      })
      .catch(err => {
        console.error(err)
      })
  }
  addProp(propData) {
    _propertyApi.post('', propData)
      .then(res => {
        this.getAllProperty()
      })
      .catch(err => {
        console.error(err)
      })

  }
}

