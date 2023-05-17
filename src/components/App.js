
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
import RegistrationCard from "./RegistrationCard/RegistrationCard"
import LogIn from "./LogIn/LogIn"
import Conteiner from "./Conteiner/Conteiner"
import LinkDropdown from "./LinkDropdown/LinkDropdown"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
// ================================================
import React, {useState, useEffect} from "react";
import styles from './App.module.css';
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Registration from "./Registration/Registration"
import SignIn from "./SignIn/SignIn"
// import {BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// =======================================

export default function App(props) {
  // const [apartments, setApartments] = useState([]);//храняться все апартаменты
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);// состояние для текущей страницы которую необходимо отображать
  // const [apartmentsPerPage] = useState(12);// колличество элементов которые будем показывать на одной странице

  const listRules = ["Нельзя с питомцами", "Без вечеринок и мероприятий", "Время прибытия — после 13:00, а выезд до 12:00",];//список правил

  return (
    <BrowserRouter>{/* обрамляем все приложение этим тегом для  того чтобы работали теги Route*/}
      <div className={styles.wrapper}>
        <Header />
        <Pagination/>
        <Navbar />{/* вместо  Navbar сделать отклик на компонент регистрации и входа, так вообще можно?*/}
        <Footer />

        <div className={styles.w}>
          <Routes>
            <Route path="/registration" element={<Registration />} />{/* специальная компонента от реакта которая позволяет сделать маршрут */}
            <Route path="/signIn" element={<SignIn />} />
          </Routes>{/* роут отрисует каждую компоненту когда будет нужно */}
        </div>


        {/* CSS попытка сделать одну страницу 📍*/}
        {/*<Header/> заголовок внутри есть компонент  <Conteiner/>*/}
        {/*<Main/> контент */}
        {/*<Footer/> подвал */}

        {/* ================================================================== */}
       
        {/* <ListOfRules listRules={listRules} header="Правила"/>
         <StarRating aCount={6} aBigCount={3}/> */}
        {/*  */}

        {/* =======================карточки=========================== */}

        {/*  <RegistrationCard /> */}
        {/*  <LogIn/> */}
        {/* <BoxCards /> */}
        {/* <RoomCard />- пустое значение
       <Calendar />- заглушка*/}


        {/* <Dropdown /> - такой же элемент как NewDropdown, только не работает кнопка применить:( не знаю есть он гдето в проекте поэтому не удаляю */}


        {/* ======================= 1 первая колонка ================================*/}
        {/* <Counter />
      <HeadersCards name="Заголовок" />
      <Input placeholder="Email" type="email" header="Данные для входа в сервис" />
      <Input placeholder="Парль" type="password" />

      <NewDropdown header="гости" />

      <InputDate placeholder="ДД.ММ.ГГГГ" type="date" header="дата рождения" />

      <div style={{ display: "flex", flexDirection: "row", }}>
        <InputArrivalAndDeparture placeholder="ДД.ММ.ГГГГ" type="date" header="прибытие" />
        <InputArrivalAndDeparture placeholder="ДД.ММ.ГГГГ" type="date" header="выезд" />
      </div> */}

        {/* <FullDateOfStay placeholder="19 авг - 23 авг" header="Даты пребывания в отеле" type="text" />
      
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
      </div> */}
        {/* ===============================================================================средняя колонка ====================================================================================*/}
        {/* <Checkbox header="Правила дома"
        check1="Можно курить"
        check2="Можно с питомцами"
        check3="Можно пригласить гостей (до 10 человек)" />
      <Radio header1="Мужчина"
        header2="Женщина" />
      <Toggle header="Получать спецпредложения" />
      <LikeButton />================этот🔴
      
      <Features header="доступность"
        title1="Широкий коридор"
        description1="Ширина коридоров в номере не менее 91 см."
        title2="Помощник для инвалидов"
        description2="На 1 этаже вас встретит специалист  и проводит до номера." />
      
      <div>
        <UserReviews header="Отзывы посетителей номера" name="Мурад Сарафанов" date="5 дней назад"
          src="https://bipbap.ru/wp-content/uploads/2021/11/1619541010_52-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-57.jpg"
          alt="user's photo"
          feedback="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей." />

        <UserReviews name="Патрисия Стёклышкова" date="Неделю назад"
          src="https://avatars.dzeninfra.ru/get-zen_doc/4460346/pub_6085d3c1e2c7114111efc2a2_6085e4803b735b52f85124ce/scale_1200"
          alt="user's photo"
          feedback="Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент" />
      </div>  */}
        {/* ============================================================================третья колонка ================================================================================*/}
        {/* <RangeSlider header="диапазон цены" range="5 000₽ - 10 000₽" clarification="Стоимость за сутки пребывания в номере" />
        <ButtonFilled name="CLICK ME" />
        <ButtonEmpty name="CLICK ME" /> 
        <ButtonClearOrApply name="применить/очистить" />
        <ButtonFilledArrow name="перейти к оплате" />
        <Pagination range="1 – 12 из 100+ вариантов аренды" /> */}


      </div>
    </BrowserRouter>
  );
};