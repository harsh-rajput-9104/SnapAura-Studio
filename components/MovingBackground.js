'use client';

export default function MovingBackground({ children, style = {} }) {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
            {/* Animated radial glow orbs */}
            <div className="moving-bg" aria-hidden="true">
                <div className="radial-1" />
                <div className="radial-2" />
            </div>
            {children}
        </div>
    );
}
