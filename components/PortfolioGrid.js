'use client';

import { useState } from 'react';
import Image from 'next/image';

const allItems = [
    {
        id: 1,
        category: 'Weddings',
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop',
        alt: 'Wedding ceremony at golden hour',
        height: '340px',
    },
    {
        id: 2,
        category: 'Pre-Wedding',
        src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1170&auto=format&fit=crop',
        alt: 'Pre-wedding shoot at sunset',
        height: '240px',
    },
    {
        id: 3,
        category: 'Portraits',
        src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=928&auto=format&fit=crop',
        alt: 'Elegant portrait photography',
        height: '400px',
    },
    {
        id: 4,
        category: 'Events',
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop',
        alt: 'Corporate event photography',
        height: '260px',
    },
    {
        id: 5,
        category: 'Weddings',
        src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop',
        alt: 'Bridal portrait in natural light',
        height: '380px',
    },
    {
        id: 6,
        category: 'Studio',
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1332&auto=format&fit=crop',
        alt: 'Studio portrait session',
        height: '300px',
    },
    {
        id: 7,
        category: 'Pre-Wedding',
        src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1287&auto=format&fit=crop',
        alt: 'Romantic pre-wedding couple',
        height: '350px',
    },
    {
        id: 8,
        category: 'Portraits',
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop',
        alt: 'Lifestyle portrait in natural light',
        height: '280px',
    },
    {
        id: 9,
        category: 'Events',
        src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1169&auto=format&fit=crop',
        alt: 'Cultural event photography',
        height: '310px',
    },
    {
        id: 10,
        category: 'Studio',
        src: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1171&auto=format&fit=crop',
        alt: 'Professional headshot session',
        height: '360px',
    },
    {
        id: 11,
        category: 'Weddings',
        src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1170&auto=format&fit=crop',
        alt: 'Outdoor wedding reception',
        height: '290px',
    },
    {
        id: 12,
        category: 'Pre-Wedding',
        src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1170&auto=format&fit=crop',
        alt: 'Pre-wedding golden hour',
        height: '330px',
    },
];

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Portraits', 'Events', 'Studio'];

export default function PortfolioGrid({ filterEnabled = false, limit }) {
    const [active, setActive] = useState('All');

    const filtered =
        active === 'All' ? allItems : allItems.filter((i) => i.category === active);
    const items = limit ? filtered.slice(0, limit) : filtered;

    return (
        <div>
            {/* Category filter */}
            {filterEnabled && (
                <div
                    style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        marginBottom: '3rem',
                    }}
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            style={{
                                background: 'transparent',
                                border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border-subtle)'
                                    }`,
                                color:
                                    active === cat ? 'var(--accent)' : 'var(--text-muted)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.7rem',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                padding: '0.5rem 1.2rem',
                                cursor: 'pointer',
                                transition: 'border-color 0.3s, color 0.3s',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {/* Masonry grid */}
            <div className="portfolio-masonry">
                {items.map((item, idx) => (
                    <div
                        key={item.id}
                        className="portfolio-item img-cinematic"
                        style={{
                            height: item.height,
                            animationDelay: `${idx * 0.08}s`,
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                            quality={80}
                        />
                        <div className="img-overlay" />
                        {/* Category label on hover */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '1.25rem',
                                left: '1.25rem',
                                zIndex: 2,
                                opacity: 0,
                                transform: 'translateY(8px)',
                                transition: 'opacity 0.5s, transform 0.5s',
                            }}
                            className="portfolio-label"
                        >
                            <span
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.62rem',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    color: 'var(--accent)',
                                    display: 'block',
                                    marginBottom: '0.25rem',
                                }}
                            >
                                {item.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
