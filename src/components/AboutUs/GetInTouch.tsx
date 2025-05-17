import { useState } from "react";

const GetInTouch = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Currently not functional");
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-5xl font-[AgrandirWide] font-bold mb-8 text-center uppercase tracking-wide">
                Get In Touch
            </h2>
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
                autoComplete="off"
            >
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-base font-[freeheading] text-neutral-200"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-300 outline-none font-[freepara] text-base text-neutral-300 transition"
                    />
                </div>
                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-base font-[freeheading] text-neutral-200"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-300 outline-none font-[freepara] text-base text-neutral-300 transition"
                    />
                </div>
                {/* Subject/Topic */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-base font-[freeheading] text-neutral-200"
                    >
                        Subject / Topic
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-300 outline-none font-[freepara] text-base text-neutral-300 transition"
                    />
                </div>
                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-base font-[freeheading] text-neutral-200"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:border-gray-300 outline-none font-[freepara] text-base text-neutral-300 transition resize-none"
                    />
                </div>
                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-white hover:bg-white/90 cursor-pointer text-[#5e17eb] font-bold font-[AgrandirWide] text-lg uppercase tracking-wide shadow transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GetInTouch;
