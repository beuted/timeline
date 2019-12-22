import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './Creations.scss';
import { Project } from '../Project/Project';

export const Creations: React.FC = () => {
  const projects: Project[] = [
    {
       title: 'JS RPG',
       github: 'https://github.com/beuted/JS-RPG',
       demo: 'https://js-rpg.herokuapp.com/index.html',
       image: 'js-rpg.PNG',
       date: '2011',
       description: ['My frist try at a game in pure JS', 'Just after I tried learning C', 'And stopped on pointers...', 'Code is a complete mess']
    },
    {
       title: 'WEBGL FPS',
       github: 'https://github.com/beuted/WebGL-FPS',
       demo: 'https://webgl-fps.herokuapp.com/src/index.html',
       image: 'webgl-fps.PNG',
       date: '2012',
       description: []
    },
    {
       title: 'csgo-mates.com',
       demo: 'http://csgo-mates.com',
       image: 'csgo-mates.PNG',
       date: '2013-2014',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'smoothycon',
       github: 'https://github.com/beuted/smoothycon',
       demo: 'https://smoothycon.herokuapp.com/demo.html',
       image: 'smoothycon.PNG',
       date: 'March 2015',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'ng-chocolat',
       github: 'https://github.com/beuted/ng-chocolat',
       image: 'ng-chocolat.PNG',
       date: 'September 2015',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'The deepest picture',
       github: 'https://github.com/beuted/TheDeepestPicture',
       demo: 'https://the-deepest-picture.herokuapp.com/',
       image: 'TheDeepestPicture.PNG',
       date: '2016',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'Encryption playgrd',
       github: 'https://github.com/beuted/EncryptionPlayground',
       demo: 'https://encryption-playground.herokuapp.com',
       image: 'encryption-playground.PNG',
       date: '2016',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'Crawletto',
       github: 'https://github.com/beuted/Crawletto',
       demo: 'https://crawletto.herokuapp.com/',
       image: 'crawletto.PNG',
       date: '2016',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'Performance hunting',
       github: 'https://github.com/beuted/PerformanceHunting',
       image: 'performance-hunting.jpg',
       date: '2016',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'benoit.jehanno.net',
       github: 'https://github.com/beuted/benoit.jehanno.net',
       image: 'benoit-jehanno-net.PNG',
       date: '2017',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    },
    {
       title: 'typescript workshop',
       github: 'https://github.com/beuted/typescript-workshop',
       image: 'typescript-workshop.PNG',
       date: '2017',
       description: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
    }
  ];

  return (
    <div className="creations">
      <div>
        <header className="App-header">
          <div className="presentation">
            <div className="presentation-title">Creations</div>
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