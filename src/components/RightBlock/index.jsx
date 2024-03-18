import { useEffect, useState } from "react";
import axios from "axios";

import Progress from "../Progress";
import RightBlockData from "../../data/RightBlockData";

import "./RightBlock.scss";

const RightBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://e4ca4cd30c0b0fd8.mokky.dev/right"
        );
        setData(response.data);
      } catch (err) {
        setData(RightBlockData);
      }
    };
    getData();
  }, []);
  return (
    <>
      {data.map((i, index) => (
        <div className="item right-block__item" key={index}>
          <div className="item__title-block">
            <div className="item__bg"></div>
            <span className="item__span">/</span>
            <h4 className="item__title">{i.title}</h4>
          </div>
          {i.body.map((j, index) => (
            <div className="right" key={index}>
              <div className="right__block">
                <div className="right__title-block">
                  <h5 className="right__title">{j.subtitle.text}</h5>
                  {j.subtitle.subtext.link ? (
                    j.subtitle.subtext.link.target ? (
                      <a
                        className="right__link"
                        href={j.subtitle.subtext.link.text}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {j.subtitle.subtext.text}
                      </a>
                    ) : (
                      <a className="right__link" href={j.subtitle.subtext.link}>
                        {j.subtitle.subtext.text}
                      </a>
                    )
                  ) : (
                    <span className="right__text">
                      {j.subtitle.subtext.text}
                    </span>
                  )}
                </div>
                <Progress value={j.subtitle.progress} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default RightBlock;
