const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateVendorInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
    data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : "";
    data.expiration = !isEmpty(data.expiration) ? data.expiration : "";
    data.cvv = !isEmpty(data.cvv) ? data.cvv : "";
    data.quantity = !isEmpty(data.quantity) ? data.quantity : "";
    data.orderTotal = !isEmpty(data.orderTotal) ? data.orderTotal : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.address1 = !isEmpty(data.address1) ? data.address1 : "";
    data.address2 = !isEmpty(data.address2) ? data.address2 : "";
    data.company = !isEmpty(data.company) ? data.company : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.state = !isEmpty(data.state) ? data.state : "";
    data.zip = !isEmpty(data.zip) ? data.zip : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    

    // Form checks
    if (Validator.isEmpty(data.fullName)) {
        errors.fullName = "Full name is required";
    }
    if (Validator.isEmpty(data.cardNumber)) {
        errors.cardNumber = "Card Number is required"; 
    }
    if (Validator.isEmpty(data.expiration)) {
        errors.expiration = "Expiration is required";
    }
    if (Validator.isEmpty(data.cvv)) {
        errors.cvv = "cvv is required";
    }
    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = "quantity is required";
    }
    if (Validator.isEmpty(data.orderTotal)) {
        errors.orderTotal = "Order Total is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required    ";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid    ";
    }
    if (Validator.isEmpty(data.address1)) {
        errors.address1 = "Address is required";
    }
    if (Validator.isEmpty(data.city)) {
        errors.city = "city is required";
    }
    if (Validator.isEmpty(data.state)) {
        errors.state = "state is required";
    }
    if (Validator.isEmpty(data.zip)) {
        errors.zip = "zip code is required";
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "Phone number is required";
    }
    if (Validator.isEmpty(data.shipping)) {
        errors.shipping = "Shipping type is required";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};