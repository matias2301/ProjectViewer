export default function validateLogin( values ) {

    let errors = {};

    // validar el email
    if(!values.email) {
        errors.email = "Field email is requiered";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Enter a valid email"
    }

    // validar el password
    if(!values.password) {
        errors.password = "Field password is requiered";
    } else if( values.password.length < 6 ) {
        errors.password = 'It must have 6 characters'
    }

    return errors;
}