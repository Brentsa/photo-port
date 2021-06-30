import {useState} from 'react';

function ContactForm(){

    //define the initial form state and set form state function
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    //destructure the form components from form state
    const {name, email, message} = formState;

    //Called whenever there is a change to the input areas
    function handleChange(event){
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    //Called when the form is submitted
    function handleSubmit(event){
        event.preventDefault();
        //****Back-end team to complete***
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;