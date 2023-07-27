const images = [
  {
    author: "Павел Федотов",
    name: "Сватовство майора",
    year: "1852",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/0.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/0full.jpg",
  },
  {
    author: "Эдгар Дега",
    name: "Голубые танцовщицы",
    year: "1897",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/1.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/1full.jpg",
  },
  {
    author: "Веронезе",
    name: "Пир в доме Левия",
    year: "1563",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/2.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/2full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Иван Грозный и сын его Иван",
    year: "1885",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/3.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/3full.jpg",
  },
  {
    author: "Константин Маковский",
    name: "Портрет графини Софьи",
    year: "1890",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/4.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/4full.jpg",
  },
  {
    author: "Василий Перов",
    name: "Приезд гувернантки в купеческий дом",
    year: "1866",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/5.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/5full.jpg",
  },
  {
    author: "Микеланджело",
    name: "Сотворение Адама",
    year: "1511",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/6.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/6full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Прогулка в Булонском лесу",
    year: "1873",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/7.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/7full.jpg",
  },
  {
    author: "Ян Вермеер",
    name: "Хозяйка и служанка",
    year: "1667",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/8.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/8full.jpg",
  },
  {
    author: "Василий Поленов",
    name: "Московский дворик",
    year: "1877",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/9.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/9full.jpg",
  },
  {
    author: "Фёдор Васильев",
    name: "Мокрый луг",
    year: "1872",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/10.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/10full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Проводы новобранца",
    year: "1879",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/11.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/11full.jpg",
  },
  {
    author: "Веронезе",
    name: "Марс и Венера",
    year: "1560",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/12.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/12full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Аленушка",
    year: "1881",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/13.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/13full.jpg",
  },
  {
    author: "Клод Лоррен",
    name: "Отплытие святой Урсулы",
    year: "1614",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/14.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/14full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Вечорници",
    year: "1881",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/15.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/15full.jpg",
  },
  {
    author: "Жан Фрагонар",
    name: "Качели",
    year: "1767",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/16.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/16full.jpg",
  },
  {
    author: "Архип Куинджи",
    name: "Берёзовая роща",
    year: "1879",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/17.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/17full.jpg",
  },
  {
    author: "Пабло Пикассо",
    name: "Герника",
    year: "1937",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/18.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/18full.jpg",
  },
  {
    author: "Поль Гоген",
    name: "Откуда мы пришли? Кто мы? Куда мы идём?",
    year: "1898",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/19.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/19full.jpg",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Мадонна с четками",
    year: "1655",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/20.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/20full.jpg",
  },
  {
    author: "Питер Брейгель",
    name: "Фламандские пословицы",
    year: "1559",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/21.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/21full.jpg",
  },
  {
    author: "Ян ван Эйк",
    name: "Портрет четы Арнольфини",
    year: "1434",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/22.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/22full.jpg",
  },
  {
    author: "Питер Брейгель",
    name: "Избиение младенцев",
    year: "1567",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/23.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/23full.jpg",
  },
  {
    author: "Константин Маковский",
    name: "Дети, бегущие от грозы",
    year: "1872",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/24.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/24full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Даная",
    year: "1647",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/25.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/25full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Мадонна в кресле",
    year: "1514",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/26.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/26full.jpg",
  },
  {
    author: "Василий Суриков",
    name: "Взятие снежного городка",
    year: "1891",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/27.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/27full.jpg",
  },
  {
    author: "Иван Шишкин",
    name: "Ручей в берёзовом лесу",
    year: "1883",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/28.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/28full.jpg",
  },
  {
    author: "Василий Суриков",
    name: "Покорение Сибири Ермаком Тимофеевичем",
    year: "1895",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/29.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/29full.jpg",
  },
  {
    author: "Владимир Боровиковский",
    name: "Портрет Лопухиной",
    year: "1797",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/30.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/30full.jpg",
  },
  {
    author: "Рене Магритт",
    name: "Сын человеческий",
    year: "1964",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/31.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/31full.jpg",
  },
  {
    author: "Веласкес",
    name: "Венера с зеркалом",
    year: "1651",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/32.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/32full.jpg",
  },
  {
    author: "Иван Богданов",
    name: "За расчётом",
    year: "1890",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/33.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/33full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Христос и грешница",
    year: "1644",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/34.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/34full.jpg",
  },
  {
    author: "Джон Уильям Уотерхаус",
    name: "Волшебница Шалот",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/35.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/35full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Большие купальщицы",
    year: "1887",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/36.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/36full.jpg",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Мальчик с собакой",
    year: "1650",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/37.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/37full.jpg",
  },
  {
    author: "Василий Перов",
    name: "Тройка",
    year: "1866",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/38.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/38full.jpg",
  },
  {
    author: "Николай Богданов-Бельский",
    name: "Устный счёт",
    year: "1895",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/39.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/39full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Три царевны подземного царства",
    year: "1884",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/40.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/40full.jpg",
  },
  {
    author: "Анри Матисс",
    name: "Танец",
    year: "1910",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/41.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/41full.jpg",
  },
  {
    author: "Эдвард Мунк",
    name: "Мадонна",
    year: "1894",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/42.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/42full.jpg",
  },
  {
    author: "Марк Шагал",
    name: "Прогулка",
    year: "1918",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/43.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/43full.jpg",
  },
  {
    author: "Василий Перов",
    name: "Сельский крестный ход на Пасхе",
    year: "1861",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/44.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/44full.jpg",
  },
  {
    author: "Иероним Босх",
    name: "Страшный суд",
    year: "1504",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/45.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/45full.jpg",
  },
  {
    author: "Карл Лемох",
    name: "Варька",
    year: "1893",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/46.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/46full.jpg",
  },
  {
    author: "Жан Фрагонар",
    name: "Поцелуй украдкой",
    year: "1788",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/47.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/47full.jpg",
  },
  {
    author: "Франсуа Буше",
    name: "Венера, утешающая Амура",
    year: "1751",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/48.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/48full.jpg",
  },
  {
    author: "Иван Шишкин",
    name: "Корабельная роща",
    year: "1898",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/49.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/49full.jpg",
  },
  {
    author: "Густав Климт",
    name: "Золотая Адель",
    year: "1907",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/50.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/50full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Богатыри",
    year: "1898",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/51.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/51full.jpg",
  },
  {
    author: "Вильгельм фон Каульбах",
    name: "Разрушение Иерусалима",
    year: "1846",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/52.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/52full.jpg",
  },
  {
    author: "Веронезе",
    name: "Брак в Кане Галилейской",
    year: "1562",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/53.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/53full.jpg",
  },
  {
    author: "Андрей Рублев",
    name: "Троица",
    year: "1411",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/54.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/54full.jpg",
  },
  {
    author: "Василий Суриков",
    name: "Утро стрелецкой казни",
    year: "1881",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/55.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/55full.jpg",
  },
  {
    author: "Тициан",
    name: "Вакханалия",
    year: "1526",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/56.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/56full.jpg",
  },
  {
    author: "Веласкес",
    name: "Вилла Медичи в Риме. Полдень",
    year: "1630",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/57.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/57full.jpg",
  },
  {
    author: "Эдуард Мане",
    name: "Ланч на траве",
    year: "1863",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/58.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/58full.jpg",
  },
  {
    author: "Сальвадор Дали",
    name: "Постоянство памяти",
    year: "1931",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/59.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/59full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Две девушки",
    year: "1892",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/60.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/60full.jpg",
  },
  {
    author: "Александр Маковский",
    name: "Надоела",
    year: "1897",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/61.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/61full.jpg",
  },
  {
    author: "Веласкес",
    name: "Менины",
    year: "1656",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/62.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/62full.jpg",
  },
  {
    author: "Антонис ван Дейк",
    name: "Самсон и Далила",
    year: "1628",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/63.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/63full.jpg",
  },
  {
    author: "Пабло Пикассо",
    name: "Девочка на шаре",
    year: "1905",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/64.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/64full.jpg",
  },
  {
    author: "Джованни Беллини",
    name: "Пир богов",
    year: "1514",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/65.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/65full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Дама с горностаем",
    year: "1490",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/66.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/66full.jpg",
  },
  {
    author: "Веласкес",
    name: "Бахус",
    year: "1628",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/67.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/67full.jpg",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Непорочное зачатие",
    year: "1678",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/68.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/68full.jpg",
  },
  {
    author: "Теодор Жерико",
    name: 'Плот "Медузы"',
    year: "1819",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/69.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/69full.jpg",
  },
  {
    author: "Иван Шишкин",
    name: "Утро в сосновом лесу",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/70.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/70full.jpg",
  },
  {
    author: "Жан Этьен Лиотар",
    name: "Шоколадница",
    year: "1745",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/71.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/71full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Автопортрет с Саскией",
    year: "1635",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/72.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/72full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Крестный ход",
    year: "1883",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/73.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/73full.jpg",
  },
  {
    author: "Алексей Венецианов",
    name: "Спящий пастушок",
    year: "1826",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/74.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/74full.jpg",
  },
  {
    author: "Иван Богданов",
    name: "Новичок",
    year: "1893",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/75.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/75full.jpg",
  },
  {
    author: "Анри де Тулуз-Лотрек",
    name: "Угол Мулен де ла Галет",
    year: "1892",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/76.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/76full.jpg",
  },
  {
    author: "Тициан",
    name: "Кающаяся Марина Магдалина",
    year: "1565",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/77.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/77full.jpg",
  },
  {
    author: "Веласкес",
    name: "Инфанта Маргарита",
    year: "1654",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/78.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/78full.jpg",
  },
  {
    author: "Тициан",
    name: "Динарий Кесаря",
    year: "1516",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/79.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/79full.jpg",
  },
  {
    author: "Карл Брюллов",
    name: "Всадница",
    year: "1832",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/80.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/80full.jpg",
  },
  {
    author: "Василий Верещагин",
    name: "Апофеоз войны",
    year: "1817",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/81.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/81full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Благовещение",
    year: "1475",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/82.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/82full.jpg",
  },
  {
    author: "Алексей Саврасов",
    name: "Грачи прилетели",
    year: "1871",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/83.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/83full.jpg",
  },
  {
    author: "Тициан",
    name: "Любовь земная и Любовь небесная",
    year: "1516",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/84.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/84full.jpg",
  },
  {
    author: "Жан Батист Грёз",
    name: "Деревенская помолвка",
    year: "1761",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/85.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/85full.jpg",
  },
  {
    author: "Пабло Пикассо",
    name: "Авиньонские девицы",
    year: "1907",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/86.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/86full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Бурлаки на Волге",
    year: "1873",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/87.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/87full.jpg",
  },
  {
    author: "Михаил Нестеров",
    name: "Видение отроку Варфоломею",
    year: "1890",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/88.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/88full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Мадонна Бельведерская",
    year: "1506",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/89.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/89full.jpg",
  },
  {
    author: "Василий тропинин",
    name: "Девушка с горшком роз",
    year: "1850",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/90.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/90full.jpg",
  },
  {
    author: "Караваджо",
    name: "Лютнист",
    year: "1596",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/91.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/91full.jpg",
  },
  {
    author: "Василий Перов",
    name: "Охотники на привале",
    year: "1871",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/92.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/92full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Тайная вечеря",
    year: "1498",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/93.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/93full.jpg",
  },
  {
    author: "Жан Батист Грёз",
    name: "Избалованное дитя",
    year: "1765",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/94.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/94full.jpg",
  },
  {
    author: "Адольф Вильям Бугро",
    name: "Волна",
    year: "1896",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/95.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/95full.jpg",
  },
  {
    author: "Кузьма Петров-Водкин",
    name: "Купание красного коня",
    year: "1912",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/96.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/96full.jpg",
  },
  {
    author: "Густав Климт",
    name: "Поцелуй",
    year: "1908",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/97.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/97full.jpg",
  },
  {
    author: "Иван Шишкин",
    name: "Рожь",
    year: "1878",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/98.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/98full.jpg",
  },
  {
    author: "Жан-Леон Жером",
    name: "Бой гладиаторов",
    year: "1872",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/99.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/99full.jpg",
  },
  {
    author: "Василий Суриков",
    name: "Боярыня Морозова",
    year: "1887",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/100.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/100full.jpg",
  },
  {
    author: "Исаак Левитан",
    name: "Над вечным покоем",
    year: "1894",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/101.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/101full.jpg",
  },
  {
    author: "Гейнсборо",
    name: "Дама в голубом",
    year: "1780",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/102.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/102full.jpg",
  },
  {
    author: "Алексей Венецианов",
    name: "На пашне. Весна",
    year: "1820",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/103.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/103full.jpg",
  },
  {
    author: "Тициан",
    name: "Саломея",
    year: "1515",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/104.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/104full.jpg",
  },
  {
    author: "Василий Кандинский",
    name: "Композиция VIII",
    year: "1923",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/105.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/105full.jpg",
  },
  {
    author: "Василий Поленов",
    name: "В парке",
    year: "1874",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/106.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/106full.jpg",
  },
  {
    author: "Луи Лагрене",
    name: "Марс и Венера",
    year: "1770",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/107.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/107full.jpg",
  },
  {
    author: "Сальвадор Дали",
    name: "Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения",
    year: "1944",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/108.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/108full.jpg",
  },
  {
    author: "Ян Вермеер",
    name: "Девушка с жемчужной серёжкой",
    year: "1665",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/109.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/109full.jpg",
  },
  {
    author: "Анри Руссо",
    name: "Спящая цыганка",
    year: "1897",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/110.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/110full.jpg",
  },
  {
    author: "Василий Поленов",
    name: "Переправа через реку",
    year: "1872",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/111.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/111full.jpg",
  },
  {
    author: "Эдвард Мунк",
    name: "Крик",
    year: "1893",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/112.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/112full.jpg",
  },
  {
    author: "Карл Брюллов",
    name: "Последний день Помпеи",
    year: "1833",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/113.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/113full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Летний пейзаж",
    year: "1879",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/114.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/114full.jpg",
  },
  {
    author: "Ян Вермеер",
    name: "Молочница",
    year: "1660",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/115.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/115full.jpg",
  },
  {
    author: "Иван Айвазовский",
    name: "Девятый вал",
    year: "1850",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/116.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/116full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Подсолнухи",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/117.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/117full.jpg",
  },
  {
    author: "Валентин Серов",
    name: "Девочка с персиками",
    year: "1887",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/118.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/118full.jpg",
  },
  {
    author: "Караваджо",
    name: "Обращение Савла",
    year: "1601",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/119.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/119full.jpg",
  },
  {
    author: "Альбрехт Дюрер",
    name: "Праздник венков из роз",
    year: "1506",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/120.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/120full.jpg",
  },
  {
    author: "Эль Греко",
    name: "Изгнание торгующих из храма",
    year: "1600",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/121.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/121full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Приготовление к экзамену",
    year: "1864",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/122.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/122full.jpg",
  },
  {
    author: "Исаак Левитан",
    name: "Март",
    year: "1895",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/123.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/123full.jpg",
  },
  {
    author: "Адольф Вильям Бугро",
    name: "Девушка и Амур",
    year: "1880",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/124.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/124full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мадонна Литта",
    year: "1491",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/125.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/125full.jpg",
  },
  {
    author: "Казимир Малевич",
    name: "Черный квадрат",
    year: "1915",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/126.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/126full.jpg",
  },
  {
    author: "Эль Греко",
    name: "Апостолы Петр и Павел",
    year: "1592",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/127.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/127full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Витязь на распутье",
    year: "1878",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/128.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/128full.jpg",
  },
  {
    author: "Константин Маковский",
    name: "Боярский свадебный пир",
    year: "1883",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/129.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/129full.jpg",
  },
  {
    author: "Эжен Делакруа",
    name: "Свобода, ведущая народ",
    year: "1830",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/130.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/130full.jpg",
  },
  {
    author: "Василий Поленов",
    name: "Бабушкин сад",
    year: "1878",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/131.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/131full.jpg",
  },
  {
    author: "Анри Матисс",
    name: "Семейный портрет",
    year: "1911",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/132.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/132full.jpg",
  },
  {
    author: "Константин Маковский",
    name: "Гадание",
    year: "1890",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/133.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/133full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Мост в Шату",
    year: "1875",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/134.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/134full.jpg",
  },
  {
    author: "Сандро Боттичелли",
    name: "Весна",
    year: "1482",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/135.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/135full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Зонтики",
    year: "1886",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/136.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/136full.jpg",
  },
  {
    author: "Гюстав Курбе",
    name: "Мастерская художника",
    year: "1855",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/137.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/137full.jpg",
  },
  {
    author: "Василий Поленов",
    name: "Деревня Окулова гора",
    year: "1860",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/138.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/138full.jpg",
  },
  {
    author: "Константин Маковский",
    name: "Перемещение ковра Мухаммеда из Мекки в Каир",
    year: "1875",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/139.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/139full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Бал в Мулен де ла Галетт",
    year: "1876",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/140.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/140full.jpg",
  },
  {
    author: "Иван Крамской",
    name: "Неизвестная",
    year: "1883",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/141.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/141full.jpg",
  },
  {
    author: "Веласкес",
    name: "Кузница вулкана",
    year: "1630",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/142.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/142full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Запорожцы",
    year: "1891",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/143.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/143full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Дама с единорогом",
    year: "1506",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/144.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/144full.jpg",
  },
  {
    author: "Александр Иванов",
    name: "Явление Христа народу",
    year: "1857",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/145.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/145full.jpg",
  },
  {
    author: "Эдуард Мане",
    name: "Женщина с кувшином",
    year: "1858",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/146.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/146full.jpg",
  },
  {
    author: "Тициан",
    name: "Конный портрет Карла V",
    year: "1548",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/147.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/147full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Завтрак гребцов",
    year: "1881",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/148.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/148full.jpg",
  },
  {
    author: "Карл Брюллов",
    name: "Итальянский полдень",
    year: "1827",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/149.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/149full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Царь Иван Васильевич Грозный",
    year: "1896",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/150.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/150full.jpg",
  },
  {
    author: "Питер Брейгель",
    name: "Охотники на снегу",
    year: "1565",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/151.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/151full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Ковер-самолёт",
    year: "1880",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/152.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/152full.jpg",
  },
  {
    author: "Марк Шагал",
    name: "Я и деревня",
    year: "1911",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/153.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/153full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мона Лиза",
    year: "1505",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/154.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/154full.jpg",
  },
  {
    author: "Франческо Баккьякка",
    name: "Мадонна с младенцем",
    year: "1520",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/155.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/155full.jpg",
  },
  {
    author: "Жак-Луи Давид",
    name: "Клятва Горациев",
    year: "1784",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/156.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/156full.jpg",
  },
  {
    author: "Альбрехт Дюрер",
    name: "Адам и Ева",
    year: "1507",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/157.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/157full.jpg",
  },
  {
    author: "Бартоломео Мурильо",
    name: "Явление и дар Богородицы",
    year: "1655",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/158.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/158full.jpg",
  },
  {
    author: "Василий Перов",
    name: "Птицелов",
    year: "1870",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/159.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/159full.jpg",
  },
  {
    author: "Караваджо",
    name: "Отдых на пути в Египет",
    year: "1596",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/160.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/160full.jpg",
  },
  {
    author: "Франциско Гоя",
    name: "Расстрел повстанцев",
    year: "1808",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/161.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/161full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Триумф Галатеи",
    year: "1512",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/162.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/162full.jpg",
  },
  {
    author: "Михаил Врубель",
    name: "Демон сидящий",
    year: "1890",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/163.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/163full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Ирисы",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/164.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/164full.jpg",
  },
  {
    author: "Поль Деларош",
    name: "Казнь Джейн Грей",
    year: "1833",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/165.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/165full.jpg",
  },
  {
    author: "Джон Констебл",
    name: "Вид на собор в Солсбери из епископского сада",
    year: "1823",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/166.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/166full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Звёздная ночь",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/167.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/167full.jpg",
  },
  {
    author: "Франсуа Буше",
    name: "Четыре сезона - Весна",
    year: "1755",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/168.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/168full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Мадонна с розой",
    year: "1518",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/169.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/169full.jpg",
  },
  {
    author: "Василий Тропинин",
    name: "Кружевница",
    year: "1823",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/170.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/170full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Пир Вальтасара",
    year: "1635",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/171.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/171full.jpg",
  },
  {
    author: "Василий Суриков",
    name: "Переход Суворова через Альпы",
    year: "1899",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/172.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/172full.jpg",
  },
  {
    author: "Исаак Левитан",
    name: "Золотая осень",
    year: "1895",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/173.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/173full.jpg",
  },
  {
    author: "Архип Куинджи",
    name: "На острове Валааме",
    year: "1873",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/174.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/174full.jpg",
  },
  {
    author: "Веласкес",
    name: "Сдача Бреды",
    year: "1635",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/175.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/175full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Не ждали",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/176.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/176full.jpg",
  },
  {
    author: "Франсуа Буше",
    name: "Купание Дианы",
    year: "1742",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/177.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/177full.jpg",
  },
  {
    author: "Марианна Верёвкина",
    name: "Муравейник",
    year: "1916",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/178.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/178full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Портрет Жанны Самари",
    year: "1877",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/179.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/179full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Садко",
    year: "1876",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/180.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/180full.jpg",
  },
  {
    author: "Архип Куинджи",
    name: "Лунная ночь на Днепре",
    year: "1880",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/181.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/181full.jpg",
  },
  {
    author: "Веласкес",
    name: "Поклонение волхвов",
    year: "1619",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/182.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/182full.jpg",
  },
  {
    author: "Николай Богданов-Бельский",
    name: "У дверей школы",
    year: "1897",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/183.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/183full.jpg",
  },
  {
    author: "Иероним Босх",
    name: "Сад земных наслаждений",
    year: "1510",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/184.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/184full.jpg",
  },
  {
    author: "Корреджо",
    name: "Даная",
    year: "1530",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/185.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/185full.jpg",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Похищение дочерей Левкиппа",
    year: "1618",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/186.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/186full.jpg",
  },
  {
    author: "Жан Энгр",
    name: "Большая одалиска",
    year: "1814",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/187.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/187full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Сикстинская Мадонна",
    year: "1520",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/188.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/188full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Похищение Европы",
    year: "1632",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/189.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/189full.jpg",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Похищение Орфии Бореем",
    year: "1615",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/190.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/190full.jpg",
  },
  {
    author: "Архип Куинджи",
    name: "Украинская ночь",
    year: "1876",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/191.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/191full.jpg",
  },
  {
    author: "Эдгар Дега",
    name: "Танцовщицы у станка",
    year: "1877",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/192.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/192full.jpg",
  },
  {
    author: "Алексей Венецианов",
    name: "На жатве. Лето",
    year: "1827",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/193.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/193full.jpg",
  },
  {
    author: "Пьер Огюст Ренуар",
    name: "Две сестры",
    year: "1881",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/194.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/194full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Ночной дозор",
    year: "1642",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/195.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/195full.jpg",
  },
  {
    author: "Эдуард Мане",
    name: "Бар в «Фоли-Бержер»",
    year: "1882",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/196.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/196full.jpg",
  },
  {
    author: "Никола Пуссен",
    name: "Пейзаж с Полифемом",
    year: "1649",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/197.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/197full.jpg",
  },
  {
    author: "Питер Брейгель",
    name: "Притча о слепых",
    year: "1568",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/198.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/198full.jpg",
  },
  {
    author: "Виктор Васнецов",
    name: "Иван-царевич на Сером Волке",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/199.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/199full.jpg",
  },
  {
    author: "Сандро Боттичелли",
    name: "Рождение Венеры",
    year: "1486",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/200.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/200full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Мадонна в скалах",
    year: "1486",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/201.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/201full.jpg",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Любовники",
    year: "1916",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/202.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/202full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Автопортрет с перевязанным ухом",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/203.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/203full.jpg",
  },
  {
    author: "Клод Моне",
    name: "Впечатление. Восходящее солнце",
    year: "1882",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/204.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/204full.jpg",
  },
  {
    author: "Рембрандт",
    name: "Возвращение блудного сына",
    year: "1662",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/205.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/205full.jpg",
  },
  {
    author: "Караваджо",
    name: "Больной вакх",
    year: "1593",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/206.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/206full.jpg",
  },
  {
    author: "Иван Айвазовский",
    name: "Лунная дорожка",
    year: "1886",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/207.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/207full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Пшеничное поле с кипарисами",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/208.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/208full.jpg",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Мальчик и ворона",
    year: "1884",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/209.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/209full.jpg",
  },
  {
    author: "Ян Вермеер",
    name: "Астроном",
    year: "1668",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/210.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/210full.jpg",
  },
  {
    author: "Питер Пауль Рубенс",
    name: "Союз Земли и Воды",
    year: "1618",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/211.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/211full.jpg",
  },
  {
    author: "Клод Моне",
    name: "Стог сена в Живерни",
    year: "1886",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/212.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/212full.jpg",
  },
  {
    author: "Жан Фрагонар",
    name: "Задвижка",
    year: "1777",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/213.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/213full.jpg",
  },
  {
    author: "Марианна Верёвкина",
    name: "Осень, школа",
    year: "1907",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/214.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/214full.jpg",
  },
  {
    author: "Винсент ван Гог",
    name: "Ночное кафе в Арле",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/215.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/215full.jpg",
  },
  {
    author: "Клод Моне",
    name: "Пруд с кувшинками",
    year: "1899",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/216.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/216full.jpg",
  },
  {
    author: "Иван Айвазовский",
    name: "Буря",
    year: "1868",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/217.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/217full.jpg",
  },
  {
    author: "Ян Вермеер",
    name: "Кружевница",
    year: "1671",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/218.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/218full.jpg",
  },
  {
    author: "Карл Брюллов",
    name: "Автопортрет",
    year: "1848",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/219.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/219full.jpg",
  },
  {
    author: "Питер Брейгель",
    name: "Вавилонская башня",
    year: "1563",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/220.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/220full.jpg",
  },
  {
    author: "Поль Гоген",
    name: "Кафе в Арле",
    year: "1888",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/221.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/221full.jpg",
  },
  {
    author: "Иван Шишкин",
    name: "Сосновый бор",
    year: "1895",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/222.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/222full.jpg",
  },
  {
    author: "Клод Моне",
    name: "Завтрак на траве",
    year: "1865",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/223.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/223full.jpg",
  },
  {
    author: "Рафаэль",
    name: "Святой Георгий и дракон",
    year: "1506",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/224.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/224full.jpg",
  },
  {
    author: "Пабло Пикассо",
    name: "Любительница абсента",
    year: "1901",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/225.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/225full.jpg",
  },
  {
    author: "Эдгар Дега",
    name: "Перед репетицией",
    year: "1880",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/226.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/226full.jpg",
  },
  {
    author: "Николай Рерих",
    name: "Помни!",
    year: "1924",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/227.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/227full.jpg",
  },
  {
    author: "Илья Репин",
    name: "Стрекоза",
    year: "1884",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/228.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/228full.jpg",
  },
  {
    author: "Клод Моне",
    name: "Мост Ватерлоо, туман",
    year: "1903",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/229.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/229full.jpg",
  },
  {
    author: "Исаак Левитан",
    name: "Весна – большая вода",
    year: "1897",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/230.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/230full.jpg",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Первый урок",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/231.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/231full.jpg",
  },
  {
    author: "Иван Айвазовский",
    name: "Буря на море",
    year: "1873",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/232.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/232full.jpg",
  },
  {
    author: "Эдгар Дега",
    name: "Балетный класс",
    year: "1874",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/233.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/233full.jpg",
  },
  {
    author: "Николай Рерих",
    name: "Горная обитель",
    year: "1933",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/234.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/234full.jpg",
  },
  {
    author: "Леонардо да Винчи",
    name: "Святая Анна с Мадонной",
    year: "1510",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/235.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/235full.jpg",
  },
  {
    author: "Эль Греко",
    name: "Мальчик, зажигающий свечу",
    year: "1572",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/236.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/236full.jpg",
  },
  {
    author: "Пабло Пикассо",
    name: "Дружба",
    year: "1908",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/237.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/237full.jpg",
  },
  {
    author: "Аксели Галлен-Каллела",
    name: "Девушка на ветру",
    year: "1893",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/238.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/238full.jpg",
  },
  {
    author: "Иван Айвазовский",
    name: "Волна",
    year: "1889",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/239.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/239full.jpg",
  },
  {
    author: "Эжен Делакруа",
    name: "Автопортрет",
    year: "1837",
    preview:
      "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/240.jpg",
    full: "https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/240full.jpg",
  },
];

export default images;
