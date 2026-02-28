import ContactForm from '@/components/ContactForm';
import MovingBackground from '@/components/MovingBackground';
import ContactInfo from '@/components/ContactInfo';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
    title: 'Contact — SnapAura Studio',
    description:
        'Get in touch with SnapAura Studio to book your photography session or request a custom quote.',
    openGraph: {
        title: 'Contact — SnapAura Studio',
        description: 'Book your premium photography session with SnapAura Studio.',
    },
};

const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    "Hello! I found your website and I'd like to make an enquiry."
)}`;

export default function ContactPage() {
    return (
        <>
            {/* ── Page Header ── */}
            <section className="page-header" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '600px',
                        height: '1px',
                        background:
                            'linear-gradient(to right, transparent, var(--accent-soft), transparent)',
                        opacity: 0.4,
                    }}
                />
                <div className="section-container" style={{ position: 'relative' }}>
                    <span
                        className="section-label anim-fade-up"
                        style={{ opacity: 0 }}
                    >
                        Get In Touch
                    </span>
                    <h1
                        className="anim-fade-up delay-1"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(3rem, 7vw, 6rem)',
                            fontWeight: 400,
                            lineHeight: 1.05,
                            color: 'var(--text-primary)',
                            maxWidth: '680px',
                            opacity: 0,
                        }}
                    >
                        Let&apos;s create something{' '}
                        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                            beautiful
                        </em>{' '}
                        together
                    </h1>
                </div>
            </section>

            {/* ── Contact Section ── */}
            <section
                style={{
                    padding: '4rem 0 8rem',
                    background: 'var(--bg-primary)',
                }}
            >
                <MovingBackground>
                    <div className="section-container">
                        <div className="contact-grid">
                            {/* Left: Info sidebar — Client Component (has hover handlers) */}
                            <ContactInfo waUrl={waUrl} />

                            {/* Right: Form */}
                            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                                <div className="form-card">
                                    <h2
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '2rem',
                                            fontWeight: 400,
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        Send an Enquiry
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: '0.82rem',
                                            color: 'var(--text-muted)',
                                            fontWeight: 300,
                                            marginBottom: '2.5rem',
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        Tell us about your vision and we&apos;ll be in touch promptly.
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </MovingBackground>
            </section>

            <RevealObserver />
        </>
    );
}
