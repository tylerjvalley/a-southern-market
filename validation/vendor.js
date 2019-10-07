const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateVendorInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.street = !isEmpty(data.street) ? data.street : "";
    data.city = !isEmpty(data.city) ? data.city: "";
    data.state = !isEmpty(data.state) ? data.state : "";
    data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Store name is required    ";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required    ";
    }
    if (Validator.isEmpty(data.street)) {
        errors.street = "Street is required    ";
    }
    if (Validator.isEmpty(data.city)) {
        errors.street = "City is required    ";
    }
    if (Validator.isEmpty(data.state)) {
        errors.state = "State is required    ";
    }
    if (Validator.isEmpty(data.zipCode)) {
        errors.zipCode = "Zip code is required    ";
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    };
};