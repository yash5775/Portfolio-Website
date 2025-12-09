import HeroVideo from '@/components/bits/HeroVideo';
import Overlay from '@/components/ui/Overlay';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#e7e7e7]">
      {/* Replaced 3D Scene with Video */}
      <HeroVideo />

      {/* Foreground Content */}
      <Overlay />
    </main>
  );
}
