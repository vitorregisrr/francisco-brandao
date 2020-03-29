import React from 'react';
import InputMask from 'react-input-mask';
import {CSSTransition} from 'react-transition-group';
import Select from 'react-select';

import './Forms.scss';

const FormGroup = props => {
    let input = false;

    if (!props.type || props.type === 'input') {
        input = <input
            type="text"
            className={`form-control`}
            id={`input-${props.name}`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChangeHandler(e, props.name)}/>

    } else if (props.type === 'select') {
        input = <Select
            value={props.value}
            onChange={(selectedOption) => props.onChangeHandler(selectedOption, props.name, true)}
            placeholder={props.placeholder}
            options={props.options}
            isSearchable={true}
            classNamePrefix="custom-select"/>

    } else if (props.type === 'input-mask') {
        input = <InputMask
            mask={props.mask}
            type="text"
            className={`form-control`}
            id={`input-${props.name}`}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.onChangeHandler(e, props.name)}/>
    }

    return (
        <div
            className={`form-group ${props.isTouched
            ? (props.isInvalid
                ? 'has-error'
                : 'is-valid')
            : ''}`}>
            <label htmlFor={`input-${props.name}`}>{props.label}</label>
            {input}
            <CSSTransition
                in={!!props.error}
                timeout={300}
                unmountOnExit={true}
                classNames="CSSTransition--fade">
                <div className="form-error">{props.error}</div>
            </CSSTransition>
        </div>
    )
}

export default FormGroup;