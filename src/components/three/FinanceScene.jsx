import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function seeded(seed) {
  const x = Math.sin(seed * 997.31) * 10000;
  return x - Math.floor(x);
}

function ParticleField() {
  const points = useRef(null);
  const { positions, colors } = useMemo(() => {
    const count = 850;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#819bac');
    const colorB = new THREE.Color('#b8944d');
    const colorC = new THREE.Color('#fbf7ef');

    for (let i = 0; i < count; i += 1) {
      const radius = 4 + seeded(i + 1) * 9;
      const theta = seeded(i + 17) * Math.PI * 2;
      const y = (seeded(i + 43) - 0.5) * 6;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * radius - 4;

      const mix = seeded(i + 91);
      const color = mix > 0.88 ? colorB : mix > 0.68 ? colorC : colorA;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.025;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.035;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.72} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function FinancialBars() {
  const group = useRef(null);
  const bars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        x: (index % 7) * 0.72 - 2.15,
        z: Math.floor(index / 7) * 0.72 - 1.4,
        h: 0.28 + seeded(index + 121) * 1.45,
        phase: seeded(index + 211) * Math.PI * 2,
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = -0.42 + Math.sin(clock.elapsedTime * 0.14) * 0.08;
    group.current.children.forEach((child, index) => {
      const next = bars[index].h + Math.sin(clock.elapsedTime * 0.9 + bars[index].phase) * 0.12;
      child.scale.y = Math.max(next, 0.18);
      child.position.y = child.scale.y / 2 - 1.25;
    });
  });

  return (
    <group ref={group} position={[2.8, -0.4, -2.8]} rotation={[0.22, -0.42, 0]}>
      {bars.map((bar, index) => (
        <mesh key={`${bar.x}-${bar.z}`} position={[bar.x, bar.h / 2 - 1.25, bar.z]}>
          <boxGeometry args={[0.18, 1, 0.18]} />
          <meshStandardMaterial
            color={index % 5 === 0 ? '#b8944d' : '#315f98'}
            emissive={index % 5 === 0 ? '#7b5b22' : '#163f71'}
            emissiveIntensity={0.28}
            metalness={0.55}
            roughness={0.28}
            transparent
            opacity={0.86}
          />
        </mesh>
      ))}
    </group>
  );
}

function WireGlobe() {
  const globe = useRef(null);

  useFrame(({ clock }) => {
    if (!globe.current) return;
    globe.current.rotation.y = clock.elapsedTime * 0.08;
    globe.current.rotation.z = Math.sin(clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <group ref={globe} position={[0.6, 0.2, -3.7]}>
      <mesh>
        <sphereGeometry args={[1.72, 34, 18]} />
        <meshBasicMaterial color="#819bac" wireframe transparent opacity={0.13} />
      </mesh>
      <mesh scale={1.025}>
        <sphereGeometry args={[1.72, 34, 18]} />
        <meshBasicMaterial color="#b8944d" wireframe transparent opacity={0.055} />
      </mesh>
    </group>
  );
}

function GridPlane() {
  const grid = useRef(null);

  useFrame(({ clock }) => {
    if (!grid.current) return;
    grid.current.position.z = ((clock.elapsedTime * 0.18) % 1) - 4.3;
  });

  return <gridHelper ref={grid} args={[18, 38, '#315f98', '#203d5b']} position={[0, -1.62, -4.3]} rotation={[0, 0, 0]} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} color="#fbf7ef" />
      <pointLight position={[-4, 2, 2]} intensity={3.2} color="#315f98" />
      <pointLight position={[3, -1, 1]} intensity={1.9} color="#b8944d" />
      <ParticleField />
      <FinancialBars />
      <WireGlobe />
      <GridPlane />
    </>
  );
}

export default function FinanceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 7.4], fov: 46 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }}
      className="finance-canvas"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
