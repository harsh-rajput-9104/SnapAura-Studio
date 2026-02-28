'use client';

const services = [
    {
        title: 'Wedding Photography',
        desc: 'Full-day cinematic coverage that tells your love story in every frame.',
        icon: '◇',
    },
    {
        title: 'Pre-Wedding Shoots',
        desc: 'Outdoor golden-hour sessions with creative concept planning.',
        icon: '◇',
    },
    {
        title: 'Event Coverage',
        desc: 'Corporate, cultural, and private gatherings documented with precision.',
        icon: '◇',
    },
    {
        title: 'Portrait Sessions',
        desc: 'Lifestyle, headshots, and studio portraits that speak volumes.',
        icon: '◇',
    },
];

export default function ServiceGrid() {
    return (
        <div className="services-preview-grid">
            {services.map((s, i) => (
                <ServiceItem key={s.title} s={s} i={i} />
            ))}
        </div>
    );
}

function ServiceItem({ s, i }) {
    return (
        <div
            style={{
                padding: '2.5rem 2rem',
                borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.5s',
                background: 'var(--bg-card)',
                cursor: 'default',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(184,115,51,0.04)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)';
            }}
        >
            <span
                style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    color: 'var(--accent)',
                    marginBottom: '1.25rem',
                    opacity: 0.6,
                }}
            >
                {s.icon}
            </span>
            <h3
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                }}
            >
                {s.title}
            </h3>
            <p
                style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontWeight: 300,
                    lineHeight: 1.8,
                }}
            >
                {s.desc}
            </p>
        </div>
    );
}
