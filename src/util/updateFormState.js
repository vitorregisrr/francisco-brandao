import {checkValidity} from 'util/checkValidity';

export const updateFormState = (e, key, formCtrls, isSelect) => {
    const newForm = {
        ...formCtrls
    };

    if (!isSelect) {
        const {isValid, error} = checkValidity(e.target.value, formCtrls[key]);
        newForm[key].value = e.target.value;
        newForm[key].validation.isValid = isValid;
        newForm[key].validation.error = error;

    } else {
        const {isValid, error} = {isValid: true, error: ''}
        newForm[key].value = e;
        newForm[key].validation.isValid = isValid;
        newForm[key].validation.error = error;
    }
    
    newForm[key].validation.touched = true;

    let isFormValid = true;
    for (let key in newForm) {
        if (!newForm[key].validation.isValid && newForm[key].validation.required) {
            isFormValid = false;
        }
    }

    return [isFormValid, newForm];
}