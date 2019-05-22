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
  _subscribers[propName].forEach(fn => (fn))
}

//public

export default class PropertyService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Properties() {
    return _state.properties.map(p => new Property(p))
  }
  getAllProperty() {
    _propertyApi.get()
      .then(res => {
        let property = res.data.data.map(p => new Property(p))
      })
  }
}

