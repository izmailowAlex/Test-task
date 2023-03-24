import "./Partners.css";
import { useRef } from 'react';
import Sponsor from "../Sponsor/Sponsor";

function Partners() {
  const listRef = useRef();

  function handle(e) {
    const MAX_TRANSLATE_VALUE = 180 * (e.value - 1)
    listRef.current.style.transform=`translate(-${MAX_TRANSLATE_VALUE}px)`;
  }

  return (
    <div className="partners">
      <h3 className="partners__title">Видеоотзывы от партнёров</h3>
      <div className="slider">
        <div className="slider-wrapper">
          <ul ref={listRef} className="slider-content">
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/2PS21k6lAD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/8Ivrc0J1r0U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/ghpL0RkD6kI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/VwZiHSedsLA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/McLPnr6ujXo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
            <li className="slider-content__video">
              <iframe className="video__iframe" width="150" height="90" src="https://www.youtube.com/embed/McLPnr6ujXo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </li>
          </ul>
        </div>
        <form className="dot-form" onChange={(e) => handle(e.target)}>
          <div id="dot-slider">
            <input className="dot-slider__input" type="radio" id="1" name="dot-amout" value="1" />
            <label htmlFor="1" ></label>

            <input className="dot-slider__input" type="radio" id="2" name="dot-amout" value="2" />
            <label htmlFor="2" ></label>
            
            <input className="dot-slider__input" type="radio" id="3" name="dot-amout" value="3" />
            <label htmlFor="3" ></label>
            
            <input className="dot-slider__input" type="radio" id="4" name="dot-amout" value="4" />
            <label htmlFor="4" ></label>
          </div>
        </form>
      </div>
      <Sponsor />
    </div>
  );
}

export default Partners;
