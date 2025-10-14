import { useState } from "react";
import styles from "./CitySelector.module.css";
const citiesData = [
  {
    id: "tokyo",
    name: "Токио",
    description:
      "Столица Японии с головокружительным скайлайном, небоскрёбами и видом на Фудзи в ясную погоду.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo_Skyline_(214472345).jpeg",
    facts: [
      "Токио — самый населённый мегаполис в мире.",
      "Здесь расположены знаковые районы — Синдзюку, Сибуя, Гиндза.",
      "Город славится сочетанием традиций и ультрасовременной архитектуры.",
    ],
  },
  {
    id: "kyoto",
    name: "Киото",
    description:
      "Историческая столица с храмами, пагодами и садами. Классический образ Японии.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu.jpg",
    facts: [
      "В Киото более 1600 буддийских храмов.",
      "Киёмидзу-дэра — одна из самых известных достопримечательностей.",
    ],
  },
  {
    id: "osaka",
    name: "Осака",
    description:
      "Деловая столица региона Кансай: кухня, ночная жизнь и, конечно, знаменитый замок.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/OsakaCastleM0783.jpg",
    facts: [
      "Осакский замок — символ города и важный объект эпохи объединения Японии.",
      "Город считают кулинарной столицей страны.",
    ],
  },
  {
    id: "hokkaido",
    name: "Хоккайдо",
    description:
      "Северный остров: снежные зимы, горы, горячие источники и виды на море.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Snowy_landscape_from_Mt._Hakodate_20231224.jpg",
    facts: [
      "Хоккайдо — один из лучших регионов для зимних видов спорта.",
      "Летом популярен благодаря цветущим полям (лаванда в Фурано).",
    ],
  },
  {
    id: "nagoya",
    name: "Нагоя",
    description:
      "Промышленный центр Тюбу и родина впечатляющего Нагойского замка.",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nagoya_Castle.jpg",
    facts: [
      "Один из ключевых центров автомобилестроения Японии.",
      "Замок известен позолоченными дельфинами (сятихоко) на крыше.",
    ],
  },
];

export default function CitySelector({ onSelect }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const id = event.target.value;
    setValue(id);
    const city = citiesData.find((c) => c.id === id) || null;
    onSelect?.(city);
  };

  return (
    <div className={styles.chooseContainer}>
      <label className={styles.chooseCity} htmlFor="city">
        Choose the city:
      </label>{" "}
      <select id="city" value={value} onChange={handleChange}>
        <option value="">Choose the city</option>
        {citiesData.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
