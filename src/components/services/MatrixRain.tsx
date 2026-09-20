import { useEffect, useRef } from 'react';

interface Stream {
  x: number;
  head: number;
  length: number;
  speed: number;
  pause: number;
}

const glyphs = '012345789ABCDEFGHJKLMNPRSTUVWXYZ+-=:/<>[]{}';
const cell = 16;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !context) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let streams: Stream[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let visible = true;

    function reset(stream: Stream, startAbove = true) {
      stream.length = 16 + Math.floor(Math.random() * 36);
      stream.speed = 25 + Math.random() * 50;
      stream.head = startAbove ? -(stream.length * cell + Math.random() * height) : Math.random() * height;
      stream.pause = Math.random() * 2.8;
    }

    function paint(delta: number) {
      if (!context) return;
      context.fillStyle = '#020903';
      context.fillRect(0, 0, width, height);
      context.font = '12px monospace';
      context.textBaseline = 'top';
      for (const stream of streams) {
        if (!reduced.matches) {
          if (stream.pause > 0) stream.pause -= delta;
          else stream.head += stream.speed * delta;
          if (stream.head - stream.length * cell > height) reset(stream);
        }
        for (let index = 0; index < stream.length; index++) {
          const y = stream.head - index * cell;
          if (y < -cell || y > height) continue;
          const strength = 1 - index / stream.length;
          context.fillStyle = index === 0
            ? 'rgba(186, 255, 190, .94)'
            : `rgba(43, 218, 89, ${0.18 + strength * 0.54})`;
          context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], stream.x, y);
        }
      }
    }

    function resize() {
      if (!canvas || !context) return;
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const ratio = Math.min(1, Math.sqrt(1_800_000 / (width * height)));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      streams = Array.from({ length: Math.ceil(width / cell) }, (_, index) => {
        const stream = { x: index * cell + 2, head: 0, length: 0, speed: 0, pause: 0 };
        reset(stream, false);
        return stream;
      });
      paint(0);
    }

    function tick(now: number) {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) { last = 0; return; }
      const elapsed = last ? Math.min((now - last) / 1000, 0.1) : 0;
      if (!last || elapsed >= 1 / 24) {
        last = now;
        paint(elapsed);
      }
      frame = window.requestAnimationFrame(tick);
    }

    function syncAnimation() {
      if (!visible || document.hidden || reduced.matches) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        last = 0;
      } else if (!frame) {
        frame = window.requestAnimationFrame(tick);
      }
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    visibility.observe(canvas);
    const motionChange = () => { resize(); syncAnimation(); };
    reduced.addEventListener('change', motionChange);
    document.addEventListener('visibilitychange', syncAnimation);
    resize();
    syncAnimation();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      reduced.removeEventListener('change', motionChange);
      document.removeEventListener('visibilitychange', syncAnimation);
    };
  }, []);

  return <div className="console-rain" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
