import LeftBlock from "../LeftBlock";
import RightBlock from "../RightBlock";

import "./Container.scss";

const Container = () => {
  return (
    <div className="container">
      <div className="left-cube"></div>
      <div className="block">
        <div className="left-block">
          <div className="title left-block__title">
            <h1 className="title__firstname">Usmon</h1>
            <h2 className="title__lastname">
              <svg viewBox="0 0 980 300" className="lastname">
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="60%">
                    Abdulloev
                  </text>
                </symbol>
                <g className="g-ants">
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
              </svg>
            </h2>
          </div>
          <LeftBlock />
        </div>
        <div className="right-block">
          <div className="image-block">
            <div className="image-block__group">
              <img
                className="image-block__img"
                src="/Abdullaev_Usmon.png"
                alt="Abdullaev Usmon"
                title="Abdulloev Usmon"
                fetchpriority="high"
                height={266.66}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="title image-block__title">
              <h2 className="title__firstname">Usmon</h2>
              <h2 className="title__lastname">
                <svg viewBox="0 0 1200 300" className="lastname">
                  <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="60%">
                      Abdulloev
                    </text>
                  </symbol>
                  <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                  </g>
                </svg>
              </h2>
            </div>
          </div>
          <RightBlock />
        </div>
      </div>
    </div>
  );
};

export default Container;
