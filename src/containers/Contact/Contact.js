import React, {Component} from "react";
import classes from './Contact.module.scss';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import ContactInfo from "../../components/UI/ContactInfo/ContactInfo";

class Contact extends Component {

    state = {
        isFormValid: false,
        contactIssue:'',
        formControls: {
            password: {
                // value: '',
                type: 'name',
                label: 'Votre nom*',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            email: {
                // value: '',
                type: 'email',
                label: 'Téléphone ou E-mail*',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            }
        }
    }

    sendFormHandler = () => {
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onChangeHandler = () => {

    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    // value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
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
                {text: 'Demande de devis', value: 'Demande de devis'},
                {text: 'Climate issues', value: 'Climate issues'},
                {text: 'Personal isuues', value: 'Personal isuues'},
            ]}
        />
        return (
            <div className={classes.Contact}>
                    <h1>Contact</h1>
                    <form onSubmit={this.submitHandler} className={classes.ContactForm}>
                        {this.renderInputs()}
                        {select}
                        <label htmlFor="questionTextarea">Votre message :</label>
                        <textarea id="questionTextarea" placeholder="Parlez-nous de votre projet..." />
                        <div>
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
            </div>
        )
    }
}

export default Contact
