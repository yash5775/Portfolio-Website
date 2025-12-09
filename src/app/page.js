import Scene from '@/components/canvas/Scene';
import Hero3D from '@/components/canvas/Hero3D';
import Overlay from '@/components/ui/Overlay';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Scene>
        <Hero3D />
      </Scene>
      <Overlay />
    </main>
  );
}
