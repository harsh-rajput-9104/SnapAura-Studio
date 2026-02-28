import Hero from '@/components/Hero';
import MovingBackground from '@/components/MovingBackground';
import PortfolioGrid from '@/components/PortfolioGrid';
import ServiceGrid from '@/components/ServiceGrid';
import RevealObserver from '@/components/RevealObserver';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'SnapAura Studio — Premium Photography',
    description:
        'Cinematic wedding, portrait, and event photography. Capturing stories in light and shadow. Based in India.',
    openGraph: {
        title: 'SnapAura Studio — Premium Photography',
        description: 'Cinematic wedding, portrait, and event photography.',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'SnapAura Studio',
            },
        ],
    },
};

const testimonials = [
    {
        quote:
            "SnapAura didn't just capture our wedding — they told a story we'll treasure forever.",
        author: 'Priya & Rohan Mehta',
        event: 'Wedding, Mumbai',
    },
    {
        quote: 'The pre-wedding shoot was a dream. Every image felt like a scene from a film.',
        author: 'Ananya Kapoor',
        event: 'Pre-Wedding, Goa',
    },
    {
        quote:
            'Absolutely professional, incredibly artistic. Our corporate event never looked so elegant.',
        author: 'Dev Malhotra',
        event: 'Corporate Event, Delhi',
    },
];

const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    "Hello! I'd like to book a session with SnapAura Studio."
)}`;

export default function HomePage() {
    return (
        <>
            {/* ── Hero ── */}
            <Hero />

            {/* ── About Preview ── */}
            <section
                style={{
                    padding: '8rem 0',
                    position: 'relative',
                    background: 'var(--bg-secondary)',
                }}
            >
                <MovingBackground>
                    <div className="section-container">
                        <div
                            className="about-grid"
                        >
                            {/* Image block */}
                            <div
                                style={{ position: 'relative', height: '560px' }}
                                className="reveal"
                            >
                                {/* Main image */}
                                <div
                                    className="img-cinematic"
                                    style={{ height: '100%', width: '85%' }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=987&auto=format&fit=crop"
                                        alt="Photographer with camera at golden hour"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        quality={80}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="img-overlay" />
                                </div>
                                {/* Accent inset image */}
                                <div
                                    className="img-cinematic"
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        right: '0',
                                        width: '50%',
                                        height: '50%',
                                        border: '4px solid var(--bg-secondary)',
                                    }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=764&auto=format&fit=crop"
                                        alt="Camera detail close-up"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        quality={80}
                                        sizes="25vw"
                                    />
                                    <div className="img-overlay" />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                                <span className="section-label">About SnapAura</span>
                                <h2 className="section-title">
                                    Art lives in the <em>in-between</em> moments
                                </h2>
                                <div className="copper-rule" />
                                <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                    SnapAura Studio is a boutique photography practice that believes
                                    every great image begins before the shutter clicks — in the light,
                                    in the feeling, in the story waiting to be told.
                                </p>
                                <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
                                    We bring a filmmaker&apos;s eye to every session: cinematic framing,
                                    atmospheric light, and a quiet presence that lets real moments
                                    unfold naturally.
                                </p>
                                <Link href="/about" className="btn-ghost">
                                    <span>Our Story</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </MovingBackground>
            </section>

            {/* ── Services Preview ── */}
            <section
                style={{
                    padding: '8rem 0',
                    background: 'var(--bg-primary)',
                    position: 'relative',
                }}
            >
                <div className="section-container">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: '4rem',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                        }}
                    >
                        <div className="reveal">
                            <span className="section-label">Our Services</span>
                            <h2 className="section-title">
                                Crafted for every <em>chapter</em>
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="btn-ghost reveal"
                            style={{ transitionDelay: '0.1s' }}
                        >
                            <span>All Services</span>
                        </Link>
                    </div>

                    {/* Client Component — has hover interactivity */}
                    <div className="reveal">
                        <ServiceGrid />
                    </div>
                </div>
            </section>

            {/* ── Featured Portfolio ── */}
            <section
                style={{
                    padding: '8rem 0',
                    background: 'var(--bg-secondary)',
                }}
            >
                <div className="section-container">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginBottom: '3.5rem',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                        }}
                    >
                        <div className="reveal">
                            <span className="section-label">Portfolio</span>
                            <h2 className="section-title">
                                Selected <em>works</em>
                            </h2>
                        </div>
                        <Link href="/portfolio" className="btn-ghost reveal">
                            <span>View All</span>
                        </Link>
                    </div>
                    <div className="reveal">
                        <PortfolioGrid limit={6} />
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section
                style={{
                    padding: '8rem 0',
                    background: 'var(--bg-primary)',
                    position: 'relative',
                }}
            >
                <MovingBackground>
                    <div className="section-container">
                        <div
                            className="reveal"
                            style={{ textAlign: 'center', marginBottom: '5rem' }}
                        >
                            <span className="section-label">Testimonials</span>
                            <h2 className="section-title">
                                Voices of <em>trust</em>
                            </h2>
                        </div>

                        <div
                            className="testimonials-grid"
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={t.author}
                                    className="reveal"
                                    style={{ transitionDelay: `${i * 0.12}s` }}
                                >
                                    <div
                                        style={{
                                            padding: '3rem 2.5rem',
                                            border: '1px solid var(--border-subtle)',
                                            background: 'var(--bg-card)',
                                            height: '100%',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1.5rem',
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '5rem',
                                                color: 'var(--accent)',
                                                opacity: 0.08,
                                                lineHeight: 1,
                                                userSelect: 'none',
                                            }}
                                            aria-hidden="true"
                                        >
                                            &ldquo;
                                        </span>
                                        <p
                                            className="testimonial-quote"
                                            style={{ marginBottom: '2rem' }}
                                        >
                                            &ldquo;{t.quote}&rdquo;
                                        </p>
                                        <div className="copper-rule" />
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.8rem',
                                                color: 'var(--text-primary)',
                                                fontWeight: 400,
                                                letterSpacing: '0.05em',
                                                marginBottom: '0.25rem',
                                            }}
                                        >
                                            {t.author}
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.7rem',
                                                color: 'var(--text-faint)',
                                                fontWeight: 300,
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {t.event}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MovingBackground>
            </section>

            {/* ── Final CTA Banner ── */}
            <section
                style={{
                    position: 'relative',
                    padding: '10rem 0',
                    overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
                        alt="Beautiful wedding moment"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                        quality={75}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(11,11,15,0.82)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'radial-gradient(ellipse at center, rgba(184,115,51,0.12) 0%, transparent 70%)',
                        }}
                    />
                </div>

                <div
                    className="section-container"
                    style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
                >
                    <div className="reveal">
                        <span className="section-label">Begin Your Story</span>
                        <h2
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                                fontWeight: 400,
                                lineHeight: 1.05,
                                color: 'var(--text-primary)',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Your most beautiful{' '}
                            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                                moments
                            </em>
                            <br />
                            deserve to be preserved.
                        </h2>
                        <p
                            style={{
                                fontSize: '1rem',
                                color: 'var(--text-muted)',
                                fontWeight: 300,
                                maxWidth: '500px',
                                margin: '0 auto 3rem',
                                lineHeight: 1.8,
                            }}
                        >
                            Let&apos;s connect and craft something extraordinary together.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '1.25rem',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <span>Book via WhatsApp</span>
                            </a>
                            <Link href="/contact" className="btn-ghost">
                                <span>Get in Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intersection Observer for .reveal elements */}
            <RevealObserver />
        </>
    );
}
