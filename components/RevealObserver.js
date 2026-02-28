'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');

        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('visible'));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        els.forEach((el) => io.observe(el));

        return () => io.disconnect();
    }, []);

    return null;
}
