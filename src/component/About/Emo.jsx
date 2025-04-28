import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import Roimg from "../../assets/ro.jpg"; // Import your image here

export default function CustomCube() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9f9f9);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;


    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load face texture
    const faceTexture = new THREE.TextureLoader().load(Roimg); // Place your image inside public/images/ro.jpg

    // Materials
    const grayMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.1 });
    const faceMaterial = new THREE.MeshStandardMaterial({ map: faceTexture, roughness: 0.1, metalness: 0.1 });

    const materials = [
      grayMaterial, // right
      grayMaterial, // left
      grayMaterial, // top
      grayMaterial, // bottom
      faceMaterial, // front
      grayMaterial  // back
    ];
    // Cube
    const cubeGeometry = new RoundedBoxGeometry(2.4, 2.4, 2.4, 10, 0.75);
    const cube = new THREE.Mesh(cubeGeometry, materials);
    scene.add(cube);

    // Torso
    const torsoGeometry = new THREE.SphereGeometry(1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2); // top half only
    torsoGeometry.scale(1, 0.8, 1.2); // Making it oval (adjust the Y and Z scale)

    const torsoMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF, // white color
      roughness: 0.1,
      metalness: 0.25
    });

    const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
    torso.position.y = -2.5; // Position torso in the center
    scene.add(torso);

    function adjustTorsoScale() {
      const width = window.innerWidth;
      if (width < 768) { // Mobile and small devices
        torso.scale.set(0.8, 1, 1.3);
        scene.add(torso);
      } else if (width < 1200) { // Tablets and medium devices
        torso.scale.set(0.8, 1, 1.3);
        scene.add(torso);
      } else { // Desktop
        torso.scale.set(1, 0.8, 1.2);
        scene.add(torso);
      }
    }


    // Create arms (oval-shaped and slightly stretched)
    const armGeometry = new THREE.SphereGeometry(0.4, 64, 64); // Small sphere for arms
    armGeometry.scale(0.8, 0.5, 1.8); // Stretch arms to make them slightly longer

    const armMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ddddd,
      roughness: 0.05,
      metalness: 0.1
    });

    // Left arm
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.x = -1.6; // Position left arm on the left side
    leftArm.position.y = -2.3; // Slightly above torso
    scene.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.x = 1.6; // Position right arm on the right side
    rightArm.position.y = -2.3; // Slightly above torso
    scene.add(rightArm);

    function adjustArmsScale() {
      const width = window.innerWidth;
      if (width < 768) { // Mobile
        leftArm.scale.set(0.6, 0.8, 1);
        rightArm.scale.set(0.6, 0.8, 1);
        leftArm.position.x = -1.2;
        rightArm.position.x = 1.2;
        scene.add(leftArm);
        scene.add(rightArm);

      } else if (width < 1200) { // Tablet
        leftArm.scale.set(0.6, 0.8, 1);
        rightArm.scale.set(0.6, 0.8, 1);
        leftArm.position.x = -1.2;
        rightArm.position.x = 1.2;
        scene.add(leftArm);
        scene.add(rightArm);

      } else { // Desktop
        leftArm.scale.set(0.8, 0.5, 1.8);
        rightArm.scale.set(0.8, 0.5, 1.8);
        leftArm.position.y = -2.3;
        rightArm.position.y = -2.3;
        scene.add(leftArm);
        scene.add(rightArm);

      }
    }

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const maxRotation = Math.PI / 4;

    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      mouseX = (event.clientX / window.innerWidth) * 2 - 0.7;
      mouseY = -(event.clientY / window.innerHeight) * -2 - 1;
    }

    function handleTouchStart(event) {
      if (event.touches.length === 1) {
        // No specific action needed
      }
    }

    function handleTouchMove(event) {
      if (event.touches.length === 1) {
        const rect = container.getBoundingClientRect();
        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;

        // Normalize to [-1, 1] range like mouse
        mouseX = (touchX / window.innerWidth) * 2 - 1;
        mouseY = -(touchY / window.innerHeight) * 2 + 1;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    let lastMoveTime = Date.now();
    let isUserActive = true;

    document.addEventListener('mousemove', () => {
      lastMoveTime = Date.now();
      isUserActive = true;
    });

    document.addEventListener('touchmove', () => {
      lastMoveTime = Date.now();
      isUserActive = true;
    });

    function animate() {
      requestAnimationFrame(animate);

      const now = Date.now();

      if (now - lastMoveTime > 500) { // 3 seconds of inactivity
        isUserActive = false;
      }

      if (isUserActive) {
        // Move based on mouse or touch
        cube.rotation.y = mouseX * maxRotation;
        cube.rotation.x = mouseY * maxRotation;
      } else {
        // Auto rotate slowly when no user activity
        adjustRotation();
        function adjustRotation() {
          cube.rotation.y += 0.002;
          if (now - lastMoveTime > 3000) {
            cube.rotation.y -= 0.004;
            if (now - lastMoveTime > 6000) {
              cube.rotation.y += 0.008;
              lastMoveTime = now; // Reset last move time to avoid continuous rotation
              adjustRotation();
            }
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();


    function handleResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      adjustTorsoScale();
      adjustArmsScale();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-[350px] aspect-square rounded-xl overflow-hidden"
    />
  );
}
