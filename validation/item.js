const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateVendorInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.vendor = !isEmpty(data.vendor) ? data.vendor : "";
    data.category = !isEmpty(data.category) ? data.category : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Store name is required    ";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required    ";
    }
    if (Validator.isEmpty(data.vendor)) {
        errors.vendor = "Vendor is required    ";
    }
    if (Validator.isEmpty(data.category)) {
        errors.category = "Category is required    ";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};