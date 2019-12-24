
import React, { useRef, useEffect } from 'react';

export const ParticleBackground: React.FC<{canvasWidth: number, canvasHeight: number, fps?: number }> = ({ canvasWidth, canvasHeight, fps }) => {
  let canvasRef = useRef<any>();
  let definedFps = fps !== undefined ? fps : 60;

  useEffect(() => {
    var particles: any[] = [],
     patriclesNum = 20,
      minDistance = 300;

    for(var i = 0; i < patriclesNum; i++){
      particles.push(createParticle());
    }

    let canvas = canvasRef.current;
    let context = canvas.getContext('2d');
    context.globalCompositeOperation = 'lighter';

    var now = 0;
    var elapsed = 0;
    var then = Date.now();
    var fpsInterval = 1000 / definedFps;

    const render = () => {
      requestAnimationFrame(render);

      now = Date.now();
      elapsed = now - then;

      if (elapsed <= fpsInterval) {
        return;
      }

      then = now - (elapsed % fpsInterval);

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      for(var i = 0;i < patriclesNum; i++){
        var temp = particles[i];
        for(var j = 0; j<patriclesNum; j++){
           var temp2 = particles[j];
           context.linewidth = 0.5;

           if(temp.rgba === temp2.rgba && findDistance(temp, temp2)<minDistance){
              context.strokeStyle = temp.rgba;
              context.beginPath();
              context.moveTo(temp.x, temp.y);
              context.lineTo(temp2.x, temp2.y);
              context.stroke();
           }
        }


        context.fillStyle = temp.rgba;
        context.strokeStyle = temp.rgba;

        context.beginPath();
        context.arc(temp.x, temp.y, 3, 0, Math.PI*2, true);
        context.fill();
        context.closePath();


        temp.x += temp.vx;
        temp.y += temp.vy;

        if(temp.x > canvasWidth) temp.x = 0;
        if(temp.x < 0) temp.x = canvasWidth;
        if(temp.y > canvasHeight) temp.y = 0;
        if(temp.y < 0) temp.y = canvasHeight;
      }
    };
    render();
  });

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
    ></canvas>
  );

  function createParticle(){
    var particle: any = {};
    particle.x =  Math.round( Math.random() * canvasWidth);
    particle.y =  Math.round( Math.random() * canvasHeight);
    particle.rgba = "#fff";
    particle.vx = Math.round( Math.random() * 2) - 0.5;
    particle.vy = Math.round( Math.random() * 2) - 0.5;
    return particle;
  }

  function findDistance(p1: {x: number, y: number}, p2: {x: number, y: number}){
    return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
  }
}