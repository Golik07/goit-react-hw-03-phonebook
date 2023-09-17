import React,{Component} from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./Form"
import List from "./List/List";
import FilterContact from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }


  addContacts=(name,number)=> {
    const isAlreadyExist = this.state.contacts.find(contact => contact.name === name);
    if(isAlreadyExist)return alert(`${name} is already in contacts`);;

    const newContact = {
      id:nanoid(),
      name,
      number,
    }

    this.setState((prev) =>({
      contacts:[newContact,...prev.contacts]
    }))

    
  };

  handleDelete =(id)=>{
    this.setState((prev)=>({
      contacts:prev.contacts.filter((el)=> el.id !== id)
    }))
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts = () => {
    const {contacts,filter} = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  
  render(){
    const visibleContacts = this.getVisibleContacts();
    const {filter} = this.state;

    return(
      <div>
        <h1>PhoneBook</h1>
        <ContactForm onAddContact = {this.addContacts}/>
        <h2>Contacts</h2>
        <FilterContact onChange ={this.changeFilter} value={filter}/>
        <List
        contacts={visibleContacts}
        handleDelete={this.handleDelete}
        />
        
    </div>
    )
  }
}

