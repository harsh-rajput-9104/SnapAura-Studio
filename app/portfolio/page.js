import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata = {
    title: 'Portfolio — SnapAura Studio',
    description:
        'Browse our curated portfolio of weddings, pre-wedding sessions, portraits, events, and studio photography.',
    openGraph: {
        title: 'Portfolio — SnapAura Studio',
        description: 'Curated portfolio of cinematic photography.',
    },
};

export default function PortfolioPage() {
    return (
        <>
            {/* ── Page Header ── */}
            <section
                style={{
                    paddingTop: '13rem',
                    paddingBottom: '5rem',
                    background: 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '400px',
                        background:
                            'radial-gradient(ellipse at top, rgba(184,115,51,0.07) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }}
                />
                <div className="section-container" style={{ position: 'relative' }}>
                    <span
                        className="section-label anim-fade-up"
                        style={{ opacity: 0 }}
                    >
                        Our Work
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
                        A curated collection of{' '}
                        <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                            visual stories
                        </em>
                    </h1>
                    <p
                        className="anim-fade-up delay-2"
                        style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-muted)',
                            fontWeight: 300,
                            maxWidth: '520px',
                            lineHeight: 1.8,
                            marginTop: '1.5rem',
                            opacity: 0,
                        }}
                    >
                        Each image is a moment preserved — crafted with deliberate light,
                        genuine emotion, and cinematic intent.
                    </p>
                </div>
            </section>

            {/* ── Portfolio Grid ── */}
            <section
                style={{
                    padding: '2rem 0 8rem',
                    background: 'var(--bg-primary)',
                }}
            >
                <div className="section-container">
                    <PortfolioGrid filterEnabled={true} />
                </div>
            </section>
        </>
    );
}
