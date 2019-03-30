import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import ListContacts from './components/ListContacts'
import * as ContactsAPI from './apis/ContactsAPI'
import CreateContacts from './components/CreateContact'



class App extends Component {
  state = {
    contacts: []
  }

  removeContact = (contact) => {
    console.log("555")
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c)=>{
        return c.id !== contact.id
      })
    }))
    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact)
    .then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }

  render() {
    return (
      
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
          />
        )}/>
  
        <Route path='/create' render={({history})=>(
          <CreateContacts
          onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}
          />
        )}/>
      </div>
      
    );
  }
}

export default App;
