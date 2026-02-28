'use client';

import { useState, useRef } from 'react';

const initialState = {
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    message: '',
};

export default function ContactForm() {
    const [form, setForm] = useState(initialState);
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            e.email = 'A valid email is required';
        if (!form.phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(form.phone))
            e.phone = 'A valid phone number is required';
        if (!form.event_type) e.event_type = 'Please select an event type';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setStatus('loading');

        try {
            // EmailJS integration
            const emailjs = await import('@emailjs/browser');
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );
            setStatus('success');
            setForm(initialState);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            style={{ maxWidth: '640px' }}
        >
            {/* Row: Name + Email */}
            <div className="contact-form-row">
                <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Arjun Sharma"
                />
                <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="arjun@email.com"
                />
            </div>

            {/* Row: Phone + Event Type */}
            <div className="contact-form-row">
                <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="+91 98765 43210"
                />
                <div className="form-field">
                    <label htmlFor="event_type">Event Type</label>
                    <select
                        id="event_type"
                        name="event_type"
                        value={form.event_type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select…</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Portrait">Portrait Session</option>
                        <option value="Engagement">Engagement Ceremony</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Birthday / Private Event">Birthday / Private Event</option>
                        <option value="Drone Shoot">Drone Aerial Shoot</option>
                        <option value="Maternity">Maternity &amp; Lifestyle</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="field-line" />
                    {errors.event_type && (
                        <span style={errorStyle}>{errors.event_type}</span>
                    )}
                </div>
            </div>

            {/* Event Date */}
            <FormField
                label="Preferred Date"
                name="event_date"
                type="date"
                value={form.event_date}
                onChange={handleChange}
                error={errors.event_date}
            />

            {/* Message */}
            <div className="form-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision, approximate guest count, location preference..."
                />
                <div className="field-line" />
                {errors.message && <span style={errorStyle}>{errors.message}</span>}
            </div>

            {/* Submit */}
            <div style={{ marginTop: '1rem' }}>
                <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'loading'}
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        opacity: status === 'loading' ? 0.7 : 1,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    }}
                >
                    <span>
                        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
                    </span>
                </button>

                {/* Success */}
                {status === 'success' && (
                    <div
                        style={{
                            marginTop: '1.5rem',
                            padding: '1.25rem 1.5rem',
                            border: '1px solid var(--border-accent)',
                            background: 'var(--accent-dim)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}
                    >
                        <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>✓</span>
                        <div>
                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: 400,
                                    marginBottom: '0.2rem',
                                }}
                            >
                                Message received.
                            </p>
                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.78rem',
                                    color: 'var(--text-muted)',
                                    fontWeight: 300,
                                }}
                            >
                                We'll be in touch within 24 hours.
                            </p>
                        </div>
                    </div>
                )}

                {/* Error */}
                {status === 'error' && (
                    <div
                        style={{
                            marginTop: '1.5rem',
                            padding: '1.25rem 1.5rem',
                            border: '1px solid rgba(200,80,60,0.3)',
                            background: 'rgba(200,80,60,0.06)',
                        }}
                    >
                        <p
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.85rem',
                                color: '#e07060',
                                fontWeight: 300,
                            }}
                        >
                            Something went wrong. Please try again or reach out via WhatsApp.
                        </p>
                    </div>
                )}
            </div>

        </form>
    );
}

const errorStyle = {
    display: 'block',
    marginTop: '0.4rem',
    fontSize: '0.7rem',
    color: '#e07060',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-body)',
};

function FormField({ label, name, type, value, onChange, error, placeholder }) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder || ''}
                autoComplete="off"
            />
            <div className="field-line" />
            {error && <span style={errorStyle}>{error}</span>}
        </div>
    );
}
