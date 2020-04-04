import React from 'react'
import Birthdate from '../shared/BirthDate'
import BodyLocation from '../shared/BodyLocation'
import TattooSize from '../shared/TatooSize'
import BirthMonth from '../shared/BirthMonth'
import BirthYear from '../shared/BirthYear'
import SkinTone from '../shared/SkinTone'
import WhenDrop from '../shared/WhenDrop'
import { Form } from 'semantic-ui-react'
import ContactInfo from '../shared/ContactInfo'
import { NavLink } from 'react-router-dom'
import Header from '../shared/Header'
import '../styles/contactForm.css'


class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }

    }

    render() {
        return (
            <>
            <NavLink exact to='/'><Header/></NavLink>
            <Form className='form'>
            <label>Name</label>
                <Form.Group>
                
                    <Form.Field inline={true}>
                        
                        <input placeholder='First' />
                    </Form.Field>
                    <Form.Field inline={true}>
                        
                        <input placeholder='Last' />
                    </Form.Field>
                </Form.Group>
                <Form.Field inline={true} className='form-email'>
                    <label>Email</label>
                    <input placeholder='something@gmail.com' />
                </Form.Field>
                <Form.Field>
                    <label>
                        Skin tone:
                    <SkinTone />
                    </label>
                </Form.Field>
                <Form.Field>
                    <label>
                        Birthdate:
                    <BirthMonth /><Birthdate /><BirthYear />
                    </label>
                </Form.Field>
                <Form.Field>
                    <label>
                        Body Location:
                    <BodyLocation />
                    </label>
                </Form.Field>
                <Form.Field>
                    <label>
                        Tattoo Size:
                    <TattooSize />
                    </label>
                </Form.Field>
                <Form.Field  label ='Describe your tattoo or inspiration' control='textarea' rows={3} width={10}>
                </Form.Field>
                <Form.Field className='when' inline={true}>
                    <label >
                        When do you want your tattoo?
                    <WhenDrop/>
                    </label>
                </Form.Field>
                <b>How would you like to be contacted?</b>
                <Form.Group>
                
                        <ContactInfo/>
                
                <Form.Field inline={true}>
                        <input/>
                </Form.Field>
                </Form.Group>
                <Form.Field width={6}>
                    <label>
                        Password
                    </label>
                    <input type='password'/>
                </Form.Field>
                <Form.Field width={6}>
                    <label>
                        Re-enter Password
                    </label>
                    <input type='password'/>
                </Form.Field>
                <div className='buttons'>
                <NavLink exact to='/thankyou'><div className='login'>Create Account</div></NavLink><NavLink exact to='/thankyou'><div className='guest'>Continue as Guest</div></NavLink>
                </div>
            </Form>
            <Form className='form-mobile'>
                <b>Name</b>
                    <Form.Field inline={false}>
                    <label></label>
                        <input placeholder='First' />
                    </Form.Field>
                    <Form.Field inline={false}>
                        <label></label>
                        <input placeholder='Last' />
                    </Form.Field>
                
                <Form.Field inline={false} className='form-email'>
                    <label>Email</label>
                    <input placeholder='something@gmail.com' />
                </Form.Field>
                <Form.Field>
                    <label>
                        Skin tone:
                    </label>
                </Form.Field>
                <SkinTone />
                <Form.Field>
                    <label>
                        Birthdate:
                    </label>
                </Form.Field>
                <BirthMonth />
                    <Birthdate />
                    <BirthYear />
                <Form.Field>
                    <label>
                        Body Location:  
                    </label>
                </Form.Field>
                <BodyLocation />
                <Form.Field>
                    <label>
                        Tattoo Size:
                    </label>
                </Form.Field>
                <TattooSize />
                <Form.Field  label ='Describe your tattoo or inspiration' control='textarea' rows={5} width={17}>
                </Form.Field>
                <Form.Field className='when' inline={true}>
                    <label >
                        When do you want your tattoo?
                    </label>
                </Form.Field>
                <WhenDrop/>
                <b>How would you like to be contacted?</b>
                
                        <ContactInfo/>
                
                <Form.Field inline={false}>
                        <input/>
                </Form.Field>
                <Form.Field>
                    <label>
                        Password
                    </label>
                    <input type='password'/>
                </Form.Field>
                <Form.Field >
                    <label>
                        Re-enter Password
                    </label>
                    <input type='password'/>
                </Form.Field>
                <div className='buttons'>
                <NavLink exact to='/thankyou'><div className='login'>Create Account</div></NavLink><NavLink exact to='/thankyou'><div className='guest'>Continue as Guest</div></NavLink>
                </div>
            </Form>
            </>
        )
    }
}
export default ContactForm