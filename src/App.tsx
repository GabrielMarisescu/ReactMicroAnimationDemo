import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Tween from './animations/Tween';
import Spring from './animations/Spring';
import './index.scss';
import { Refresh } from './components/Refresh';
import ShowAnimations from './components/ShowAnimations';
import RepeatInfinite from './animations/Repeat_Infinite';
import RepeatBackwards from './animations/Repeat_Backwards';
import WhileHover from './animations/While_Hover';
import Presentation from './components/Presentation';

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
      RepeatInfinite,
      RepeatBackwards,
      WhileHover,
    ];

    setAnimationComponents(animations);
    //if currentselection is more than animations.lengt, show error component
  }, []);

  return (
    <>
      <Presentation />
      <Refresh onClick={() => setCount(count + 1)} />
      <div className='flex justify-center mt-10 text-2xl font-semibold'>
        {currentAnimationName}
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
