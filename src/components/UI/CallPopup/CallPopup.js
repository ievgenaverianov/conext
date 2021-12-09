import React, {Component} from "react";
import './CallPopup.scss';
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import Backdrop from "../Backdrop/Backdrop";
import phoneButton from "../../../img/phone-btn.svg";

class CallPopup extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    state = {
        isFormValid: false,
        phoneNumber: {
            value: '',
            type: 'phoneNumber',
            label: 'Votre numéro*',
            errorMessage: 'Enter correct phone number (minimum 10 symbols)',
            valid: false,
            touched: false,
            focused: false,
            validation: {
                required: true,
                minLength: 10
            }
        },
        selects: [
            {
                id: 1,
                label: "Jour",
                value: 1,
                options: []
            },
            {
                id: 2,
                label: "Heure",
                value: 1,
                options: []
            }
        ]
    }

    sendFormHandler = () => {
        this.props.onClose()
        const phoneNumber = this.state.phoneNumber;
        const selects = [...this.state.selects];

        phoneNumber.value = ''
        selects[0].value = 1
        selects[1].value = 1

        this.setState({
            phoneNumber, selects
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
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = event => {

        const control = this.state.phoneNumber;

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(this.state.phoneNumber.value, this.state.phoneNumber.validation);

        let isFormValid = true;
        isFormValid = this.state.phoneNumber.valid && isFormValid

        this.setState({
            phoneNumber:control,
            isFormValid
        })
    }

    onFocusHandler = () => {

        const control = this.state.phoneNumber;

        control.focused = true;
        this.setState({
            phoneNumber: control,
        })
    }

    onBlurHandler = () => {

        const control = this.state.phoneNumber;

        control.focused = false;
        this.setState({
            phoneNumber: control,
        })
    }

    componentDidMount() {

        const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const currentDate = new Date();
        let daysBefore = daysOfWeek.splice(0, currentDate.getDay());
        let nextWeek = daysOfWeek.concat(daysBefore);
        let selectDayOptions = nextWeek.map((day, index) => {
            return {text: day, value: index + 1}
        })

        let selectTimeOptions = [];
        for (let i = 0; i < 12; i++) {
            selectTimeOptions[i] = {text: i + 8 + ':00', value: i + 1}
        }

        const selects = [...this.state.selects];

        selects[0].options = selectDayOptions
        selects[1].options = selectTimeOptions

        this.setState({
            selects
        })
    }


    selectChangeHandler = (event, index) => {

        const selects = [...this.state.selects];
        selects[index].value = +event.target.value

        this.setState({
            selects
        })
    }

    render() {

        let cssClasses = `avy-call-popup`;
        if (!this.props.isOpen) cssClasses += ` close`;

        return (
            <>
                <div className={cssClasses}>
                    <i className="avy-call-popup__icon" style={{backgroundImage: 'url(' + phoneButton + ')'}}/>
                    <h2>Quand souhaitez-vous être contacté ?</h2>
                    <form onSubmit={this.submitHandler} className="avy-call-popup__form">
                        <Input
                            type={this.state.phoneNumber.type}
                            value={this.state.phoneNumber.value}
                            valid={this.state.phoneNumber.valid}
                            touched={this.state.phoneNumber.touched}
                            label={this.state.phoneNumber.label}
                            shouldValidate={!!this.state.phoneNumber.validation}
                            errorMessage={this.state.phoneNumber.errorMessage}
                            onChange={event => this.onChangeHandler(event)}
                            onFocus={() => this.onFocusHandler()}
                            onBlur={() => this.onBlurHandler()}
                            focused={this.state.phoneNumber.focused}
                        />
                        {this.state.selects.map((select, index) => {
                            return (
                                <Select
                                    key={select.id}
                                    label={select.label}
                                    value={select.value}
                                    onChange={(event) => this.selectChangeHandler(event, index)}
                                    options={select.options}
                                />
                            )
                        })}
                        <Button
                            type="success"
                            onClick={this.sendFormHandler}
                            disabled={!this.state.isFormValid}
                        >
                            GO
                        </Button>
                    </form>
                </div>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}

export default CallPopup
