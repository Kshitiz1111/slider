import { useRef, useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const cardRef = useRef(null)
  const startYAxis = useRef(0);
  const latestYAxis = useRef(0);
  let travelDistance = 80;

  let items = [1, 2, 3, 4, 5, 6]

  const handleTouchStart = (e) => {
    startYAxis.current = e.touches[0].clientY
    console.log("touch started")
  }

  const handleTouchMove = (e) => {
    latestYAxis.current = e.touches[0].clientY;
    const distance = startYAxis.current - latestYAxis.current;
    if (distance > travelDistance && activeCardIndex < items.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
      startYAxis.current = latestYAxis.current;
    } else if (distance < - travelDistance && activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
      startYAxis.current = latestYAxis.current;
    }
    console.log("moving")
  };

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener('touchstart', handleTouchStart, { passive: true });
    card.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeCardIndex, items.length]);
  console.log(activeCardIndex)

  return (
    <div className='w-full h-screen relative overflow-hidden'>
      <div ref={cardRef} className="w-full flex flex-col items-center gap-4">
        {items.map((item, index) => {
          const prevCard = index < activeCardIndex;
          const nextCard = index > activeCardIndex;
          const isActive = index === activeCardIndex;
          const isVisible = index === activeCardIndex || index === activeCardIndex - 1 || index === activeCardIndex + 1;
          const cardStyle = isVisible ? 'block' : 'hidden';

          return (
            <Card
              key={item}
              activeCard={isActive}
              prevCard={prevCard}
              nextCard={nextCard}
              visibilityStyle={cardStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
