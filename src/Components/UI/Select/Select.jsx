import "./Select.css";
// import { useRef } from "react";

function Select(props) {
  // const selectRef = useRef()

  return (
    <div className="control__select">
      {props.src ? (
        <>
          <div className="control__select-img">
            <img className="select-img__img" src={props.src} alt="lang" />
          </div>
          <select
            style={{ paddingLeft: "50px" }}
            value={props.value}
            onChange={props.onChange}
          >
            {props.options.map((option, index) => {
              return (
                <option
                  value={option.value}
                  key={option.value + index}
                >
                  {option.label}
                </option>
              )
            })}
          </select>
        </>
      ) : 
      <select
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return (
            <option
              value={option.value}
              key={option.value + index}
            >
              {option.label}
            </option>
          )
        })}
      </select>}
    </div>
  );
}

export default Select;
