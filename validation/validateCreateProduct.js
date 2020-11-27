export default function validateCreateProduct(values) {

    let errors = {};

    // validate userName
    if(!values.name) {
        errors.name = "Field Name is requiered";
    }

    // validate company
    if(!values.company) {
        errors.company = "Field Company name is required"
    }
    
    // validate url
    if(!values.url) {
        errors.url = "Field Product URL is required";
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) ) {
        errors.url = "It isn't a valid URL format"
    }

    // validate description.
    if(!values.description) {
        errors.description = "Field Description is required"
    }

    return errors;
}