import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';
import ContactList from './ContactList';
import SearchField from './SearchField';

class App extends Component {
  // initial state
  state = {
    contacts: contacts.slice(0, 5),
    query: ''
  };

  setQuery = queryParam => {
    this.setState({
      query: queryParam
    })
  }

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== contactId;
      })
    });
  };

  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    // checking if in this.state.contacts we already have the random contact
    if (this.state.contacts.find(contact => contact.id === random.id)) {
      // checking if we have not yet added all the contacts
      if (this.state.contacts.length < contacts.length) {
        // try again with another random contact
        this.addContact();
      }
      // don't do anything 
      return;
    }

    this.setState((state) => ({
      contacts: [random, ...state.contacts]
    }));
  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    const sorted = this.state.contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: sorted
    });
  };

  render() {
    return (
      <div className='App'>

        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <SearchField
          query={this.state.query}
          setQueryProp={this.setQuery}
        />

        <ContactList
          contacts={this.state.contacts}
          deleteContactProp={this.deleteContact}
          query={this.state.query}
        />
      </div>
    );
  }
}

export default App;