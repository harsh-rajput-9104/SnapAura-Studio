import ServiceCard from '@/components/ServiceCard';
import MovingBackground from '@/components/MovingBackground';
import CustomPackageList from '@/components/CustomPackageList';
import RevealObserver from '@/components/RevealObserver';
import Link from 'next/link';

export const metadata = {
    title: 'Services — SnapAura Studio',
    description:
        'Premium photography services: wedding, pre-wedding, events, and portrait sessions. Custom packages tailored to your story.',
    openGraph: {
        title: 'Services — SnapAura Studio',
        description: 'Premium photography services crafted for every chapter.',
    },
};

const services = [
    {
        number: '01',
        title: 'Wedding Photography',
        description:
            'Full-day cinematic coverage of your wedding day — from pre-ceremony preparations through the last dance. We document genuine emotion with a documentary-editorial approach.',
        features: [
            'Full-day coverage (up to 12 hours)',
            '2 professional photographers',
            'Cinematic color grading',
            'Online gallery within 4 weeks',
            'Custom printed album (optional)',
            'Drone aerial coverage',
        ],
        price: '₹85,000',
    },
    {
        number: '02',
        title: 'Pre-Wedding Shoot',
        description:
            'A creative portrait session for couples — set in outdoor locations or conceptual environments. Golden-hour lighting, intentional direction, and a relaxed atmosphere.',
        features: [
            'Outdoor / conceptual location',
            '4–6 hour session',
            '25–40 fully edited images',
            'Creative concept planning',
            'Wardrobe guidance',
            '2 outfit changes',
        ],
        price: '₹28,000',
    },
    {
        number: '03',
        title: 'Event Coverage',
        description:
            'Professional photography for corporate events, cultural programs, product launches, birthday parties, and private gatherings — documented with editorial precision.',
        features: [
            'Corporate & cultural events',
            'Birthday & private gatherings',
            'Product launches',
            'Coverage up to 8 hours',
            'Delivered within 1 week',
            'Press-ready resolution',
        ],
        price: '₹20,000',
    },
    {
        number: '04',
        title: 'Portrait Sessions',
        description:
            'Whether a personal lifestyle portrait, a professional headshot, or a creative studio session — we create images that feel true to who you are. Every frame is composed with intention — balancing light, texture, and expression.',
        features: [
            'Lifestyle & creative portraits',
            'Professional headshots',
            'Studio portraits',
            '2–3 hour session',
            '10–15 hand-edited images',
            'Multiple looks / wardrobe',
        ],
        price: '₹12,000',
    },
    {
        number: '05',
        title: 'Drone Aerial Shoot',
        description:
            'Sweeping aerial perspectives that reframe your moment from above — whether a grand venue reveal, scenic landscape, or dramatic property showcase. Cinematic altitude, uncompromising clarity.',
        features: [
            'Licensed drone operator',
            'RAW footage & edited stills',
            'Up to 90 minutes of flight time',
            'Suitable for weddings, estates & events',
            '4K resolution delivery',
            'Weather-contingency rescheduling',
        ],
        price: '₹18,000',
    },
    {
        number: '06',
        title: 'Engagement Ceremony',
        description:
            'Your engagement is a story in itself — one that deserves its own visual chapter. We photograph the intimacy of the moment, the detail of the setting, and the warmth of the people who surround you.',
        features: [
            'Half-day coverage (up to 6 hours)',
            '1 primary photographer',
            'Candid & posed documentation',
            'Decor and detail close-ups',
            'Online gallery within 2 weeks',
            '80–120 fully edited images',
        ],
        price: '₹32,000',
    },
    {
        number: '07',
        title: 'Corporate Photography',
        description:
            'Refined professional imagery for brands, teams, and institutions — executed with the same precision we bring to personal work. Because how your company appears in print and on screen matters.',
        features: [
            'Executive & team headshots',
            'Office & workspace documentation',
            'Brand lifestyle photography',
            'Conference & panel coverage',
            'Delivered within 5 business days',
            'LinkedIn & press-optimised exports',
        ],
        price: '₹22,000',
    },
    {
        number: '08',
        title: 'Maternity & Lifestyle',
        description:
            'A quiet, unhurried session that honours the weight and beauty of this chapter. Soft natural light, considered composition, and an atmosphere that lets you simply be present.',
        features: [
            'Indoor or outdoor natural-light setting',
            '2–3 hour session',
            '20–30 fully edited images',
            'Partner & family included',
            'Wardrobe & styling guidance',
            'Printed keepsake (optional add-on)',
        ],
        price: '₹15,000',
    },
];


const waCustomUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    "Hello! I'd like to discuss a custom photography package."
)}`;

export default function ServicesPage() {
    return (
        <>
            {/* ── Page Header ── */}
            <section className="page-header" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '600px',
                        height: '100%',
                        background:
                            'radial-gradient(ellipse at top right, rgba(184,115,51,0.07) 0%, transparent 60%)',
                        pointerEvents: 'none',
                    }}
                />
                <div className="section-container" style={{ position: 'relative' }}>
                    <span
                        className="section-label anim-fade-up"
                        style={{ opacity: 0 }}
                    >
                        Services
                    </span>
                    <h1
                        className="anim-fade-up delay-1"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(3rem, 7vw, 6rem)',
                            fontWeight: 400,
                            lineHeight: 1.05,
                            color: 'var(--text-primary)',
                            maxWidth: '700px',
                            opacity: 0,
                        }}
                    >
                        Crafted for every{' '}
                        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                            chapter
                        </em>{' '}
                        of your story
                    </h1>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section
                style={{
                    padding: '4rem 0 8rem',
                    background: 'var(--bg-primary)',
                    position: 'relative',
                }}
            >
                <MovingBackground>
                    <div className="section-container">
                        <div className="services-cards-grid">
                            {services.map((s, i) => (
                                <div
                                    key={s.number}
                                    className="reveal"
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <ServiceCard {...s} />
                                </div>
                            ))}
                        </div>
                    </div>
                </MovingBackground>
            </section>

            {/* ── Custom Packages ── */}
            <section
                style={{
                    padding: '6rem 0',
                    background: 'var(--bg-secondary)',
                    borderTop: '1px solid var(--border-subtle)',
                }}
            >
                <div className="section-container">
                    <div className="reveal custom-pkg-grid">
                        <div>
                            <span className="section-label">Custom Packages</span>
                            <h2 className="section-title">
                                Don&apos;t see what you <em>need?</em>
                            </h2>
                            <div className="copper-rule" />
                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                Every love story, every event, every person is different.
                                We&apos;re happy to craft a completely custom package tailored to
                                your specific vision, location, and requirements.
                            </p>
                            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                                Reach out and let&apos;s have a conversation about what you&apos;re
                                envisioning.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href={waCustomUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <span>Chat on WhatsApp</span>
                                </a>
                                <Link href="/contact" className="btn-ghost">
                                    <span>Contact Form</span>
                                </Link>
                            </div>
                        </div>

                        {/* Client Component — hover interactive */}
                        <CustomPackageList />
                    </div>
                </div>
            </section>

            <RevealObserver />
        </>
    );
}
