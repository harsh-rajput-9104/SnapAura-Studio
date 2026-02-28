'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 48);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 500,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 2.5rem',
                    height: scrolled ? '64px' : '80px',
                    background: scrolled
                        ? 'rgba(11,11,15,0.94)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(244,241,234,0.06)' : 'none',
                    transition: 'height 0.4s cubic-bezier(0.25,0.1,0.25,1), background 0.4s, border-color 0.4s',
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                        <span
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.55rem',
                                fontWeight: 400,
                                color: 'var(--text-primary)',
                                letterSpacing: '0.04em',
                            }}
                        >
                            SnapAura
                        </span>
                        <span
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.58rem',
                                letterSpacing: '0.35em',
                                textTransform: 'uppercase',
                                color: 'var(--accent)',
                                marginTop: '2px',
                            }}
                        >
                            Studio
                        </span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link${pathname === link.href ? ' active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent('Hello! I\'d like to enquire about a photo session.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary desktop-nav"
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.7rem' }}
                >
                    <span>Book Now</span>
                </a>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: '5px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                    }}
                    className="hamburger"
                >
                    <span
                        style={{
                            display: 'block',
                            width: '24px',
                            height: '1px',
                            background: 'var(--text-primary)',
                            transition: 'transform 0.35s, opacity 0.35s',
                            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            width: '24px',
                            height: '1px',
                            background: 'var(--text-primary)',
                            opacity: menuOpen ? 0 : 1,
                            transition: 'opacity 0.35s',
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            width: '24px',
                            height: '1px',
                            background: 'var(--text-primary)',
                            transition: 'transform 0.35s',
                            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                        }}
                    />
                </button>
            </nav>

            {/* Mobile full-screen menu */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 490,
                    background: 'rgba(11,11,15,0.98)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'auto' : 'none',
                    transition: 'opacity 0.45s cubic-bezier(0.25,0.1,0.25,1)',
                }}
            >
                {navLinks.map((link, i) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            fontWeight: 400,
                            color: pathname === link.href ? 'var(--accent)' : 'var(--text-primary)',
                            letterSpacing: '0.04em',
                            opacity: menuOpen ? 1 : 0,
                            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s`,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent('Hello! I\'d like to enquire about a photo session.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                        marginTop: '1rem',
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.5s 0.4s, transform 0.5s 0.4s',
                    }}
                >
                    <span>Book via WhatsApp</span>
                </a>
            </div>
        </>
    );
}
