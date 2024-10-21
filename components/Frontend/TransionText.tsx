 'use client'
 import React from 'react'
import TextTransition, { presets } from 'react-text-transition';



function TransionText({TEXTS, classname}:{TEXTS:string[], classname?:string}) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <span className={classname}>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </span>
    );
}

export default TransionText
