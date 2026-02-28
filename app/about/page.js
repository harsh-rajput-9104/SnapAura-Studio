import Image from 'next/image';
import Link from 'next/link';
import MovingBackground from '@/components/MovingBackground';
import RevealObserver from '@/components/RevealObserver';

export const metadata = {
    title: 'About — SnapAura Studio',
    description:
        'The story behind SnapAura Studio — our philosophy, creative process, and passion for cinematic photography.',
    openGraph: {
        title: 'About — SnapAura Studio',
        description: 'Philosophy, process, and passion behind SnapAura photography studio.',
    },
};

const equipment = [
    { name: 'Sony Alpha Series', role: 'Primary cameras' },
    { name: 'Professional Primes', role: '35mm, 50mm, 85mm, 135mm' },
    { name: 'Cinematic Lenses', role: 'Zeiss, Sigma Art series' },
    { name: 'Off-Camera Flash', role: 'Profoto, Godox' },
    { name: 'Drone', role: 'DJI Mavic 3 Pro' },
    { name: 'Video', role: '4K cinema spec capable' },
];

const stats = [
    { num: '10+', label: 'Years of Practice' },
    { num: '800+', label: 'Sessions Completed' },
    { num: '1200+', label: 'Happy Clients' },
    { num: '15+', label: 'Awards & Recognition' },
];

