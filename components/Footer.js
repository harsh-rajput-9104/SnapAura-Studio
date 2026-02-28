'use client';

import Link from 'next/link';

const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-subtle)',
                padding: '5rem 0 2.5rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle background glow */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, var(--accent-soft), transparent)',
                    opacity: 0.5,
                }}
            />

            <div className="section-container">
                {/* Top row */}
                <div className="footer-top-grid">
                    {/* Left: Brand */}
                    <div>
                        <div
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '2rem',
                                fontWeight: 400,
                                color: 'var(--text-primary)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.5rem',
                            }}
                        >
                            SnapAura Studio
                        </div>
                        <p
                            style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-faint)',
                                fontWeight: 300,
                                maxWidth: '280px',
                                lineHeight: 1.8,
                            }}
                        >
                            Capturing stories in light and shadow — one frame at a time.
                        </p>
                    </div>

                    {/* Center: Decorative rule */}
                    <div className="footer-divider">
                        <span
                            style={{
                                display: 'block',
                                width: '1px',
                                height: '48px',
                                background: 'var(--border-accent)',
                            }}
                        />
                        <span
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                display: 'block',
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '1px',
                                height: '48px',
                                background: 'var(--border-accent)',
                            }}
                        />
                    </div>

                    {/* Right: Links + Contact */}
                    <div className="footer-links-wrap">
                        <div>
                            <p
                                style={{
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: 'var(--accent)',
                                    marginBottom: '1rem',
                                }}
                            >
                                Navigate
                            </p>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {footerLinks.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.8rem',
                                            fontWeight: 300,
                                            color: 'var(--text-muted)',
                                            letterSpacing: '0.05em',
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                                        onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <p
                                style={{
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    color: 'var(--accent)',
                                    marginBottom: '1rem',
                                }}
                            >
                                Connect
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8rem',
                                        fontWeight: 300,
                                        color: 'var(--text-muted)',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                                >
                                    Instagram
                                </a>
                                <a
                                    href={`https://wa.me/919999999999`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8rem',
                                        fontWeight: 300,
                                        color: 'var(--text-muted)',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:hello@snapaurastudio.com"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8rem',
                                        fontWeight: 300,
                                        color: 'var(--text-muted)',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                                >
                                    Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom-bar">
                    <p
                        style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-faint)',
                            fontWeight: 300,
                            letterSpacing: '0.08em',
                        }}
                    >
                        © {year} SnapAura Studio. All rights reserved.
                    </p>
                    <p
                        style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-faint)',
                            fontWeight: 300,
                            letterSpacing: '0.05em',
                        }}
                    >
                        Crafted with intention.
                    </p>
                </div>
            </div>
        </footer>
    );
}
