import React, { useEffect, useRef, useState } from 'react';
import logoImg from '../assets/logo.png';
import './LogoIntro.css';

const INTRO_KEY = 'mugil-foods-intro-seen';

export default function LogoIntro() {
  const [visible, setVisible] = useState(false);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    try {
      if (window.sessionStorage.getItem(INTRO_KEY)) return;
    } catch {
      // Continue with the intro if session storage is unavailable.
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    document.documentElement.classList.add('mugil-intro-active');
    setVisible(true);

    let spinAnimation;
    let travelAnimation;
    let fadeTimer;

    const startAnimation = () => {
      const logo = logoRef.current;
      const overlay = overlayRef.current;
      const headerLogo = document.querySelector('.header-logo-img');

      if (!logo || !overlay || !headerLogo) {
        document.documentElement.classList.remove('mugil-intro-active');
        setVisible(false);
        return;
      }

      const target = headerLogo.getBoundingClientRect();
      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2;
      const targetX = target.left + target.width / 2;
      const targetY = target.top + target.height / 2;
      const offsetX = targetX - startX;
      const offsetY = targetY - startY;
      const scale = Math.min(target.width / 170, target.height / 170);

      // Give the logo a more deliberate entrance: three full spins, then a
      // calm, glowing center hold before it travels into the site header.
      spinAnimation = logo.animate(
        [
          { transform: 'translate(-50%, -50%) rotateY(0deg) rotateZ(-8deg) scale(.62)', opacity: 0, offset: 0 },
          { transform: 'translate(-50%, -50%) rotateY(540deg) rotateZ(4deg) scale(1.06)', opacity: 1, offset: 0.55 },
          { transform: 'translate(-50%, -50%) rotateY(1080deg) rotateZ(0deg) scale(1)', opacity: 1, offset: 1 },
        ],
        { duration: 1900, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'forwards' }
      );

      spinAnimation.onfinish = () => {
        overlay.classList.add('is-holding');
        window.setTimeout(() => {
          if (!logoRef.current || !overlayRef.current) return;

          travelAnimation = logo.animate(
            [
              { transform: 'translate(-50%, -50%) rotateY(1080deg) scale(1)', opacity: 1 },
              {
                transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) rotateY(1440deg) scale(${scale})`,
                opacity: 1,
              },
            ],
            { duration: 850, easing: 'cubic-bezier(.22,.8,.25,1)', fill: 'forwards' }
          );

          travelAnimation.onfinish = () => {
            overlay.classList.remove('is-holding');
            overlay.classList.add('is-leaving');
            fadeTimer = window.setTimeout(() => {
              document.documentElement.classList.remove('mugil-intro-active');
              try {
                window.sessionStorage.setItem(INTRO_KEY, '1');
              } catch {
                // The intro can still complete when storage is unavailable.
              }
              setVisible(false);
            }, 450);
          };
        }, 950);
      };
    };

    const startTimer = window.setTimeout(startAnimation, 100);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(fadeTimer);
      spinAnimation?.cancel();
      travelAnimation?.cancel();
      document.documentElement.classList.remove('mugil-intro-active');
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="mugil-logo-intro" ref={overlayRef} aria-hidden="true">
      <div className="mugil-logo-intro-glow" />
      <div className="mugil-logo-intro-ring mugil-logo-intro-ring-one" />
      <div className="mugil-logo-intro-ring mugil-logo-intro-ring-two" />
      <img ref={logoRef} className="mugil-logo-intro-image" src={logoImg} alt="" />
      <span className="mugil-logo-intro-caption">MUGIL FOODS</span>
    </div>
  );
}
