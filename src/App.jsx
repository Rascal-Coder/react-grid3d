// import { useState } from 'react'
import "./assets/css/normalize.css";
import "./assets/css/component.css";
import { useEffect } from "react";
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function App() {
  useEffect(() => {
    (function () {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      [].slice
        .call(document.querySelectorAll(".isolayer"))
        .forEach(function (el) {
          new window.IsoGrid(el, {
            type: "scrollable",
            transform:
              "translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)",
            stackItemsAnimation: {
              properties: function (pos) {
                return {
                  translateZ: (pos + 1) * 50,
                  rotateZ: getRandomInt(-3, 3),
                };
              },
              options: function () {
                return {
                  type: window.dynamics.bezier,
                  duration: 500,
                  points: [
                    { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                    { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                  ],
                  //delay: (itemstotal-pos-1)*40
                };
              },
            },
            onGridLoaded: function () {
              window.classie.add(document.body, "grid-loaded");
            },
          });
        });
    })();
  }, []);

  return (
    <>
      <main>
        <header className="codrops-header">
          <h1>Isometric Grids</h1>
          <p>Decorative &amp; interactive isometric &amp; 3D grids.</p>
        </header>
        <div className="isolayer isolayer--scroll1 isolayer--shadow">
          <ul className="grid grid--effect-flip">
            <li className="grid__item">
              <a className="grid__link" href="https://dribbble.com/forefathers">
                <img
                  className="grid__img layer"
                  src="/img/canvas.png"
                  alt="Canvas Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/wireframe.png"
                  alt="Wireframe Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/Dribbble1/1.jpg"
                  alt="01"
                />
                <span className="grid__title">Forefathers</span>
              </a>
            </li>
            <li className="grid__item">
              <a
                className="grid__link"
                href="https://dribbble.com/JulienLavallee"
              >
                <img
                  className="grid__img layer"
                  src="/img/canvas.png"
                  alt="Canvas Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/wireframe.png"
                  alt="Wireframe Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/Dribbble1/2_1.jpg"
                  alt="021"
                />
                <span className="grid__title">Julien Lavallee</span>
              </a>
            </li>
            <li className="grid__item">
              <a
                className="grid__link"
                href="https://dribbble.com/creativemints"
              >
                <img
                  className="grid__img layer"
                  src="/img/canvas.png"
                  alt="Canvas Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/wireframe.png"
                  alt="Wireframe Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/Dribbble1/3.jpg"
                  alt="03"
                />
                <span className="grid__title">Mike | Creative Mints</span>
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://dribbble.com/Radium">
                <img
                  className="grid__img layer"
                  src="/img/canvas.png"
                  alt="Canvas Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/wireframe.png"
                  alt="Wireframe Dummy"
                />
                <img
                  className="grid__img layer"
                  src="/img/Dribbble1/4_2.jpg"
                  alt="042"
                />
                <span className="grid__title">Cosmin Capitanu</span>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
