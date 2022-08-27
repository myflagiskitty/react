import React from "react";
import ButtonFilled from "./ButtonFiled/ButtonFilled"
import ButtonEmpty from "./ButtonEmpty/ButtonEmpty";
import ButtonFilledLonge from "./ButtonFilledLonge/ButtonFilledLonge";
import ButtonFilledRound from "./ButtonFilledRound/ButtonFilledRound";
import ButtonFilledRoundGreenArrow from "./ButtonFilledRoundGreenArrow/ButtonFilledRoundGreenArrow";
import ContainerPagination from "./ContainerPagination/ContainerPagination";
import PageNumber from "./PageNumber/PageNumber";

function App() {
  return (
    <div>
      <ButtonFilled names="CLICK ME" />
      <ButtonEmpty names="CLICK ME" />
      <ButtonFilledLonge names="ПЕРЕЙТИ К ОПЛАТЕ" />
      <div>
        <ContainerPagination>

          <ButtonFilledRound names="1" />
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <PageNumber>...</PageNumber>
          <PageNumber>15</PageNumber>
          <ButtonFilledRoundGreenArrow />

        </ContainerPagination>
      </div>
    </div>
  );
};

export default App;