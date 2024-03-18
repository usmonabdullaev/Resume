import { useEffect, useState } from "react";
import axios from "axios";

import LeftBlockData from "../../data/LeftBlockData";

import "./LeftBlock.scss";

const LeftBlock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://e4ca4cd30c0b0fd8.mokky.dev/left"
        );
        setData(response.data);
      } catch (err) {
        setData(LeftBlockData);
      }
    };
    getData();
  }, []);
  return (
    <>
      {data.map((i, index) => (
        <div key={index}>
          <div className="item">
            <div className="item__title-block">
              <div className="item__bg"></div>
              <span className="item__span">/</span>
              <h4 className="item__title">{i.title}</h4>
            </div>
            {i.body.map((j, index) => (
              <div className="item__body" key={index}>
                <div className="item__header">
                  <h5 className="item__subtitle">
                    {i.title === "ДОСТИЖЕНИЯ" ? `"${j.subtitle}"` : j.subtitle}
                  </h5>
                  <b className="item__date">{j.date}</b>
                </div>
                <p className="item__text">{j.text}</p>
                <ul className="item__list">
                  {j.list.map((l, index) => (
                    <li className="item__list-item" key={index}>
                      <b>{l}</b>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftBlock;
