import React, { Component } from "react";
import { FormValidator } from "./FormValidator";
import { ValidationMessage } from "./ValidationMessage";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Bob",
            terms: false
        };

        this.rules = {
            name: { required: true, minlength: 3, alpha: true },
            terms: { true: true }
        };
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    render() {
        return <div className="h5 bg-info text-white p-2">
            <FormValidator data={ this.state } rules={ this.rules } submit={ this.props.submit }>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" value={ this.state.name } 
                        onChange={ this.updateFormValue } />
                    <ValidationMessage field="name" />
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="terms"
                            checked={ this.state.terms } onChange={ this.updateFormValueCheck } />
                        <label chassName="form-check-label">
                            Agree to terms
                        </label>
                    </div>
                </div>            
                <ValidationMessage field="terms" />
            </FormValidator>
        </div>
    }
}