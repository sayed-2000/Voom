import  { useState }  from 'react'

function Top() {


    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
      };

  return (
    <div className="top">
      <span 
        onClick={() => handleClick(0)} 
        className={activeIndex === 0 ? "active" : ""}
      >
        Type
      </span>
      <span 
        onClick={() => handleClick(1)} 
        className={activeIndex === 1 ? "active" : ""}
      >
        Availability
      </span>
    </div>
  )
}

export default Top
