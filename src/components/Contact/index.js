import {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm(){

    //define the initial form state and set form state function
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    //destructure the form components from form state
    const {name, email, message} = formState;

    //Called whenever there is a change to the input areas
    function handleChange(event){
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);

            if(!isValid)
                setErrorMessage('Your email is invalid.');
            else
                setErrorMessage('');
        }
        else{
            if(!event.target.value.length)
                setErrorMessage(`${event.target.name} is a required field.`);
            else
                setErrorMessage('');
        }

        if (!errorMessage) 
            setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    //Called when the form is submitted
    function handleSubmit(event){
        event.preventDefault();
        //****Back-end team to complete***
        if(name && email && message){
            console.log(formState);
        }
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                { errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;