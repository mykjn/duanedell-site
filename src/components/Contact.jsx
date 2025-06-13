import React from 'react';

export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-10 pt-20 lg:px-0 lg:pt-24 max-w-sreen">
        <section className="z-10 mx-auto flex justify-center">
            <div className="my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white">
                    <div>
                        <h1 className="text-3xl font-bold uppercase">Get in touch</h1>
                        <p className="text-sm  text-gray-400 mt-3">
                            For booking inquiries, collaborations, or any other questions, feel free to reach out. We look forward to hearing from you!
                        </p>
                        <div className="mt-12">
                            <h2 className="text-lg font-bold">Contact us</h2>
                            <ul className="mt-3">
                                <li className="flex items-center mb-3">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <a 
                                    target="blank"
                                    className="text-sm ml-3"
                                    href="mailto:"
                                    >
                                        <small className="block">Mail</small>
                                        <strong>duanedellfuderanan.music@gmail.com</strong>
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <a 
                                    target="blank"
                                    className="text-sm ml-3"
                                    href="mailto:"
                                    >
                                        <small className="block">Phone</small>
                                        <strong>0950 558 6604</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="ml-auo space-y-4">
                        <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-md py-2.5 px-4 border text-sm"
                        />
                        <input
                        type="email"
                        placeholder="youremail@example.com"
                        className="w-full rounded-md py-2.5 px-4 border text-sm"
                        />
                        <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="w-full rounded-md py-2.5 px-4 border text-sm"
                        ></textarea>
                        <button
                        type="submit"
                        className="text-white bg-black hover:bg-white font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                        >Send</button>
                    </form>
                </div>
            </div>
            {/* <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
                <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Your name"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="you@example.com"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Write your message..."
                    required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                >
                    Send Message
                </button>
                </form>
            </div> */}
        </section>
    </main>
  );
}
