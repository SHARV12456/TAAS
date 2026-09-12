'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Utility to read CSS variables from root
function getCSSVariable(varName: string): string {
  if (typeof window === 'undefined') return '#000000';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

/* ── Service panel as 3D floating slab ── */
function ServicePanel({
  index,
  total,
  hovered,
  onHover,
}: {
  index: number;
  total: number;
  hovered: boolean;
  onHover: (i: number | null) => void;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 2.2;
  const targetX = Math.cos(angle) * radius;
  const targetZ = Math.sin(angle) * radius;
  const targetY = hovered ? 0.25 : 0;

  const mat = useMemo(() => {
    const color = hovered ? getCSSVariable('--3d-element-dark') : getCSSVariable('--3d-element-light');
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: hovered ? 0.3 : 0.8,
      metalness: hovered ? 0.15 : 0.0,
      transparent: true,
      opacity: 0.9,
    });
  }, [hovered]);

  const edgeMat = useMemo(() => {
    const color = hovered ? getCSSVariable('--3d-element-warm') : getCSSVariable('--3d-element-neutral');
    return new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: hovered ? 0.9 : 0.4,
    });
  }, [hovered]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetX, 0.06);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetY, 0.08);
    mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, targetZ, 0.06);
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      hovered ? -angle + Math.PI : -angle,
      0.06
    );
    if (hovered) {
      mesh.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.02;
    }
  });

  const boxGeo = useMemo(() => new THREE.BoxGeometry(0.9, 1.4, 0.08), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(boxGeo), [boxGeo]);

  return (
    <group
      onPointerEnter={() => onHover(index)}
      onPointerLeave={() => onHover(null)}
    >
      <mesh ref={mesh} castShadow>
        <primitive object={boxGeo} />
        <primitive object={mat} />
      </mesh>
      <primitive object={new THREE.LineSegments(edges, edgeMat)} position={[targetX, targetY, targetZ]} />
    </group>
  );
}

function Scene({ hoveredIndex, setHoveredIndex }: {
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const group = useRef<THREE.Group>(null!);
  const total = 5;

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.06;
  });

  return (
    <group ref={group}>
      {Array.from({ length: total }, (_, i) => (
        <ServicePanel
          key={i}
          index={i}
          total={total}
          hovered={hoveredIndex === i}
          onHover={setHoveredIndex}
        />
      ))}
      {/* Central axis */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
        <meshStandardMaterial color={getCSSVariable('--3d-panel-base')} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function ServicesPanels({
  hoveredIndex,
  setHoveredIndex,
}: {
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const ambientColor = useMemo(() => getCSSVariable('--3d-light-ambient'), []);
  const directionalColor = useMemo(() => getCSSVariable('--3d-light-directional'), []);
  const pointColor = useMemo(() => getCSSVariable('--3d-light-point'), []);

  return (
    <Canvas
      camera={{ position: [0, 1, 5.5], fov: 55 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.2} color={ambientColor} />
      <directionalLight position={[3, 6, 3]} intensity={2} color={directionalColor} castShadow />
      <pointLight position={[-3, 2, 2]} intensity={6} color={pointColor} />
      <Scene hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
    </Canvas>
  );
}
