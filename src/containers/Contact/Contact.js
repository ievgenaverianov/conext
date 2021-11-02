import React, {Component} from "react";
import classes from './Contact.module.scss';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import ContactInfo from "../../components/UI/ContactInfo/ContactInfo";
import ContactFormSent from "./ContactFormSent/ContactFormSent";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


class Contact extends Component {

    state = {
        isFormValid: false,
        contactIssue: 1,
        formSent: false,
        formControls: {
            userName: {
                value: '',
                type: 'text',
                label: 'Votre nom*',
                errorMessage: 'Enter correct name (minimum 5 symbols)',
                valid: false,
                touched: false,
                focused: false,
                validation: {
                    required: true,
                    minLength: 5
                }
            },
            email: {
                value: '',
                type: 'email',
                label: 'Téléphone ou E-mail*',
                errorMessage: 'Enter correct email or phone number (minimum 10 symbols)',
                valid: false,
                touched: false,
                focused: false,
                validation: {
                    required: true,
                    // email: true,
                    minLength: 10
                }
            }
        }
    }

    sendFormHandler = () => {
        this.setState({
            formSent: true,
        })
        console.log('Form sent')
    }

    submitHandler = event => {
        event.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    onFocusHandler = (controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.focused = true;
        formControls[controlName] = control;
        this.setState({
            formControls
        })
    }

    onBlurHandler = (controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.focused = false;
        formControls[controlName] = control;
        this.setState({
            formControls
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                    onFocus={() => this.onFocusHandler(controlName)}
                    onBlur={() => this.onBlurHandler(controlName)}
                    focused={control.focused}
                />
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({
            contactIssue: +event.target.value
        })
    }

    render() {
        const select = <Select
            label="Pourquoi nous contacter ?"
            value={this.state.contactIssue}
            onChange={this.selectChangeHandler}
            options={[
                {text: 'Demande de devis', value: 1},
                {text: 'Climate issues', value: 2},
                {text: 'Personal issues', value: 3},
            ]}
        />
        return (
            <div className={classes.Contact}>
                {
                    !this.state.formSent ?
                        <>
                            <h1>Contact</h1>
                            <form onSubmit={this.submitHandler} className={classes.ContactForm}>
                                {this.renderInputs()}
                                {select}
                                <label htmlFor="questionTextarea">Votre message :</label>
                                <textarea id="questionTextarea" placeholder="Parlez-nous de votre projet..." />
                                <div className={classes.Contact__Info}>
                                    <ContactInfo />
                                    <Button
                                        type="success"
                                        onClick={this.sendFormHandler}
                                        disabled={!this.state.isFormValid}
                                    >
                                        Envoyer
                                    </Button>
                                </div>
                            </form>
                        </>

                        : <ContactFormSent/>

                }
            </div>
        )
    }
}

export default Contact
