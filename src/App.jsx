import "./assets/css/normalize.css";
import "./assets/css/component.css";
import "./assets/css/demo.css";
import { useEffect } from "react";
import dynamics from "dynamics.js";
import { classie } from "./assets/js/classie.js";
import IsoGrid from "./assets/js/main.js"
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const initIsoGrid = () => {
  [].slice.call(document.querySelectorAll(".isolayer")).forEach(function (el) {
    new IsoGrid(el, {
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
            type: dynamics.bezier,
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
        classie.add(document.body, "grid-loaded");
      },
    });
  });
};
function App() {
  useEffect(() => {
    initIsoGrid();
  }, []);

  return (
    <>
		<main >
			<header className="codrops-header">
				<h1>Isometric Grids</h1>
				<p>Decorative &amp; interactive isometric &amp; 3D grids.</p>
				<nav className="codrops-demos">
					<a className="current-demo" href="index.html">Scrollable grid</a>
					<a href="index2.html">Static grid</a>
				</nav>
				<div className="codrops-links">
					<a className="codrops-icon codrops-icon--prev" href="http://tympanus.net/Development/DistortedButtonEffects/" title="Previous Demo"><span>Previous Demo</span></a>
					<a className="codrops-icon codrops-icon--drop" href="http://tympanus.net/codrops/?p=27094" title="Back to the article"><span>Back to the Codrops article</span></a>
				</div>
				<button className="button-menu">
					<svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63"><rect width="67.75" height="8.38"/><rect x="4.15" y="17.63" width="59.45" height="8.38" /><rect y="35.25" width="67.75" height="8.38"/></svg>
				</button>
			</header>
			<div className="isolayer isolayer--scroll1 isolayer--shadow">
				<ul className="grid grid--effect-flip">
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1.jpg" alt="01" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_1.jpg" alt="021" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3.jpg" alt="03" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_2.jpg" alt="042" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_1.jpg" alt="011" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2.jpg" alt="02" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_1.jpg" alt="031" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4.jpg" alt="04" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_2.jpg" alt="012" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/JulienLavallee">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/2_2.jpg" alt="022" />
							<span className="grid__title">Julien Lavallee</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/creativemints">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/3_2.jpg" alt="032" />
							<span className="grid__title">Mike | Creative Mints</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/forefathers">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/1_3.jpg" alt="013" />
							<span className="grid__title">Forefathers</span>
						</a>
					</li>
					<li className="grid__item">
						<a className="grid__link" href="https://dribbble.com/Radium">
							<img className="grid__img layer" src="img/canvas.png" alt="Canvas Dummy" />
							<img className="grid__img layer" src="img/wireframe.png" alt="Wireframe Dummy" />
							<img className="grid__img layer" src="img/Dribbble1/4_1.jpg" alt="041" />
							<span className="grid__title">Cosmin Capitanu</span>
						</a>
					</li>
				</ul>
			</div>
		</main>
    <a className="pater" href="https://goo.gl/k3vxNx">
			<h2 className="pater__title" aria-label="PageCloud"><img src="img/PageCloud_logo.svg" alt="PageCloud Logo"/></h2>
			<p className="pater__desc">Take control of your website with features you won't find anywhere else. Find out why PageCloud is the world's most advanced website creator today!</p>
		</a>
    </>
  );
}

export default App;
