import ru from "vuetify/src/locale/ru";

const locale = {
  $vuetify: { ...ru },
  ru: "RU",
  kk: "KZ",
  ru_KZ: "Русский",
  kk_KZ: "Казахский",
  hello: "Privet",
  formValidator: {
    required: "Поле, обязательное для заполнения",
    stringMax: "Максимальная длина строки {max} символов",
    stringMin: "Минимальная длина строки {min} символов",
    bin: "Неверный формат БИН",
    iin: "Неверный формат ИИН",
    email: "Введён некорректный email",
    phone: "Неправильный формат номера телефона",
  },
};

export default locale;
