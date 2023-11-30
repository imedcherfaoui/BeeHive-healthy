import React from 'react';
import '../Contact.css';

function ContactForm() {
  return (
    <div className="container mx-auto md:px-6">
      <section className="mb-12">
        <div className="flex justify-center mb-10">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="text-6xl contact-title text-sky-950">Contact us</h2>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="w-full md:px-3 lg:px-6">
            <form action="mailto:imadeddine300@hotmail.com" method="post" encType="text/plain">
              <div className="mb-4">
                <input
                  type="text"
                  className="block w-full rounded border bg-transparent py-2 px-3 leading-5 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 focus:border-primary"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full rounded border bg-transparent py-2 px-3 leading-5 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 focus:border-primary"
                  placeholder="Email address"
                  name="email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="block w-full rounded border bg-transparent py-2 px-3 leading-5 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                  rows="3"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded send-button px-6 py-2 text-xs font-medium uppercase leading-normal text-white hover:bg-primary-600 focus:outline-none focus:bg-primary-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
