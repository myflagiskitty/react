import React from "react";

import Pagination from "./Pagination/Pagination";
import PageNumber from "./PageNumber/PageNumber";
import ContainerButton from "./ContainerButton/ContainerButton";
import ButtonFilledArrow from "./ButtonFilledArrow/ButtonFilledArrow";
import InpuEmailt from "./InputEmail/InputEmail";
import InputEmail from "./InputEmail/InputEmail";
import InputDropdown from "./InputDropdown/InputDropdown";
import Counter from "./Counter/Counter";

export default function App() {

  return (
    <div>

      <InputDropdown/>




      {/* <ContainerButton/>
      <ButtonFilledArrow names="ПЕРЕЙТИ К ОПЛАТЕ" /> */}

      {/* <Pagination>
        <ButtonFilled names="1" />
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>...</PageNumber>
        <PageNumber>15</PageNumber>
        <ButtonFilledArrow />
      </Pagination> */}

      {/* <InputEmail placeholder="Email"/>
      <InputEmail placeholder="Пароль"/>
      <InputEmail placeholder="Имя"/>
      <InputEmail placeholder="Фамилия"/> */}
    </div>
  );
};

