import React, { useEffect, useRef } from "react";
import "../Styles/Stacked.scss";
const StackedCards = () => {
  const stackCardsRef = useRef(null);

  useEffect(() => {
    const stackCards = stackCardsRef.current;

    if (!stackCards) return;

    const observer = new IntersectionObserver(
      stackCardsCallback.bind(stackCards)
    );
    observer.observe(stackCards);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", stackCards.scrollingListener);
    };
  }, []);

  const stackCardsCallback = (entries) => {
    if (entries[0].isIntersecting) {
      if (stackCardsRef.current.scrollingListener) return;
      stackCardsInitEvent(stackCardsRef.current);
    } else {
      if (!stackCardsRef.current.scrollingListener) return;
      window.removeEventListener(
        "scroll",
        stackCardsRef.current.scrollingListener
      );
      stackCardsRef.current.scrollingListener = false;
    }
  };

  const stackCardsInitEvent = (element) => {
    element.scrollingListener = stackCardsScrolling.bind(element);
    window.addEventListener("scroll", element.scrollingListener);
  };

  const stackCardsScrolling = () => {
    if (stackCardsRef.current.scrolling) return;
    stackCardsRef.current.scrolling = true;
    window.requestAnimationFrame(animateStackCards.bind(stackCardsRef.current));
  };

  const animateStackCards = () => {
    const stackCards = stackCardsRef.current;
    const top = stackCards.getBoundingClientRect().top;
    const offsetTop = 100;
    const cardHeight = 300;
    const marginY = 15;

    // Check if stackCards and stackCards.items are defined
    if (stackCards && stackCards.items) {
      for (let i = 0; i < stackCards.items.length; i++) {
        const scrolling = offsetTop - top - i * (cardHeight + marginY);

        if (scrolling > 0) {
          stackCards.items[i].setAttribute(
            "style",
            `transform: translateY(${marginY * i}px) scale(${
              (cardHeight - scrolling * 0.05) / cardHeight
            });`
          );
        }
      }
    }

    stackCards.scrolling = false;
  };

  return (
    <div ref={stackCardsRef} className="container-card-stacked z-[1000000]">
      <div className="jumbotron text-center mt-3">
        <h1>Gerardo</h1>
      </div>
      <div className="container-card-deck card-deck-js flex flex-col items-center">
        <div className="card-stacked" style={{ transform: "translateY(0px)" }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment 1</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card-stacked">
          <div className="card-body">
            <h5 className="card-title">Special title treatment 2</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card-stacked">
          <div className="card-body">
            <h5 className="card-title">Special title treatment 3</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card-stacked">
          <div className="card-body">
            <h5 className="card-title">Special title treatment4</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card-stacked">
          <div className="card-body">
            <h5 className="card-title">Special title treatment5</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="vh-100 text-center mt-5">Footer!!!</div>
    </div>
  );
};

export default StackedCards;
