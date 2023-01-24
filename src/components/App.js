import React from "react";
import BoxCards from "./BoxCards/BoxCards"
import Calendar from "./Calendar/Calendar"
import StarRating from "./StarRating/StarRating"
import LikeButton from "./LikeButton/LikeButton"
import Toggle from "./Toggle/Toggle"
import Radio from "./Radio/Radio"
import Checkbox from "./Checkbox/Checkbox"
import ButtonClearOrApply from "./ButtonClearOrApply/ButtonClearOrApply"
import ButtonEmpty from "./ButtonEmpty/ButtonEmpty"
import ButtonFilled from "./ButtonFilled/ButtonFilled"
import ButtonFilledArrow from "./ButtonFilledArrow/ButtonFilledArrow"
import Counter from "./Counter/Counter"
import Dropdown from "./Dropdown/Dropdown"
import DropdownWithouBtn from "./DropdownWithouBtn/DropdownWithouBtn"
import HeadersCards from "./HeadersCards/HeadersCards"
import Input from "./Input/Input"
import InputArrivalAndDeparture from "./InputArrivalAndDeparture/InputArrivalAndDeparture"
import InputDate from "./InputDate/InputDate"
import LinkLabel from "./LinkLabel/LinkLabel"
import NewDropdown from "./NewDropdown/NewDropdown"
import Pagination from "./Pagination/Pagination"
import RoomCard from "./RoomCard/RoomCard"
import FullDateOfStay from "./FullDateOfStay/FullDateOfStay"
import Subscription from "./Subscription/Subscription"
import ExpandableCheckboxList from "./ExpandableCheckboxList/ExpandableCheckboxList"
import ShortDescription from "./ShortDescription/ShortDescription"
import Features from "./Features/Features"
import ListOfRules from "./ListOfRules/ListOfRules"
import UserReviews from "./UserReviews/UserReviews"
import RangeSlider from "./RangeSlider/RangeSlider"

export default function App() {
  return (
    <>
    <div style={{ display: "flex", flexDirection: "row" }}></div>
      {/* =======================карточки=========================== */}
      {/* <BoxCards /> - начато и незавершено
      <RoomCard /> - пустое значение
      <Calendar /> */}

      {/* =======================мини-элементы===========================*/}
      {/* <Counter />
      <ButtonClearOrApply name="применить/очистить" />
      <HeadersCards name="Заголоnвок" /> */}

      {/*<Dropdown /> - такой же элемент как NewDropdown, только не работает кнопка применить:( не знаю есть он гдето в проекте поэтому не удаляю*/}



      

        {/* ======================= 1 первая колонка ================================*/}
       {/* <div style={{ display: "flex", flexDirection: "column", border: "1px solid", padding: "15px" }}>

           <Input placeholder="Email" type="email" header="Данные для входа в сервис" />
          <Input placeholder="Парль" type="password" />

          <NewDropdown header="гости" />

          <InputDate placeholder="ДД.ММ.ГГГГ" type="date" header="дата рождения" />

          <div style={{ display: "flex", flexDirection: "row", }}>
            <InputArrivalAndDeparture placeholder="ДД.ММ.ГГГГ" type="date" header="прибытие" />
            <InputArrivalAndDeparture placeholder="ДД.ММ.ГГГГ" type="date" header="выезд" />
          </div>

          <FullDateOfStay placeholder="19 авг - 23 авг" header="Даты пребывания в отеле" type="text" />
          <Subscription placeholder="Email" type="email" />
          <DropdownWithouBtn header="удобства номера" />

          <ExpandableCheckboxList header="дополнительные удобства"
            check1="Завтрак"
            check2="Письменный стол"
            check3="Стул для кормления"
            check4="Кроватка"
            check5="Телевизор"
            check6="Шампунь" />

          <div>
            <ShortDescription header="Сведения о номере"
              picture="insert_emoticon"
              title="Комфорт"
              description="Шумопоглощающие стены" />

            <div style={{ width: "280px", height: "1px", background: "rgba(31, 32, 65, 0.1)" }}></div>

            <ShortDescription picture="location_city" title="Удобство" description="Окно в каждой из спален" />

            <div style={{ width: "280px", height: "1px", background: "rgba(31, 32, 65, 0.1)" }}></div>

            <ShortDescription picture="whatshot" title="Уют" description="Номер оснащён камином" />
          </div>

        </div> */}

        {/* =======================средняя колонка ================================*/}
        {/* <div style={{ display: "flex", flexDirection: "column", border: "1px solid", padding: "15px" }}>

          <Checkbox header="Правила дома"
            check1="Можно курить"
            check2="Можно с питомцами"
            check3="Можно пригласить гостей (до 10 человек)" />
          <Radio header1="Мужчина"
            header2="Женщина" />
          <Toggle header="Получать спецпредложения" />
          <LikeButton />
          <StarRating />
          <Features header="доступность"
            title1="Широкий коридор"
            description1="Ширина коридоров в номере не менее 91 см."
            title2="Помощник для инвалидов"
            description2="На 1 этаже вас встретит специалист  и проводит до номера." />
          <ListOfRules header="Правила"
            description1="Нельзя с питомцами"
            description2="Без вечеринок и мероприятий"
            description3="Время прибытия — после 13:00, а выезд до 12:00" />
          <div>
            <UserReviews header="Отзывы посетителей номера" name="Мурад Сарафанов" date="5 дней назад"
              src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57.jpg"
              alt="user's photo"
              feedback="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей." />

            <UserReviews name="Патрисия Стёклышкова" date="Неделю назад"
              src="https://avatars.dzeninfra.ru/get-zen_doc/4460346/pub_6085d3c1e2c7114111efc2a2_6085e4803b735b52f85124ce/scale_1200"
              alt="user's photo"
              feedback="Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент" />
          </div> 

        </div>*/}





        {/* =======================третья колонка ================================*/}

        <div style={{ display: "flex", flexDirection: "column", border: "1px solid", padding: "15px" }}>

          <RangeSlider header="Pagination" range="5 000₽ - 10 000₽" />

          <ButtonFilled />
          <ButtonEmpty />

          <LinkLabel /> - ссылка пустое значение
          <ButtonFilledArrow />
          <Pagination header="Pagination" range="1 из каких-то там вариантов" />
        </div>




      <div/>







      </>
      );
};