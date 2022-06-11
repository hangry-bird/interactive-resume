import React, { useState, useEffect, useLayoutEffect } from 'react';
import Image_Javascript from 'src/assets/images/skill/javascript.png'
import Image_React from 'src/assets/images/skill/react.png'
import Image_Node from 'src/assets/images/skill/nodejs.png'
import Image_Python from 'src/assets/images/skill/python.png'
import Image_Others from 'src/assets/images/skill/others.png'
import ReactCardFlip from 'react-card-flip';

const Experience = () => {

  const [isFlipJs, setIsFlipJs] = useState(false);
  const [isFlipReact, setIsFlipReact] = useState(false);
  const [isFlipNode, setIsFlipNode] = useState(false);
  const [isFlipPython, setIsFlipPython] = useState(false);
  const [isFlipOthers, setIsFlipOthers] = useState(false);

  const onClickFlipJs = () => { setIsFlipJs(prev => !prev) }
  const onClickFlipReact = () => { setIsFlipReact(prev => !prev) }
  const onClickFlipNode = () => { setIsFlipNode(prev => !prev) }
  const onClickFlipPython = () => { setIsFlipPython(prev => !prev) }
  const onClickFlipOthers = () => { setIsFlipOthers(prev => !prev) }

  return (
    <div className="technical-skills">
      <div className="skills-area" data-aos="fade-up">
        <div className="skills-area-title">Technical-Skills</div>

        <div className="skills-card">

          <div className="skills-flip-card js" onMouseEnter={onClickFlipJs} onMouseLeave={onClickFlipJs}>
            <ReactCardFlip isFlipped={isFlipJs} flipDirection="horizontal">
              <div className="flip-front">
                <div className="card-image">
                  <img src={Image_Javascript} alt="javascript" />
                </div>
                <label>Javascript</label>
              </div>

              <div className="flip-back">
                <span>Pixi.js</span>
                <span>AmChart</span>
                <span>jQuery</span>
                <span>Core</span>
              </div>
            </ReactCardFlip>
          </div>

          <div className="skills-flip-card react" onMouseEnter={onClickFlipReact} onMouseLeave={onClickFlipReact}>
            <ReactCardFlip isFlipped={isFlipReact} flipDirection="horizontal">
              <div className="flip-front">
                <div className="card-image">
                  <img src={Image_React} alt="react" />
                </div>
                <label>React</label>
              </div>
              <div className="flip-back">
                <span>Redux</span>
                <span>AmChart</span>
                <span>AntD</span>
                <span>Mobile</span>
              </div>
            </ReactCardFlip>
          </div>

          <div className="skills-flip-card node" onMouseEnter={onClickFlipNode} onMouseLeave={onClickFlipNode}>
            <ReactCardFlip isFlipped={isFlipNode} flipDirection="horizontal">
              <div className="flip-front">
                <div className="card-image">
                  <img src={Image_Node} alt="node.js" />
                </div>
                <label>Node.js</label>
              </div>
              <div className="flip-back">
                <span>Express</span>
                <span>Firebase</span>
                <span>API Structure</span>
                <span>Route Design</span>
              </div>
            </ReactCardFlip>
          </div>

          <div className="skills-flip-card python" onMouseEnter={onClickFlipPython} onMouseLeave={onClickFlipPython}>
            <ReactCardFlip isFlipped={isFlipPython} flipDirection="horizontal">
              <div className="flip-front">
                <div className="card-image">
                  <img src={Image_Python} alt="python" />
                </div>
                <label>Python</label>
              </div>
              <div className="flip-back">
                <span>Django</span>
                <span>Selenium</span>
                <span>Crawling</span>
                <span>Module</span>
              </div>
            </ReactCardFlip>
          </div>

          <div className="skills-flip-card others" onMouseEnter={onClickFlipOthers} onMouseLeave={onClickFlipOthers}>
            <ReactCardFlip isFlipped={isFlipOthers} flipDirection="horizontal">
            <div className="flip-front">
                <div className="card-image">
                  <img src={Image_Others} alt="others" />
                </div>
                <label>Others</label>
              </div>
              <div className="flip-back">
                <span>Publishing</span>
                <span>MariaDB</span>
                <span>MS-SQL</span>
                <span>Jira Slack</span>
              </div>
            </ReactCardFlip>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
