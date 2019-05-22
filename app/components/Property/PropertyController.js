import PropertyService from "./PropertyService.js";

//private
let _propertyService = new PropertyService()



function _drawProp() {
  let prop = _propertyService.Properties
  let template = ''
  prop.forEach(props => {
    template += props.Template
  })
  document.getElementById('cars').innerHTML = template
}

function _drawForm() {
  document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.propertyController.addProp(event)">
    <div class="form-group col-4">
        <label for="bedrooms">Bedrooms</label>
        <input type="text" class="form-control" id="bedrooms" name="bedrooms" placeholder="Enter Bedrooms" required>
    </div>
    <div class="form-group col-4">
        <label for="bathrooms">Bathrooms</label>
        <input type="text" class="form-control" id="bathrooms" name="bathrooms" placeholder="Enter Bathrooms"
            required>
    </div>
    <div class="form-group col-4">
        <label for="year">Year</label>
        <input type="number" class="form-control" id="year" name="year" placeholder="Enter Year"
            required>
    </div>
        <div class="form-group col-4">
        <label for="levels">Floors</label>
        <input type="number" class="form-control" id="levels" name="levels" placeholder="Enter Floors"
            required>
    </div>
    <div class="form-group col-4">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" name="price" placeholder="Enter Price"
            required>
    </div>
    <div class="form-group col-4">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" name="description"
            placeholder="Enter Description">
    </div>
    <div class="form-group col-4">
        <label for="imgUrl">Image</label>
        <input type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="Enter Image Url"
            required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`
}

export default class PropertyController {
  constructor() {
    _propertyService.addSubscriber('properties', _drawProp)

    _propertyService.getAllProperty()
  }
  renderProperties() {
    _drawProp();
    _drawForm();
  }
  addProp(event) {
    event.preventDefault();
    let form = event.target
    let propData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl.value,
      levels: form.levels.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
    }
    _propertyService.addProp(propData)
    form.reset()
  }

}

