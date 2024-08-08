import { useRef, useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const cardRef = useRef(null)
  const startYAxis = useRef(0);
  const latestYAxis = useRef(0);
  const isScrolling = useRef(false);
  let touchTravelDistance = 100;

  let items = [1, 2, 3, 4, 5, 6]

  const handleTouchStart = (e) => {
    startYAxis.current = e.touches[0].clientY
    console.log('start')
  }

  const handleTouchMove = (e) => {
    latestYAxis.current = e.touches[0].clientY;
    const distance = startYAxis.current - latestYAxis.current;
    console.log("distance", distance, startYAxis.current, latestYAxis.current)
    if (distance > touchTravelDistance && activeCardIndex < items.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
      startYAxis.current = latestYAxis.current;//for continuous scroll with out lifting finger
    } else if (distance < - touchTravelDistance && activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
      startYAxis.current = latestYAxis.current;
    }
  };

  const handleScroll = (e) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    const distance = e.deltaY;

    if (distance > 0 && activeCardIndex < items.length - 1) {
      setActiveCardIndex((prevIndex) => prevIndex + 1);
    } else if (distance < 0 && activeCardIndex > 0) {
      setActiveCardIndex((prevIndex) => prevIndex - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Adjust timeout as needed
  };

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener('touchstart', handleTouchStart, { passive: true });
    card.addEventListener('touchmove', handleTouchMove, { passive: true });
    card.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      card.removeEventListener('touchstart', handleTouchStart);
      card.removeEventListener('touchmove', handleTouchMove);
      card.removeEventListener('wheel', handleScroll);
    };
  }, [activeCardIndex, items.length]);

  return (
    <div className='w-full h-screen bg-custom-body relative overflow-hidden'
    >
      <div ref={cardRef} className="w-full overflow-y-scroll flex flex-col items-center gap-4">
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
