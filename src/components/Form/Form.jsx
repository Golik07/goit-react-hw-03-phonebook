import React, {Component} from "react";
import {Form,Label,Button,Input,Section} from "./Form.styled"
import { nanoid } from 'nanoid';
import PropTypes from "prop-types"


const INITIAL_STATE = {
    name:'',
    number:'',
    };

class ContactForm extends Component {
    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
      };

    state = INITIAL_STATE;

    idName= nanoid();
    idNumber = nanoid();

    handleChange = ({target:{value,name}}) => {
        this.setState({[name]:value});
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.onAddContact(this.state.name,this.state.number)
        this.setState(INITIAL_STATE)
    }


    render(){

        return(
            <Form onSubmit={this.handleSubmit}>
                <Section>
                <Label htmlFor ={this.idName}>Name</Label>
                <Input 
                    type="text"
                    name="name"
                    id={this.idName}
                    value = {this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    />
                <Label htmlFor={this.idNumber}>Number</Label> 
                <Input 
                    type="tel"
                    id={this.idNumber}
                    value={this.state.number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    />
                    
                </Section>

                <Button type="submit"> Add contact </Button>
            </Form>
        )
    }
}




export default ContactForm;