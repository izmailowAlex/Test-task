import "./Control.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "./../UI/Select/Select";
import Social from "../Social/Social";
import arrow from "./../../images/arrow.svg";

const options = [
  { value: "политика", label: "Политика конфиденциальности" },
  { value: "другой", label: "Другой текст" },
  { value: "третий", label: "Третий текст" }
];

const options2 = [
  { value: "русский", label: "Русский", src: "/ico_ru.png" },
  { value: "английский", label: "Английский", src: "/ico_en.png" }
];

function Control() {
  const [currentChoise, setCurrentChoise] = useState('политика');
  const [currentLanguage, setCurrentLanguage] = useState('русский');
  const [currentSrc, setCurrentSrc] = useState('/ico_ru.png');

  const onChange = (event) => {
    setCurrentChoise(event.target.value);
  }

  const onChange2 = (event) => {
    const itemTmp = options2.find(item => item.value === event.target.value)
    setCurrentLanguage(event.value);
    setCurrentSrc(itemTmp.src);
  }

  return (
    <div className="control">
      <Link className="control__title" to="/documents">
        Смотреть все документы 
        <span className="control__title-img">
          <img className="control__title-img__image" src={arrow} alt="arrow" />
        </span>
      </Link>
      <Select onChange={onChange} value={currentChoise} options={options} />
      <Select onChange={onChange2} value={currentLanguage} options={options2} src={currentSrc} />
      <Social />
    </div>
  );
}

export default Control;
