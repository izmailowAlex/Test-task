import { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RequestForm.css";
import pen from "../../images/ico_pen.svg";
import fire from "../../images/ico_fire.svg";

function RequestForm() {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({});

  function onSubmit(data) {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <form className="request-form" onBlur={handleSubmit(onSubmit)}>
      <div className="request-form__text">
        <Link className="request-form__text-link" to="">
          Хотите с нами связаться
        </Link>
        <span className="request-form__text-fire">
          , оставьте заявку
        </span>
        <p className="request-form__text">
          и специалист свяжется с вами в течение 30 минут.
          <span className="request-form__text-fire">
            <img src={fire} alt="fire" />
          </span>
        </p>
      </div>
      <div className="request-form__error">
        {errors?.phoneNumber && <p>{errors?.phoneNumber?.message || "Error!"}</p>}
      </div>
      <input className="request-form__input" type="text" name="phone" placeholder="Номер телефона" 
        {...register('phoneNumber', {
          required: "Поле обязательно к заполнению!",
          pattern: /^(\+375|80)[(]?(29|25|44|33|17)[)]?[-\s\.]?(\d{3})[-\s\.]?(\d{2})[-\s\.]?(\d{2})$/,
        })}
      />
      <button className="request-form__button" type="submit" disabled={!isValid}>
        Оставить заявку 
        <span className="request-form__button-img">
          <img src={pen} alt="pen" />
        </span>
      </button>
    </form>
  );
}

export default RequestForm;
