import React, {PropTypes} from 'react';
import {CheckBox, Label} from 'Components';
import I18n from 'I18n';

const toBoolean = val => {
    if (typeof val === 'string') {
        switch (true) {
            case val.toLowerCase() === 'true':
            case val.toLowerCase() === 'on':
            case val.toLowerCase() === '1':
                return true;

            default:
                return false;
        }
    }

    return Boolean(val);
};

const BooleanEditor = props => {
    const {value, label, identifier, commit} = props;

    return (
        <div>
            <Label htmlFor={identifier}>
                <CheckBox id={identifier} isChecked={toBoolean(value)} onChange={commit}/>
                <I18n id={label}/>
            </Label>
        </div>
    );
};

BooleanEditor.propTypes = {
    identifier: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    commit: PropTypes.func.isRequired
};

export default BooleanEditor;
