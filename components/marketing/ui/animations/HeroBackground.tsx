import Spline from '@splinetool/react-spline/next';

export default function HeroBackground() {
  return (
    <main className='absolute h-[90vh] w-full overflow-hidden'>
      <Spline
        scene="https://prod.spline.design/9hz74fRL5vh46ba8/scene.splinecode" 
      />
    </main>
  );
}
