import HeroVideo from '@/components/bits/HeroVideo';
import Overlay from '@/components/ui/Overlay';

export default function Home() {
  return (
    <main className="relative w-full max-w-[100vw] min-h-screen bg-black" style={{ overflowX: 'clip' }}>
      {/* Replaced 3D Scene with Video */}
      <HeroVideo />

      {/* Foreground Content */}
      <Overlay />
    </main>
  );
}
