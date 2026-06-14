"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* ── Framing knobs (tune visually) ──────────────────────────────
   The model is centered + size-normalized, then pushed down so only the
   head-to-eyes peek into the porthole at rest; on hover it slides up to
   reveal down to the chest. If Batman faces away, flip ROT_Y to Math.PI. */
// Framing is done entirely in model space (scale + Y translate); the camera is
// fixed. The model is centered on its own bounding box so rotation.y spins it
// about its own vertical axis (a turntable), not around an off-center pivot.
const FIT = 5.4; // normalized height in world units (larger = more zoomed)
const REST_Y = -3.0; // resting offset — only head/eyes visible
const HOVER_Y = -1.7; // hovered offset — revealed to the chest
const ROT_Y = 0; // base yaw so he faces the viewer
const MAX_YAW = 0.6; // radians he turns toward the cursor's horizontal side

function Batman({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/batman.glb");
  const ref = useRef<THREE.Group>(null);
  const yaw = useRef(0); // normalized cursor X from viewport center, [-1, 1]

  // The GLB authors its geometry far off-origin (center ≈ [0, -0.04, -3.66],
  // size ≈ [1.5, 2.14, 1.37], measured from the glTF accessor bounds). These
  // are baked in so centering is deterministic — putting the model's true
  // center at the group origin, so rotation.y spins about his own axis.
  const { offset, scale } = useMemo(() => {
    const center = new THREE.Vector3(0, -0.04, -3.66);
    const maxDim = 2.14;
    const s = FIT / maxDim;
    return { offset: center.multiplyScalar(-s), scale: s };
  }, []);

  // track cursor's horizontal distance from the viewport center
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      yaw.current = Math.max(-1, Math.min(1, nx));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const g = ref.current;
    if (!g) return;
    const k = Math.min(1, delta * 5);
    // hover reveal (Y position)
    const ty = hovered ? HOVER_Y : REST_Y;
    g.position.y += (ty - g.position.y) * k;
    // turn left/right toward the cursor (Y axis only)
    const tr = ROT_Y + MAX_YAW * yaw.current;
    g.rotation.y += (tr - g.rotation.y) * k;
  });

  return (
    <group ref={ref} position-y={REST_Y}>
      <group scale={scale} position={[offset.x, offset.y, offset.z]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export default function BatmanModel() {
  const [hovered, setHovered] = useState(false);
  return (
    // stage extends above the porthole's top edge; the bat-stage mask is an
    // ellipse matching the rounded-full rim but open at the top, so Batman is
    // clipped to the porthole on the sides/bottom yet pokes out the top.
    <div
      className="bat-stage absolute inset-x-0 bottom-0 top-[-60%]"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* neutral white lighting — key, fill, and rim to read the silhouette */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-4, 2, -3]} intensity={1.4} />
        <directionalLight position={[0, -3, 2]} intensity={0.5} />
        {/* yellow back light — unseen, but reads as glow from the matrix behind */}
        <pointLight position={[0, 0.6, -3]} intensity={60} distance={14} color="#facc15" />
        <Suspense fallback={null}>
          <Batman hovered={hovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/batman.glb");
