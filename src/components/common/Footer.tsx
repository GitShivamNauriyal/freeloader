import {
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
    FaFacebookF,
} from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Types
type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

type TouchedFields = {
    name?: boolean;
    email?: boolean;
    subject?: boolean;
    message?: boolean;
};

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name: string): boolean {
    return /^[a-zA-Z\s]{3,}$/.test(name.trim());
}

function validateSubject(subject: string): boolean {
    return subject.trim().length > 2;
}

function validateMessage(message: string): boolean {
    return message.trim().length > 10;
}

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<TouchedFields>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (fieldValues: Partial<FormData> = form): boolean => {
        let temp: FormErrors = {};
        if ("name" in fieldValues)
            temp.name = !validateName(fieldValues.name || "")
                ? "Please enter a valid name (letters only, min 3 chars)."
                : "";
        if ("email" in fieldValues)
            temp.email = !validateEmail(fieldValues.email || "")
                ? "Please enter a valid email address."
                : "";
        if ("subject" in fieldValues)
            temp.subject = !validateSubject(fieldValues.subject || "")
                ? "Subject must be at least 3 characters."
                : "";
        if ("message" in fieldValues)
            temp.message = !validateMessage(fieldValues.message || "")
                ? "Message must be at least 10 characters."
                : "";
        setErrors(temp);
        return Object.values(temp).every((x) => !x);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        validate({ [name]: value });
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTouched({
            ...touched,
            [e.target.name]: true,
        });
        validate({ [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true,
        });
        if (validate()) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setIsOpen(false);
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setTouched({});
                setErrors({});
            }, 1500);
        }
    };

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };
    const modalVariants = {
        hidden: { scale: 0.95, opacity: 0, y: 40 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        exit: { scale: 0.95, opacity: 0, y: 40, transition: { duration: 0.2 } },
    };

    return (
        <footer className="bg-black text-white px-6 md:px-12 lg:px-24 pt-8 pb-16">
            {/* Connect With Us Bar */}
            <div className="bg-neutral-800 p-4 rounded-lg flex justify-between items-center mb-10">
                <h2 className="text-sm md:text-xl font-bold font-[AgrandirWide] uppercase tracking-wide">
                    Connect With Us
                </h2>
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-sm md:text-md text-white bg-[#5e17eb] px-2 md:px-4 py-2 rounded-md font-semibold font-[freeheading] hover:bg-[#5e17ebbb] cursor-pointer transition"
                >
                    Open Form
                </button>
            </div>

            {/* Form Modal with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center min-h-screen px-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={backdropVariants}
                        style={{ background: "rgba(0,0,0,0.7)" }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="relative z-[999] bg-neutral-900 p-6 md:p-10 rounded-xl shadow-xl w-full max-w-2xl mx-auto"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-2xl md:text-4xl font-bold mb-6 text-white text-center font-[AgrandirWide] uppercase">
                                Get In Touch
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 text-neutral-300"
                                noValidate
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-1 font-[freeheading]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        autoComplete="name"
                                        className={`w-full px-4 py-2 rounded-md bg-neutral-800 border ${
                                            errors.name && touched.name
                                                ? "border-red-500"
                                                : "border-gray-600"
                                        } focus:border-violet-400 outline-none`}
                                    />
                                    {errors.name && touched.name && (
                                        <span className="text-xs text-red-400">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-1 font-[freeheading]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        autoComplete="email"
                                        className={`w-full px-4 py-2 rounded-md bg-neutral-800 border ${
                                            errors.email && touched.email
                                                ? "border-red-500"
                                                : "border-gray-600"
                                        } focus:border-violet-400 outline-none`}
                                    />
                                    {errors.email && touched.email && (
                                        <span className="text-xs text-red-400">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block mb-1 font-[freeheading]"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-4 py-2 rounded-md bg-neutral-800 border ${
                                            errors.subject && touched.subject
                                                ? "border-red-500"
                                                : "border-gray-600"
                                        } focus:border-violet-400 outline-none`}
                                    />
                                    {errors.subject && touched.subject && (
                                        <span className="text-xs text-red-400">
                                            {errors.subject}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block mb-1 font-[freeheading]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-4 py-2 rounded-md bg-neutral-800 border ${
                                            errors.message && touched.message
                                                ? "border-red-500"
                                                : "border-gray-600"
                                        } focus:border-violet-400 outline-none resize-none`}
                                    ></textarea>
                                    {errors.message && touched.message && (
                                        <span className="text-xs text-red-400">
                                            {errors.message}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm text-gray-400 hover:underline"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-white text-[#5e17eb] font-bold py-2 px-6 rounded-md hover:bg-white/90 transition"
                                        disabled={submitted}
                                    >
                                        {submitted
                                            ? "Sending..."
                                            : "Send Message"}
                                    </button>
                                </div>
                                {submitted && (
                                    <div className="text-green-400 text-center pt-2">
                                        Message sent! (not really, this is a
                                        demo)
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Footer Content --- */}
            <div className="grid gap-10 md:grid-cols-3">
                {/* Left - Brand */}
                <div>
                    <h3 className="text-xl leading-5 font-bold tracking-widest mb-2 font-[AgrandirHeavy]">
                        FREE <br />
                        LOADER <br />
                        AGENCY
                    </h3>
                    <p className="text-gray-300 text-sm font-[freeheading]">
                        Freeloader Agency is an inclusive workplace. We welcome
                        people of all colors, genders, and beliefs.
                    </p>
                </div>
                {/* Navigation */}
                <nav aria-label="Main Navigation">
                    <h4 className="font-semibold text-lg mb-3 text-white font-[AgrandirWide]">
                        Navigation
                    </h4>
                    <ul className="space-y-2 text-gray-300 font-[freeheading]">
                        <li>
                            <Link
                                to="/experiences"
                                title="Explore our curated brand experiences"
                            >
                                Experiences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/experiencial-gifting"
                                title="Corporate & personal gifting experiences"
                            >
                                Experiencial Gifting
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/influencers"
                                title="Discover our influencer collaborations"
                            >
                                Influencers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                title="Learn more about our team and mission"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                title="Learn more about our team and mission"
                            >
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Get in Touch */}
                <div className="font-[freeheading]">
                    <h4 className="font-semibold text-lg mb-3 text-white font-[AgrandirWide]">
                        Get in Touch
                    </h4>
                    <a
                        href="mailto:hi@freeloader.in"
                        className="text-violet-400 hover:underline block mb-1"
                    >
                        info@freeloader.in
                    </a>
                    <div className="mb-4">+91 9818848485</div>
                    <ul className="mb-4 list-disc ml-4">
                        <li>NEW DELHI</li>
                        <li>MUMBAI</li>
                        <li>BENGALURU</li>
                    </ul>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaYoutube className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaXTwitter className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaFacebookF className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-16 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>Copyright © 2025 Freeloader Inc. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a
                        href="/FICPL%20-%20Culture%20Handbook.pdf"
                        className="hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Culture Handbook
                    </a>
                    <a href="#" className="hover:text-white">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
