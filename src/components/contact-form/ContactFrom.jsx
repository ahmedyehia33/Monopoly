import React from 'react';

const ContactForm = () => {
    return ( 
        <>
        
            <form className="w-full max-w-xl mx-auto p-8 bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] space-y-8">
                {/* Row 1 - First & Last Name */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <label className="block text-base font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-base font-semibold mb-2">Second Name</label>
                        <input
                            type="text"
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
                    placeholder="example@email.com"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Row 3 - Phone */}
                <div>
                    <label className="block text-base font-semibold mb-2">Phone Number</label>
                    <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Row 4 - Preferred Communication */}
                <div>
                    <label className="block text-base font-semibold mb-3">How would you like to communicate?</label>
                    <div className="flex gap-6 flex-wrap">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-600" />
                        <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-6 w-6 text-green-600" />
                        <span>WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-6 w-6 text-yellow-600" />
                        <span>Phone Call</span>
                    </label>
                    </div>
                </div>

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