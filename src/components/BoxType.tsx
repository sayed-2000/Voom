import  { useState } from 'react';

function BoxType() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 

 
  const handleClick = (text: string, index: number) => {
    setActiveIndex(index);
    console.log("Selected text:", text); 
  };

  return (
    <div className="box-type">
      <span
        onClick={() => handleClick("Commercial", 0)}
        style={{ opacity: activeIndex === 0 ? 0.5 : 1 }} 
      >
        Commercial
      </span>
      <span
        onClick={() => handleClick("Administrative", 1)}
        style={{ opacity: activeIndex === 1 ? 0.5 : 1 }} 
      >
        Administrative
      </span>
      <span
        onClick={() => handleClick("Clinical", 2)}
        style={{ opacity: activeIndex === 2 ? 0.5 : 1 }} 
      >
        Clinical
      </span>
    </div>
  );
}

export default BoxType;
