import './Creations.scss';

import React, { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Project } from '../Project/Project';
import Fade from 'react-reveal/Fade';

type Props = {}

export default function Creations(props: Props) {
  const projects: Project[] = [
    {
       title: 'JS RPG',
       github: 'https://github.com/beuted/JS-RPG',
       demo: 'https://js-rpg.herokuapp.com/index.html',
       image: 'js-rpg.PNG',
       date: '2011',
       description: ['My frist try at a game in pure JS/Canvas', 'Raycast algorithm for POV, simple IA', 'Inventory and UI']
    },
    {
      title: 'The hidden galaxie',
      github: 'https://github.com/beuted/the-hidden-galaxie',
      image: 'THG.PNG',
      date: '2012',
      description: ['RPG done in Java', 'Implementation of A* for the displacement', 'inventory and Map editor']
    },
    {
       title: 'WEBGL FPS',
       github: 'https://github.com/beuted/WebGL-FPS',
       demo: 'https://webgl-fps.herokuapp.com/src/index.html',
       image: 'webgl-fps.PNG',
       date: '2012',
       description: ['My first try at WebGL', 'With a simple 3D physic engine']
    },
    {
      title: 'OpenGL RPG',
      github: 'https://github.com/beuted/OpenGL-RPG',
      image: 'OpenGl-RPG.png',
      date: '2013',
      description: ['Minecraft-like RPG', 'Written in C++ with OpenGL', 'with particles, skybox & shaders', 'block destruction & several camera POV', 'possibility to take screenshots']
    },
    {
       title: 'csgo-mates.com',
       demo: 'http://csgo-mates.com',
       image: 'csgo-mates.PNG',
       date: '2013-2014',
       description: ['My First website, written in angularJS', 'Backend in NodeJs, aggregation of', 'steam official and non-official API', 'Authentication through Steam OAuth']
    },
    {
       title: 'smoothycon',
       github: 'https://github.com/beuted/smoothycon',
       demo: 'https://smoothycon.herokuapp.com/demo.html',
       image: 'smoothycon.PNG',
       date: '2015',
       description: ['My first try at CSS animations', 'An animated icon library']
    },
    {
       title: 'ng-chocolat',
       github: 'https://github.com/beuted/ng-chocolat',
       image: 'ng-chocolat.PNG',
       date: '2015',
       description: ['Port of @nicolas-t "Chocolat" to angularjs', '(a lightbox library)']
    },
    {
       title: 'The deepest picture',
       github: 'https://github.com/beuted/TheDeepestPicture',
       demo: 'https://the-deepest-picture.herokuapp.com/',
       image: 'TheDeepestPicture.PNG',
       date: '2016',
       description: ['Small game using WebGL', 'You wander in the snow looking at trees', 'while eyes are looking at you in the night']
    },
    {
       title: 'Encryption playgrd',
       github: 'https://github.com/beuted/EncryptionPlayground',
       demo: 'https://encryption-playground.herokuapp.com',
       image: 'encryption-playground.PNG',
       date: '2016',
       description: ['Visual explanation of how basic Proof of' , 'work-based crypto-currency work']
    },
    {
       title: 'Crawletto',
       github: 'https://github.com/beuted/Crawletto',
       demo: 'https://crawletto.herokuapp.com/',
       image: 'crawletto.PNG',
       date: '2016',
       description: ['Online multiplayer turn-based RPG', 'Written in Typescript using PhaserJs, Socket.io', 'Once again A* and Raycast algorithms']
    },
    {
       title: 'Performance hunting',
       github: 'https://github.com/beuted/PerformanceHunting',
       image: 'performance-hunting.jpg',
       date: '2016',
       description: ['PokemonGo map of pokemons in your area.', 'Using several accounts to scan surroundings', 'and unofficial pokemonGo protobuf API']
    },
    {
       title: 'benoit.jehanno.net',
       github: 'https://github.com/beuted/benoit.jehanno.net',
       image: 'benoit-jehanno-net.PNG',
       date: '2017',
       description: ['First website written in Angular', 'Re-written in vue a year later']
    },
    {
       title: 'typescript workshop',
       github: 'https://github.com/beuted/typescript-workshop',
       image: 'typescript-workshop.PNG',
       date: '2017',
       description: ['Workshop I built to teach typescript', 'used with newcomers @ Criteo']
    },
    {
      title: 'Bored in Train',
      github: 'https://github.com/beuted/bored-in-train',
      image: 'Boring-Idle-Game.PNG',
      date: '2018',
      description: ['Idle Game built in VueJS', 'Map generation using Simplex', 'heavy use of VueX store']
   },
   {
      title: 'Art',
      github: 'https://github.com/beuted/art',
      image: 'canvas-sketch.PNG',
      date: '2018',
      description: ['My try at generating cool looking shaders', 'using @mattdesl canvas-sketch']
   },
   {
      title: 'Appart Aggregator',
      github: 'https://github.com/beuted/AppartAggregator',
      image: 'appart-aggregator.png',
      date: '2019',
      description: ['Aggregate and store appartments', 'from SeLoger, Pap and others', 'Allows you to write your own filters,', 'save the one you want and add comments']
   },
   {
      title: 'benoit.jehanno.net (v2)',
      github: 'https://github.com/beuted/timeline',
      image: 'bjehannonet2.PNG',
      date: '2019',
      description: ['My website', 're-done in react', 'using hooks and typescript']
   },
  ];

  useEffect(() => {
   console.log("creations");
  }, [])

  return (
    <div className="creations">
      <div>
        <header className="app-header">
          <div className="presentation">
            <div className="presentation-title"><Fade bottom cascade>Creations</Fade></div>
            <div className="presentation-text">
              <span>This is what I do</span>
              <span>This is what I do</span>
            </div>
          </div>
        </header>
      </div>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.title} project={project}></Project>
        ))}
      </div>
    </div>
  );
}
