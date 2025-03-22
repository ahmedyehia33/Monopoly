import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
                                                firstName: '',
                                                secondName: '',
                                                email: '',
                                                phone: '',
                                                preferredContact: [],
                                            });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                preferredContact: checked
                    ? [...prev.preferredContact, value]
                    : prev.preferredContact.filter((item) => item !== value)
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };
                                
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Validate at least one checkbox
        if (formData.preferredContact.length === 0) {
            setError('Please select at least one preferred contact method.');
            return;
        }

        const templateParams = {
            from_firstname: formData.firstName,
            from_lastname: formData.secondName,
            from_email: formData.email,
            from_phone: formData.phone,
            contact_method: formData.preferredContact.join(', '),
        };

        emailjs.send('service_e1g0k5g', 'template_0vbi18u', templateParams, 'm5kGU9GWBOwr3ti0X')
            .then(() => {
                setSuccess(true);
                setFormData({
                    firstName: '',
                    secondName: '',
                    email: '',
                    phone: '',
                    preferredContact: [],
                });
            })
            .catch((error) => {
                setError('Something went wrong, please try again later.');
                console.error(error);
            });
    };

    return ( 
        <>
        
            <form 
            onSubmit={handleSubmit}
             className="w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] space-y-8">
                {/* Row 1 - First & Last Name */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label className="block text-base font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your first name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-base font-semibold mb-2">Second Name</label>
                        <input
                            type="text"
                            name="secondName" 
                            value={formData.secondName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your last name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Row 2 - Email */}
                <div>
                    <label className="block text-base font-semibold mb-2">Email Address</label>
                    <input
                    type="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    placeholder="example@email.com"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Row 3 - Phone */}
                <div>
                    <label className="block text-base font-semibold mb-2">Phone Number</label>
                    <input
                    type="tel"
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} required 
                    placeholder="+971 50 123 4567"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Row 4 - Preferred Communication */}
                <div>
                    <label className="block text-base font-semibold mb-3">How would you like to communicate?</label>
                    <div className="flex gap-6 flex-wrap">
                        {['Email', 'WhatsApp', 'Phone Call'].map((method) => (
                            <label key={method} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="preferredContact"
                                    value={method}
                                    checked={formData.preferredContact.includes(method)}
                                    onChange={handleChange}
                                    className="form-checkbox h-6 w-6"
                                />
                                <span>{method}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg animate-fadeIn">
                        Thank you for your time, we will contact you as soon as possible.
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    
                    className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
                >
                    Submit
                </button>
            </form>
            

      
        </>
     );
}
 
export default ContactForm;