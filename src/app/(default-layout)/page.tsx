import { FaultyTerminal } from '@/components/background/terminal';
import Layout from '@/layout';

export default function Home() {
    return (
        <div className='h-screen w-screen overflow-hidden'>
            {/* Hero with terminal background */}
            <div className='absolute inset-0'>
                <FaultyTerminal
                    scale={2}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.2}
                    scanlineIntensity={0.2}
                    glitchAmount={0.4}
                    flickerAmount={0.3}
                    noiseAmp={0.3}
                    chromaticAberration={0}
                    dither={0.3}
                    curvature={0.1}
                    tint='#ffffff'
                    mouseReact={true}
                    mouseStrength={0.15}
                    brightness={0.4}
                    pageLoadAnimation={true}
                    className='opacity-60'
                />
            </div>
            <div className='pointer-events-none relative mx-auto flex h-screen max-w-screen-md flex-col items-center justify-center gap-4 overflow-hidden'>
                {/* FaultyTerminal background */}
                {/* Hero content */}

                <h1 className='font-anton text-[clamp(3rem,_15vw,_5rem)] font-bold text-white drop-shadow-2xl'>
                    Fabroos
                </h1>
                <p className='mb-8 text-2xl text-gray-300 drop-shadow-md'>
                    Developer, Design enthusiast, traveler and Barista.
                </p>
            </div>
        </div>
    );
}
