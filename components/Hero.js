'use client';

import Image from 'next/image';
import Link from 'next/link';
import MovingBackground from './MovingBackground';

export default function Hero() {
    const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
        'Hello! I\'d like to book a session with SnapAura Studio.'
    )}`;

    return (
        <section
            className="hero-section"
            style={{
                position: 'relative',
                height: '100svh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'flex-end',
                overflow: 'hidden',
                background: 'var(--bg-primary)',
            }}
        >
            {/* Full-bleed background image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                    alt="SnapAura Studio — Wedding Photography"
                    fill
                    priority
                    quality={90}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        animation: 'slowZoom 20s ease-in-out infinite alternate',
                    }}
                />
                {/* Layered overlays */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(to right, rgba(11,11,15,0.75) 0%, rgba(11,11,15,0.35) 60%, rgba(11,11,15,0.15) 100%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(to top, rgba(11,11,15,0.95) 0%, rgba(11,11,15,0.1) 50%, transparent 100%)',
                    }}
                />
                {/* Vignette */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
                    }}
                />
            </div>

            {/* Animated accent glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(184,115,51,0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 1,
                    animation: 'gradientDrift 12s ease-in-out infinite',
                }}
            />

            {/* Content */}
            <div
                className="section-container hero-content-pad"
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                }}
            >
                <div style={{ maxWidth: '680px' }}>
                    {/* Studio label */}
                    <p
                        className="section-label anim-fade-up"
                        style={{ opacity: 0 }}
                    >
                        SnapAura Studio
                    </p>

                    {/* Main heading */}
                    <h1
                        className="anim-fade-up delay-1 hero-heading"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 400,
                            lineHeight: 1.0,
                            letterSpacing: '0.01em',
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem',
                            opacity: 0,
                            overflowWrap: 'break-word',
                        }}
                    >
                        Capturing{' '}
                        <em
                            style={{
                                fontStyle: 'italic',
                                color: 'var(--accent)',
                            }}
                        >
                            Stories
                        </em>
                        <br />
                        in Light &amp; Shadow
                    </h1>

                    {/* Tagline */}
                    <p
                        className="anim-fade-up delay-2"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 300,
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            marginBottom: '3rem',
                            maxWidth: '440px',
                            opacity: 0,
                        }}
                    >
                        A premium photography studio dedicated to crafting timeless visual
                        narratives — from intimate portraits to grand wedding ceremonies.
                    </p>

                    {/* CTAs */}
                    <div
                        className="anim-fade-up delay-3"
                        style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', opacity: 0 }}
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
                            <span>Request a Quote</span>
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="anim-fade-in delay-5"
                    style={{
                        position: 'absolute',
                        right: '2rem',
                        bottom: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: 0,
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: 'var(--text-faint)',
                            writingMode: 'vertical-lr',
                        }}
                    >
                        Scroll
                    </span>
                    <div
                        style={{
                            width: '1px',
                            height: '48px',
                            background:
                                'linear-gradient(to bottom, var(--accent), transparent)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
