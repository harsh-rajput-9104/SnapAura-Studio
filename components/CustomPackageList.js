'use client';

const packages = [
    'Destination wedding coverage',
    'Multi-day event packages',
    'Family portrait marathons',
    'Brand & commercial photography',
    'Documentary / editorial projects',
];

export default function CustomPackageList() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
            }}
        >
            {packages.map((item) => (
                <PackageItem key={item} label={item} />
            ))}
        </div>
    );
}

function PackageItem({ label }) {
    return (
        <div
            style={{
                padding: '1.25rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'border-color 0.35s',
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--border-accent)')
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--border-subtle)')
            }
        >
            <span
                style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                }}
            />
            <span
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 300,
                }}
            >
                {label}
            </span>
        </div>
    );
}
