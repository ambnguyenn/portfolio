import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('There was an error submitting the form', error);
        }
    };

    return (
        <div id="form-container">
      {submitted ? (
        <p>Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div id="name-row">
            <div id="first-name-container">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div id="last-name-container">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div id="email-row">
            <div id="email-container">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div id="message-row">
            <div id="message-container">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div id="submit-button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      )}
    </div>
    );
}

