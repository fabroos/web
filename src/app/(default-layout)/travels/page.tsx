'use client';

import Layout from '@/layout';

import './travels.css';

const CITIES = ['OKINAWA', 'TOKYO', 'OSAKA', 'KYOTO', 'HIROSHIMA'] as const;

export default function Home() {
    return (
        <Layout className='h-[calc(100vh-var(--total-header-height))] max-w-6xl flex-col items-center justify-center overflow-hidden'>
            {/* Triggers como hermanos directos */}
            {CITIES.map((city, index) => (
                <div
                    key={city}
                    className={`${city.toLowerCase()}-trigger absolute z-10 flex cursor-pointer items-center justify-center`}
                    style={{ top: `${(index + 1) * (100 / (CITIES.length + 1))}%`, transform: 'translateY(-50%)' }}>
                    <p className='font-anton text-center text-[clamp(3rem,_15vw,_5rem)] font-black tracking-wide text-red-600'>
                        {city}
                    </p>
                </div>
            ))}

            {/* Fondos */}
            <Wallpaper city='okinawa' />
            <Wallpaper city='tokyo' />
            <Wallpaper city='osaka' />
            <Wallpaper city='kyoto' />
            <Wallpaper city='hiroshima' />

            {/* Red bulb from bottom */}
            <div className='red-bulb fixed bottom-0 left-1/2 z-20 -translate-x-1/2'></div>
        </Layout>
    );
}

const Wallpaper = ({ city }: { city: string }) => {
    return <div className={`bg-${city} fixed inset-0 opacity-0 transition-opacity duration-500`}></div>;
};