const process = [
    {
        step: '01',
        title: 'Consultation',
        desc: 'We begin with a conversation — understanding your vision, your people, your story.',
    },
    {
        step: '02',
        title: 'Creative Planning',
        desc: 'Locations, lighting concepts, mood references — every detail considered with care.',
    },
    {
        step: '03',
        title: 'The Session',
        desc: 'We work with quiet confidence, creating an atmosphere where authentic moments emerge.',
    },
    {
        step: '04',
        title: 'Cinematic Edit',
        desc: 'Each image is hand-edited — color graded for mood, retouched with restraint.',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* ── Page Header ── */}
            <section className="page-header" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        background:
                            'radial-gradient(ellipse at top right, rgba(184,115,51,0.06) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />
                <div className="section-container" style={{ position: 'relative' }}>
                    <span className="section-label anim-fade-up" style={{ opacity: 0 }}>
                        About Us
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
                        We photograph{' '}
                        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                            feeling
                        </em>
                        ,<br />
                        not just moments.
                    </h1>
                </div>
            </section>

            {/* ── Philosophy ── */}
            <section
                style={{
                    padding: '7rem 0',
                    background: 'var(--bg-secondary)',
                }}
            >
                <MovingBackground>
                    <div className="section-container">
                        <div className="phil-grid">
                            <div className="reveal">
                                <span className="section-label">Philosophy</span>
                                <h2 className="section-title">
                                    Light as a <em>language</em>
                                </h2>
                                <div className="copper-rule" />
                                <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                                    We believe photography at its highest is an act of empathy —
                                    the ability to see a person&apos;s truth and frame it with honesty
                                    and beauty. Every assignment we take carries this intention.
                                </p>
                                <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                                    We draw from cinematic traditions — the quality of Vilmos
                                    Zsigmond&apos;s golden-hour light, the quiet intimacy of Sven
                                    Nykvist. Photography, to us, is a visual language that should
                                    move people.
                                </p>
                                <p className="section-subtitle">
                                    We work slowly, deliberately, and with full care for the
                                    people in front of our lens.
                                </p>
                            </div>

                            <div
                                className="img-cinematic reveal"
                                style={{ height: '500px', transitionDelay: '0.15s' }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=987&auto=format&fit=crop"
                                    alt="Photographer at work in golden hour"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                />
                                <div className="img-overlay" />
                            </div>
                        </div>
                    </div>
                </MovingBackground>
            </section>

            {/* ── Journey ── */}
            <section style={{ padding: '7rem 0', background: 'var(--bg-primary)' }}>
                <div className="section-container">
                    <div
                        className="journey-grid"
                    >
                        {/* Images */}
                        <div
                            style={{ position: 'relative' }}
                            className="reveal journey-img-block"
                        >
                            <div
                                className="img-cinematic"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '70%',
                                    height: '75%',
                                }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1005&auto=format&fit=crop"
                                    alt="Behind the scenes photography"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    quality={75}
                                    sizes="35vw"
                                />
                                <div className="img-overlay" />
                            </div>
                            <div
                                className="img-cinematic"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '65%',
                                    height: '60%',
                                    border: '5px solid var(--bg-primary)',
                                }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1074&auto=format&fit=crop"
                                    alt="Photography studio setup"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    quality={75}
                                    sizes="30vw"
                                />
                                <div className="img-overlay" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                            <span className="section-label">The Journey</span>
                            <h2 className="section-title">
                                A decade of <em>dedication</em>
                            </h2>
                            <div className="copper-rule" />

                            <div className="stats-grid">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '2.5rem',
                                                color: 'var(--accent)',
                                                fontWeight: 400,
                                                lineHeight: 1,
                                                marginBottom: '0.25rem',
                                            }}
                                        >
                                            {stat.num}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--text-faint)',
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                                Founded in 2014, SnapAura Studio began as a single
                                photographer&apos;s obsession with honest portraiture. Over a
                                decade, it has grown into a full-service creative studio —
                                while retaining that original commitment to authenticity.
                            </p>
                            <Link href="/portfolio" className="btn-primary">
                                <span>View Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Creative Process ── */}
            <section
                style={{ padding: '7rem 0', background: 'var(--bg-secondary)' }}
            >
                <div className="section-container">
                    <div className="reveal" style={{ marginBottom: '4rem' }}>
                        <span className="section-label">Process</span>
                        <h2 className="section-title">
                            How we <em>work</em>
                        </h2>
                    </div>

                    <div
                        className="process-grid"
                    >
                        {process.map((p, i) => (
                            <div
                                key={p.step}
                                className="reveal"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div
                                    style={{
                                        padding: '3rem 2rem',
                                        background: 'var(--bg-card)',
                                        borderRight:
                                            i < 3 ? '1px solid var(--border-subtle)' : 'none',
                                        height: '100%',
                                    }}
                                >
                                    <span
                                        style={{
                                            display: 'block',
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '3rem',
                                            color: 'var(--accent)',
                                            opacity: 0.25,
                                            lineHeight: 1,
                                            marginBottom: '1.5rem',
                                        }}
                                    >
                                        {p.step}
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '1.4rem',
                                            fontWeight: 400,
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.75rem',
                                        }}
                                    >
                                        {p.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: '0.82rem',
                                            color: 'var(--text-muted)',
                                            fontWeight: 300,
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Equipment ── */}
            <section style={{ padding: '7rem 0', background: 'var(--bg-primary)' }}>
                <div className="section-container">
                    <div
                        className="equip-grid"
                    >
                        <div className="reveal">
                            <span className="section-label">Equipment</span>
                            <h2 className="section-title">
                                Tools worthy of the <em>craft</em>
                            </h2>
                            <div className="copper-rule" />
                            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
                                We use professional-grade equipment — not because gear makes a
                                photographer, but because our clients deserve technical
                                excellence alongside artistic ambition.
                            </p>
                            <div className="equip-list-grid">
                                {equipment.map((eq) => (
                                    <div
                                        key={eq.name}
                                        style={{
                                            paddingLeft: '1.25rem',
                                            borderLeft: '1px solid var(--border-accent)',
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                color: 'var(--text-primary)',
                                                marginBottom: '0.2rem',
                                            }}
                                        >
                                            {eq.name}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '0.72rem',
                                                color: 'var(--text-faint)',
                                                fontWeight: 300,
                                                letterSpacing: '0.06em',
                                            }}
                                        >
                                            {eq.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="img-cinematic reveal"
                            style={{ height: '520px', transitionDelay: '0.15s' }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=987&auto=format&fit=crop"
                                alt="Professional camera equipment"
                                fill
                                style={{ objectFit: 'cover' }}
                                quality={80}
                                sizes="(max-width: 768px) 100vw, 45vw"
                            />
                            <div className="img-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            <RevealObserver />
        </>
    );
}
