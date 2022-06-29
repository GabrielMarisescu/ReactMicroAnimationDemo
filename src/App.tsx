import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Tween from './animations/Tween';
import Spring from './animations/Spring';
import './index.scss';
import { Refresh } from './components/Refresh';
import ShowAnimations from './components/ShowAnimations';
import Repeat from './animations/Repeat';
import RepeatBackwards from './animations/RepeatBackwards';
import WhileHover from './animations/WhileHover';
import PresentationComponent from './components/PresentationComponent';

function App() {
  const [count, setCount] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const [animationComponents, setAnimationComponents] =
    useState<JSX.Element[]>();

  const forwardAnimation = (): void => {
    setAnimationCount((prevData) => prevData + 1);
  };
  const backwardAnimation = (): void => {
    setAnimationCount((prevData) => prevData - 1);
  };

  const showAnimations = () => {
    if (animationComponents && animationComponents[animationCount]) {
      return animationComponents[animationCount];
    } else {
      console.log('no animation in that slot');
    }
  };

  useEffect(() => {
    const animations = [
      <Tween />,
      <Spring />,
      <Repeat />,
      <RepeatBackwards />,
      <WhileHover />,
    ];

    setAnimationComponents(animations);
    //if currentselection is more than animations.lengt, show error component
  }, []);

  return (
    <>
      <PresentationComponent />
      <Refresh onClick={() => setCount(count + 1)} />
      <ShowAnimations
        key={count}
        forwardAnimation={forwardAnimation}
        backwardAnimation={backwardAnimation}
        showAnimations={showAnimations}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
