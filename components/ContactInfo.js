'use client';

export default function ContactInfo({ waUrl }) {
    const linkStyle = {
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        fontWeight: 300,
        transition: 'color 0.3s',
        display: 'block',
    };

    const labelStyle = {
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        color: 'var(--text-faint)',
        textTransform: 'uppercase',
        marginBottom: '0.3rem',
    };

    return (
        <div className="reveal">
            {/* Response Time */}
            <div style={{ marginBottom: '3rem' }}>
                <span className="section-label">Response Time</span>
                <p
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.6rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                    }}
                >
                    Within 24 hours
                </p>
                <p
                    style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        fontWeight: 300,
                        lineHeight: 1.75,
                    }}
                >
                    We respond to all enquiries within one business day. For urgent
                    matters, WhatsApp is faster.
                </p>
            </div>

            <div className="copper-rule" />

            {/* Direct Contact */}
            <div style={{ margin: '3rem 0' }}>
                <span className="section-label">Direct Contact</span>
                <div
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                    {/* WhatsApp */}
                    <div>
                        <p style={labelStyle}>WhatsApp</p>
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...linkStyle, color: 'var(--accent)' }}
                        >
                            +91 99999 99999
                        </a>
                    </div>

                    {/* Email */}
                    <div>
                        <p style={labelStyle}>Email</p>
                        <a
                            href="mailto:hello@snapaurastudio.com"
                            style={linkStyle}
                            onMouseEnter={(e) =>
                                (e.target.style.color = 'var(--text-primary)')
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = 'var(--text-muted)')
                            }
                        >
                            hello@snapaurastudio.com
                        </a>
                    </div>

                    {/* Instagram */}
                    <div>
                        <p style={labelStyle}>Instagram</p>
                        <a
                            href="https://instagram.com/snapaurastudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkStyle}
                            onMouseEnter={(e) =>
                                (e.target.style.color = 'var(--text-primary)')
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color = 'var(--text-muted)')
                            }
                        >
                            @snapaurastudio
                        </a>
                    </div>
                </div>
            </div>

            <div className="copper-rule" />

            {/* Location */}
            <div style={{ marginTop: '3rem' }}>
                <span className="section-label">Location</span>
                <p
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        fontWeight: 300,
                        lineHeight: 1.8,
                    }}
                >
                    Based in Mumbai, India.
                    <br />
                    Available for destination shoots worldwide.
                </p>
            </div>
        </div>
    );
}
