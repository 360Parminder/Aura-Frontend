import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPhoto from '../../assets/images/contact-us.png'

const Contact = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, message);
    alert('Form submitted!');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center dotBackground">
      <div className="grid md:grid-cols-2 w-full max-w-6xl mx-auto gap-5">
        <div className="rounded-md overflow-hidden">
          <img
            src={ContactPhoto}
            width={800}
            height={600}
            alt="Contact Us"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
          />
        </div>
        <div className="bg-background rounded-r-md p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p>Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                  onChange={(e)=>{setFirstName(e.target.value)}}
                    id="first-name"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full capitalize rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    onChange={(e)=>{setLastName(e.target.value)}}
                    id="last-name"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full capitalize rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  onChange={(e)=>{setEmail(e.target.value)}}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  onChange={(e)=>{setMessage(e.target.value)}}
                  id="message"
                  placeholder="Enter your message"
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact