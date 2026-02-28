import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
    metadataBase: new URL('https://snapaura.studio'),
    title: {
        default: 'SnapAura Studio — Premium Photography',
        template: '%s | SnapAura Studio',
    },
    description:
        'SnapAura Studio captures your most precious moments with cinematic elegance — weddings, portraits, events, and pre-wedding shoots.',
    keywords: ['photography', 'wedding photography', 'portrait studio', 'event photographer'],
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://snapaura.studio',
        siteName: 'SnapAura Studio',
        title: 'SnapAura Studio — Premium Photography',
        description:
            'Cinematic wedding, portrait, and event photography. Capturing stories in light and shadow.',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
