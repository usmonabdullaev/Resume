import "./Progress.css";

const Progress = ({ value }) => {
  return (
    value !== 0 && (
      <div className="progress" title={`${value}0%`}>
        <div className="progress__bg" style={{ width: `${value}0%` }}></div>
        <div
          className="progress__bg2"
          style={{ width: `${100 - value * 10}%` }}
        ></div>
        <div className="progress__red progress__red_1"></div>
        <div className="progress__red progress__red_2"></div>
        <div className="progress__red progress__red_3"></div>
        <div className="progress__red progress__red_4"></div>
        <div className="progress__red progress__red_5"></div>
      </div>
    )
  );
};

export default Progress;
