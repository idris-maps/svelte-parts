<script lang="ts">
  import { onMount } from 'svelte'
  import { logo, star, part } from './paths'

  const path = {
    logo: new Path2D(logo),
    star: new Path2D(star),
    part: new Path2D(part),
  }

  let canvas: HTMLCanvasElement
  let r = 0
  let partX = 0

  const render = (ctx: CanvasRenderingContext2D, path: Path2D, x = 0, y = 0, r = 0, s = 1) => {
    ctx.resetTransform()
    ctx.translate(x, y)
    ctx.rotate(r)
    ctx.scale(s, s)
    ctx.fill(path)
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let frame: number | undefined;

    (function loop() {
      if (ctx) {
        frame = requestAnimationFrame(loop)
        ctx.resetTransform()
        ctx.clearRect(0, 0, 1000, 200)

        ctx.fillStyle = '#ff3e00'
        r = r + 0.07
        partX = partX + 2

        if (partX < 490) {
          render(ctx, path.part, 0 + partX, 100, r)
          render(ctx, path.part, 1000 - partX, 100, -r)  
        }   

        if (partX > 480 && partX < 490) {
          render(ctx, path.star, 500, 100, r * 2, (partX - 480))
        }

        if (partX > 500 && partX < 1000) {
          render(ctx, path.logo, 500, 100, r / 3, (partX - 500) / 40)
        }

        if (partX > 1001) {
          partX = 0
          r = 0
        }
      }
    }());

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  });
</script>

<style>
  canvas {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }
</style>

<canvas
  bind:this={canvas}
  width="1000"
  height="200"
/>
