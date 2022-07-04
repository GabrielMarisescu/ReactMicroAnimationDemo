import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Tween from './animations/Tween';
import Spring from './animations/Spring';
import './index.scss';
import { Refresh } from './components/Refresh';
import ShowAnimations from './components/ShowAnimations';
import Repeat_Infinite from './animations/Repeat_Infinite';
import Repeat_Backwards from './animations/Repeat_Backwards';
import While_Hover from './animations/While_Hover';
import Presentation from './components/Presentation';
import While_Tap from './animations/While_Tap';
import While_Drag from './animations/While_Drag';
import Cycle_States from './animations/Cycle_States';
import Animation_Sequence from './animations/Animation_Sequence';

function App() {
  const [count, setCount] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const [animationComponents, setAnimationComponents] =
    useState<(() => JSX.Element)[]>();
  const [currentAnimationName, setCurrentAnimationName] = useState<string>();

  const forwardAnimation = (): void => {
    setAnimationCount((prevData) => prevData + 1);
  };

  const backwardAnimation = (): void => {
    setAnimationCount((prevData) => prevData - 1);
  };

  const showAnimations = (): JSX.Element | void => {
    if (animationComponents && animationComponents[animationCount]) {
      setCurrentAnimationName(
        animationComponents[animationCount].name.replace('_', ' ')
      );
      return React.createElement(animationComponents[animationCount]);
    }
  };
  //handles forward and backwards errors
  useEffect(() => {
    if (animationCount === -1) {
      setAnimationCount(animationComponents!.length - 1);
    } else if (animationCount + 1 > animationComponents!?.length) {
      setAnimationCount(0);
    }
  }, [animationCount]);

  useEffect(() => {
    const animations = [
      Tween,
      Spring,
      Repeat_Infinite,
      Repeat_Backwards,
      While_Hover,
      While_Tap,
      While_Drag,
      Cycle_States,
      Animation_Sequence,
    ];

    setAnimationComponents(animations);
    //if currentselection is more than animations.lengt, show error component
  }, []);

  return (
    <>
      <Presentation />
      <Refresh onClick={() => setCount(count + 1)} />
      <div className='flex justify-center mt-10 text-2xl font-semibold'>
        {animationCount + 1} {currentAnimationName}
      </div>
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
