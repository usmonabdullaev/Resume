import LeftBlock from "../LeftBlock";
import RightBlock from "../RightBlock";

import "./Container.scss";

const Container = () => {
  const ImagePng =
    "https://mokky.dev/uploaded/dfnhxiq6j/image/upload/v1708927451/file_gznlax.png";
  return (
    <div className="container">
      <div className="left-cube"></div>
      <div className="block">
        <div className="left-block">
          <div className="title left-block__title">
            <h1 className="title__firstname">Usmon</h1>
            <h2 className="title__lastname">Abdullaev</h2>
          </div>
          <LeftBlock />
        </div>
        <div className="right-block">
          <div className="image-block">
            <div className="image-block__group">
              <img
                className="image-block__img"
                src={ImagePng}
                alt="Abdullaev Usmon"
              />
            </div>
            <div className="title image-block__title">
              <h1 className="title__firstname">Usmon</h1>
              <h2 className="title__lastname">Abdullaev</h2>
            </div>
          </div>
          <RightBlock />
        </div>
      </div>
    </div>
  );
};

export default Container;
