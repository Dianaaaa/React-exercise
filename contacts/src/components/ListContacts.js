import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

// function ListContacts (props) {
//     return (
            
//         <ol className='contact-list'>
//             {props.contacts.map((contact) => (
//                 <li key={contact.id} className='contact-list-item'>
//                 <div className='contact-avatar'
//                     style = {{
//                         backgroundImage: `url(${contact.avatarURL})` 
//                     }}
//                 ></div>
//                 <div className='contact-details'>
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                 </div>
//                 <button
//                     onClick= {() => props.onDeleteContact(contact)}
//                     className='contact-remove'
//                 >Remove</button>
//                 </li>
//             ))}
//         </ol>
//     )
// }


class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired,
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()  // 去除掉空格
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        console.log('Props', this.props)
        const { query } = this.state
        const { contacts, onDeleteContact } = this.props

        const showedContacts = query === ''
        ? contacts
        : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase()) || c.handle.toLowerCase().includes(query.toLowerCase())
        ))

        return (
            <div className='list-contacts'>
                {/* {JSON.stringify(this.state)} */}
                <div className = 'list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='Search for contact'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                    to='/create'
                    className = 'add-contact'
                    >Add contact</Link>
                </div>

                {showedContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {showedContacts.length} of {contacts.length} </span>
                        <button
                            onClick={()=>this.clearQuery()}
                        >show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showedContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar'
                            style = {{
                                backgroundImage: `url(${contact.avatarURL})` 
                            }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'
                            onClick={() => onDeleteContact(contact)}
                        ></button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }    
}

// ListContacts.propTypes = {
//     contacts: propTypes.array.isRequired,
//     onDeleteContact: propTypes.func.isRequired,
// }

export default ListContacts