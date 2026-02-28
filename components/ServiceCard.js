'use client';

export default function ServiceCard({ number, title, description, features, price }) {
    const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
        `Hello! I'm interested in your ${title} service. Could you share more details?`
    )}`;

    return (
        <article
            style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'border-color 0.5s, transform 0.5s',
                cursor: 'default',
                overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Background accent on hover — handled via JS above */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background:
                        'radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Number */}
            <span
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: 'var(--accent-soft)',
                    lineHeight: 1,
                    opacity: 0.5,
                }}
            >
                {number}
            </span>

            {/* Title */}
            <div>
                <h3
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.7rem',
                        fontWeight: 400,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        fontWeight: 300,
                        lineHeight: 1.75,
                    }}
                >
                    {description}
                </p>
            </div>

            {/* Copper rule */}
            <div className="copper-rule" />

            {/* Features */}
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                }}
            >
                {features.map((f, i) => (
                    <li
                        key={i}
                        style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            fontWeight: 300,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: 'var(--accent)',
                                flexShrink: 0,
                            }}
                        />
                        {f}
                    </li>
                ))}
            </ul>

            {/* Price + CTA */}
            <div
                style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '0.5rem',
                }}
            >
                {price && (
                    <div>
                        <span
                            style={{
                                display: 'block',
                                fontSize: '0.6rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--text-faint)',
                            }}
                        >
                            Starting from
                        </span>
                        <span
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                fontWeight: 400,
                                color: 'var(--accent)',
                            }}
                        >
                            {price}
                        </span>
                    </div>
                )}
                <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.65rem 1.4rem', fontSize: '0.7rem' }}
                >
                    <span>Enquire</span>
                </a>
            </div>
        </article>
    );
}
