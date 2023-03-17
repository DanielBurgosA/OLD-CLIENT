export function validations(input) {
    let errors = {};

    if(!input.name){
        errors.name ='Please enter a name';
    }else if(input.name.search(/^[a-zA-Z\s]*$/) ){
        errors.name ='It cant have numbers or symbols'
    }

    if(!input.title){
        errors.title ='Please enter a title';
    }else if(input.title.search(/^[a-zA-Z\s]*$/) ){
        errors.title ='It cant have numbers or symbols'
    }

    if(!input.description){
        errors.description ='Please enter a description';
    }

    if(input.image.search(/(https?:\/\/.*\.(?:png|jpg))/) ){
        errors.image ='It have to be an URL'
    }
    
    if(!input.location){
        errors.location ='Please enter a location';
    }else if(input.location.search(/^[a-zA-Z\s]*$/) ){
        errors.location ='It cant have numbers or symbols'
    }

    return errors;
}