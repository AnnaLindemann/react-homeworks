import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import BlockLogos from "../../components/blockLogos/BlockLogos";
import CategoryTitle from "../../components/categoryTitle/CategoryTitle";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import VacancyTitle from "../../components/vacancyTitle/VacancyTitle";
import VacancyCard from "../../components/vacancyCard/VacancyCard";
import Footer from "../../components/footer/Footer";

import Finance from "../../assets/icons/Finance.svg";
import Trancport from "../../assets/icons/Trancport.svg";
import Disign from "../../assets/icons/Disign.svg";
import Restaurant from "../../assets/icons/Restaurant.svg";
import Medicine from "../../assets/icons/Medicine.svg";
import Multimedia from "../../assets/icons/Multimedia.svg";
import Support from "../../assets/icons/Support.svg";
import Management from "../../assets/icons/Managment.svg";
import Sale from "../../assets/icons/Sale.svg";
import MoreCategories from "../../assets/icons/MoreCategories.svg";
import BlueCircle from "../../assets/icons/BlueCircle.svg";
import PinkCircle from "../../assets/icons/PinkCircle.svg";
import GreenCircle from "../../assets/icons/GreenCircle.svg";
import OrangeCircle from "../../assets/icons/OrangeCircle.svg";
import RedCircle from "../../assets/icons/RedCircle.svg";
import BlackCircle from "../../assets/icons/BlackCircle.svg";
import SonyVacancy from "../../assets/icons/SonyVacancy.svg";
import FacebookVacancy from "../../assets/icons/FacebookVacancy.svg";
import ColaVacancy from "../../assets/icons/ColaVacancy.svg";
import VacancyBtn from "../../components/vacancyBtn/VacancyBtn";

const categories = [
  {
    id: "Fin",
    logo: Finance,
    title: "Финансы",
  },
  {
    id: "Tran",
    logo: Trancport,
    title: "Грузоперевозки",
  },
  {
    id: "Dis",
    logo: Disign,
    title: "Дизайн",
  },
  {
    id: "Res",
    logo: Restaurant,
    title: "Ресторанный бизнес",
  },
  {
    id: "Med",
    logo: Medicine,
    title: "Медицина",
  },
  {
    id: "Mult",
    logo: Multimedia,
    title: "Мультимедиа",
  },
  {
    id: "Sup",
    logo: Support,
    title: "Служба поддержки",
  },
  {
    id: "Man",
    logo: Management,
    title: "Менеджмент",
  },
  {
    id: "Sale",
    logo: Sale,
    title: "Продажи",
  },
  {
    id: "MoreCat",
    logo: MoreCategories,
    title: "Больше категорий",
    special: true,
  },
];

const vacancy = [
  {
    id: "finVac",
    circle: BlueCircle,
    title: "Финансы",
    name: "Менеджер по управлению финансами в крупной компании",
    city: "Осака, Япония",
    logo: SonyVacancy,
    visit: "Sony, 3 дня назад",
  },
  {
    id: "SaleVac",
    circle: PinkCircle,
    title: "Продажи",
    name: "Специалист по продажам",
    city: "Коясан, Япония",
    logo: FacebookVacancy,
    visit: "Facebook, 7 дней назад",
  },
  {
    id: "SupVac",
    circle: GreenCircle,
    title: "Служба поддержки",
    name: "Оператор колл центра",
    city: "Томаму, Япония",
    logo: ColaVacancy,
    visit: "CocaCola, 1 день назад",
  },
  {
    id: "MultVac",
    circle: OrangeCircle,
    title: "Мультимедиа",
    name: "Системный администратор",
    city: "Токио, Япония",
    logo: SonyVacancy,
    visit: "Sony, 3 дня назад",
  },
  {
    id: "DisVac",
    circle: RedCircle,
    title: "Дизайн",
    name: "Дизайнер интерьера в профессиональную студию в центре города",
    city: "Йокогама, Япония",
    logo: FacebookVacancy,
    visit: "Facebook, 7 дней назад",
  },
  {
    id: "TranVac",
    circle: BlackCircle,
    title: "Грузоперевозки",
    name: "Водитель на дальние дистанции",
    city: "Кобе, Япония",
    logo: ColaVacancy,
    visit: "CocaCola, 1 день назад",
  },
];

function Main() {
  return (
    <>
      <Header />
      <SearchBar />
      <BlockLogos />
      <CategoryTitle />
      <div className={styles.containerCard}>
        {categories.map((cat) => {
          return (
            <CategoryCard
              key={cat.id}
              logo={cat.logo}
              title={cat.title}
              isSpecial={!!cat.special}
            />
          );
        })}
      </div>
      <VacancyTitle />
      <div className={styles.vacCont}>
        {vacancy.map((vac) => {
          return <VacancyCard key={vac.id} {...vac} />;
        })}
      </div>
      <VacancyBtn />
      <Footer />
    </>
  );
}

export default Main;
