import React, { ReactElement, useEffect, useRef, useState } from 'react';
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

const animationComponents = {
  'Tween Animation': Tween,
  'Spring animation': Spring,
  'Repeat Infinite Animation': Repeat_Infinite,
  'Repeat Backwards Animation': Repeat_Backwards,
  'While Hover Animation': While_Hover,
  'While Tap Animation': While_Tap,
  'While Drag Animation': While_Drag,
  'Cycle States Animation': Cycle_States,
  'Animation Sequence ': Animation_Sequence,
};

const animationsComponentsArr = Object.entries(animationComponents);

function App() {
  const [count, setCount] = useState(0);
  const [animationCount, setAnimationCount] = useState(0);
  const [currentAnimationName, setCurrentAnimationName] = useState<string>(
    animationsComponentsArr[0]?.[0]
  );

  const forwardAnimation = (): void => {
    setAnimationCount((prevData) =>
      prevData + 1 > animationsComponentsArr.length - 1 ? 0 : prevData + 1
    );
  };

  const backwardAnimation = (): void => {
    setAnimationCount((prevData) =>
      prevData - 1 < 0 ? animationsComponentsArr.length - 1 : prevData - 1
    );
  };
  const showAnimations = () => {
    let index = Math.min(
      Math.max(animationCount, 0),
      animationsComponentsArr.length - 1
    );

    const item = animationsComponentsArr?.[index];

    if (!item) return null;

    const [name, Comp] = item;

    setCurrentAnimationName(name);
    return <Comp />;
  };

  return (
    <>
      <Presentation />
      <div className='flex justify-center mt-10 text-2xl font-semibold'>
        {animationCount + 1} {currentAnimationName}
      </div>
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
