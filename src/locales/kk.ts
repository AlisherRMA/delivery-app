import ru from "./ru";

/**
 * Привязав тип объектов перевода их получится сделать
 * идентичными.
 *
 * Пример: добавили перевод в одном объекте, а в другом такого поля нет.
 * Тогда коммит не произойдет, так как проверка типов не пройдет
 */
const locale: Omit<typeof ru, "$vuetify"> = {
  ru: "RU",
  kk: "KZ",
  ru_KZ: "Русский",
  kk_KZ: "Казахский",
  hello: "kkPrivet",
  formValidator: {
    required: "Міндетті түрде толтырылуы қажет жол",
    stringMax: "Жолдың максималды ұзындығы {max} таңба",
    stringMin: "Жолдың минималды ұзындығы {min} таңба",
    bin: "БСН форматы қате",
    iin: "ЖСН форматы қате",
    email: "Қате email енгізілген",
    phone: "Неправильный формат номера телефона",
  },
  common: {
    attention: "kkВнимание",
    cancel: "kkОтмена",
    reload: "kkОбновить",
    close: "kkЗакрыть",
    save: "kk Сохранить",
    edit: "kk Редактировать",
    selectFilter: "kkВыбрать фильтр",
    applyFilter: "Применить фильтр",
    resetFilter: "Сбросить фильтр",
    binIin: "kkБИН/ИИН",
    bin: "kkБИН",
    iin: "ИИН",
    login: "kk Логин",
    lastName: "Фамилия",
    firstName: "Имя",
    middleName: "Отчество",
    email: "kk Email",
    emailInfo: "На него будет направлена ссылка<br/> для входа в Систему",
    mobileNumber: "Мобильный телефон",
    search: "kkПоиск",
    reject: "Отказать",
    approve: "Одобрить",
    backToTheList: "Вернуться к списку",
    wait: "Пожалуйста, подождите...",
    expand: "Развернуть",
    inDetail: "Подробно",
    swapPositions: `{2} {1}`,
    selectAddress: "Выберите населенный пункт",
    defaultErrorMessage: "Произошла ошибка. <br/> Обратитесь в Службу технической поддержки",
    exclude: "Исключить",
    searchResults: "Результаты поиска",
    selected: "Выбрано",
    add: "Добавить",
    select: "Выбрать",
    clickToSelectValue: "Нажмите, чтобы выбрать значение",
    dataSuccessfullySaved: "Данные успешно сохранены",
    changesSavedSuccessfully: "kk Изменения сохранены",
  },
  navigation: {
    managementOrgans: {
      name: "kk Органы управления МЖД",
      navName: "kk ОСИ / ПТ / КСК",
    },

    sem: {
      name: "kk Субъекты естественных монополий",
      navName: "kk СЕМ",
    },

    mjdModule: {
      name: "kk Многоквартирные жилые дома",
      navName: "kk МЖД",
    },

    requestsModule: {
      name: "kk Заявки",
      navName: "kk Заявки",
      requestsKsk: {
        name: "kk Регистрация КСК",
        navName: "kk Регистрация КСК",
      },
      requestsOsi: {
        name: "kk Регистрация ОСИ",
        navName: "kk Регистрация ОСИ",
      },
      requestsPt: {
        name: "kk Регистрация ПТ",
        navName: "kk Регистрация ПТ",
      },
    },

    analytics: {
      name: "kk Аналитика",
      navName: "kk Аналитика",
      analyticsMjd: {
        name: "kk Многоквартирные жилые дома",
        navName: "kk МЖД",
      },
      analyticsAddressRegister: {
        name: "kk Адресный регистр",
        navName: "kk Адресный регистр",
      },
      managementOrgansRequests: {
        name: "kk Органы управления",
        navName: "kk Органы управления",
      },
      analyticsRequests: {
        name: "kk Заявки",
        navName: "kk Заявки",
      },
    },

    adminModule: {
      name: "kk Администрирование",
      navName: "kk Администрирование",
      usersManagement: {
        name: "kk Управление пользователями",
        navName: "kk Управление пользователями",
      },
      referenceInfo: {
        name: "kk Нормативно-справочная информация",
        navName: "kk НСИ",
      },
    },

    employees: {
      name: "Мои сотрудники",
      navName: "Мои сотрудники",
    },

    managementOrgan: {
      name: "Сведения по ОУ",
      navName: "Сведения по ОУ",
    },

    managementOrganRequests: {
      name: "Мои заявки",
      navName: "Мои заявки",
    },

    managementOrganRequestDetails: {
      name: "Мои заявки",
      navName: "Мои заявки",
    },

    managementOrganHouse: {
      name: "Сведения по ОУ",
    },

    profile: {
      name: "Профиль",
    },
  },

  updateСhecker: {
    message:
      'Доступна новая версия ИС Централизованного сбора.<br /><br /> Обновить? <br /><br />Нажмите "Обновить", чтобы перезагрузить страницу. Все введённые данные при этом будут утеряны.',
  },
  maintenanceWorks:
    '<center><b>Внимание!</b> <span style="font-weight: 400"> <br /><br /> Ведутся технические работы. <br /><br /> Приносим извинения <br /> за доставленные неудобства.</span> </center>',
  header: {
    info:
      "kkИнформационная система централизованного сбора и хранения <br /> электронных информационных ресурсов в сфере <br /> жилищных отношений и жилищно-коммунального хозяйства",
  },
  governingModule: {
    name: "kkОрганы управления МЖД",
    navName: "kkОСИ / ПТ / КСК",
    organType: "Тип органа управления",
    selectOrganType: "kkВыберите тип ОУ",
    searchPlaceholder: "Введите БИН/ИИН или наименование ОУ",
    housesCount: "Количество домов",
    registrationDate: "Дата регистрации",
    tableHeaders: {
      iinBin: "БИН ОСИ, КСК / ИИН председателя ПТ",
      type: "Тип",
      name: "Наименование",
      locality: "Населенный пункт",
      housesCount: "Количество домов",
      registrationDate: "Дата регистрации",
      closeDate: "Дата закрытия",
    },
    govOrgTypes: {
      all: "Все",
      OSI: "ОСИ",
      PT: "ПТ",
      KSK: "КСК",
    },
    myRequests: {
      sendRequest: "Подать заявку на внесение изменений по ОУ",
      sendRequestTooltip: "Подать заявку на внесение изменений по многоквартирному жилому дому органа управления",
      tableHeaders: {
        type: "Тип заявки",
        status: "Статус заявки",
        date: "Дата заявки",
      },
    },
    integrators: {
      name: "Интеграторы",
      deleteConfirmation: "Вы действительно хотите исключить <br /> из своего списка интеграторов <br /> {name}?",
      integratorsRef: "Справочник “Интеграторы”",
      enterIntegratorsName: "Введите наименование интегратора",
      integratorsName: "Наименование интегратора",
      selectIntegrator: "Выберите интегратор",
    },
  },
  cemModule: {
    name: "kkСубъекты естественных монополий",
    navName: "kkСЕМ",
  },
  mjdModule: {
    name: "kkМногоквартирные жилые дома",
    navName: "kkМЖД",
    generalInfo: {
      title: "Общие сведения",
    },
    managementOrgans: {
      title: "ОУ",
      count: "Органы управления в доме",
    },
    homePassport: {
      title: "Паспорт дома",
    },
    documents: {
      title: "Документы",
    },
    entrances: {
      title: "Подъезды",
    },
    elevators: {
      title: "Лифты",
    },
    atp: {
      title: "АТП",
    },
    meters: {
      title: "ПУ",
    },
    rooms: {
      title: "Помещения",
      doesntHaveAccess: "Помещение не закреплено за Вашим ОУ. <br /> Подробная информация по помещению недоступна",
      roomTypes: {
        all: "Все",
        appartments: "Квартиры",
        nonResidentals: "Нежилые помещения",
        parkingSpaces: "Парковочные места",
      },
    },
    heatSupply: {
      title: "Теплоснабжение",
    },
  },
  requestsModule: {
    name: "kkЗаявки",
    pendingRequestsCount: "kkВсего на рассмотрении",
    approvedRequestsCount: "kkВсего одобрено",
    rejectedRequestsCount: "kkВсего отказано",
    locality: "kkАдрес",
    requestNumberAndDate: '<span class="darkGrey--text mr-2">№ заявки:</span> {number} <span class="darkGrey--text mx-2">от</span> {date}',
    useAddressRegister: "kkДля выбора населенного пункта воспользуйтесь адресным регистром",
    orgName: "kkНаименование",
    housesCount: "kkКоличество домов",
    flatsCount: "kkКоличество помещений",
    inRequest: "В заявке",
    total: "Общее",
    totalFlats: "Общее количество помещений",
    unselected: "Не выбранные при подаче заявки",
    appartments: "Квартиры",
    nonResidentals: "Нежилые помещения",
    parkingSpaces: "Парковочные места",
    intersections: "Пересечения",
    intersectsWithOtherManagementOrgans: "Пересекаются с другими ОСИ/ПТ/КСК",
    intetsectsInRequests: "Пересекаются в заявках",
    vacant: "Свободные",
    parkingSpace: "П.М. - парковочное место",
    nonResidental: "Н.П. - нежилое помещенние",
    roomsInRequest: "Помещения в заявке",
    vacantRooms: "Свободные помещения",
    hasGovOrg: "Есть",
    noGovOrg: "Нет",
    requestExecutor: "kkИсполнитель заявки",
    executor: "kkИсполнитель",
    requestDate: "kkДата заявки",
    requestNumber: "Номер заявки",
    status: "Статус",
    requestLanguage: "Язык подачи",
    chairman: "Председатель",
    rejectReason: "kkПричина отказа",
    approveRequest: "Одобрить заявку",
    rejectModal: {
      title: "Отказ в регистрации ОУ в Системе",
      informEmail: "Руководителю органа управления будет отправлена информация о причине отказа на Email",
    },
    requestTypes: {
      considering: "На рассмотрении",
      agree: "Одобрена",
      reject: "Отказано",
    },
    attachments: "Прикрепленные документы",
    attachmentTypes: {
      osi: {
        attach_type_gov_registration: "Справка о государственной регистрации ОСИ",
        attach_type_meet_protocol: "Протокол собрания собственников имущества",
      },
      ksk: {
        attach_type_gov_registration: "Справка о государственной регистрации КСК",
        attach_type_meet_protocol: "Протокол собрания собственников имущества",
      },
      pt: {
        attach_type_mio: "Справка от МИО о регистрации ПТ",
        attach_type_attorney: "Доверенности каждого собственника имущества",
        attach_type_meet_protocol: "Протокол собрания собственников имущества",
      },
      mjd: {
        attach_type_gov_registration: "Справка о государственной регистрации ОСИ",
        attach_type_meet_protocol: "Протокол собрания собственников имущества",
        attach_type_mio: "Справка о регистрации МИО",
        attach_type_attorney: "Доверенность",
        attach_type_act_input: "Акт ввода в эксплуатацию",
        attach_type_act_suppl: "Акт обслуживания",
        attach_type_technical_pasport: "Технический паспорт",
      },
    },
    registerKsk: {
      navName: "kkРегистрация КСК",
    },
    registerOsi: {
      navName: "kkРегистрация ОСИ",
    },
    registerPt: {
      navName: "kkРегистрация ПТ",
    },
    consideringMessages: {
      rejected: `Отказано. <br><br> Руководителю органа управления отправлена информация о причине отказа`,
      confirmApprove: `Помещения, указанные в заявке, <br> закреплены за другим органом управления. <br><br> <span style="color: #8CCD94">Подробности Вы можете посмотреть <br> в детализации по дому.</span> <br><br>Вы уверены, что хотите одобрить заявку?<br><br>После выполнения действия <br> помещения в заявке будут зарегистрированы <br> за органом управления <br> {organization}`,
      approved: `Заявка одобрена. <br> Регистрация ОУ прошла успешно. <br><br> Руководителю ОУ отправлена информация для входа в систему`,
    },
  },
  analyticsModule: {
    name: "kkАналитика",
  },
  adminModule: {
    name: "kkАдминистрирование",
    usersManagement: {
      name: "kkУправление пользователями",
    },
    referenceInfo: {
      name: "kkНормативно-справочная информация",
      navName: "kkНСИ",
    },
  },

  employees: {
    addEmployee: "kk Добавить сотрудника",
    employeeAdded: "kk Регистрация прошла успешно.</br></br>На email специалиста отправлена информация для входа в систему",
    employeeEmailEdited: "kk На email сотрудника отправлена информация о смене электронного адреса с ссылкой для его подтверждения.",
    labels: {
      position: "kk Должность",
      enterEmployeeIin: "kk Введите ИИН сотрудника",
      enterEmployeeLastname: "kk Введите фамилию сотрудника",
      enterEmployeeFirstname: "kk Введите имя сотрудника",
      enterEmployeePatronymic: "kk Введите отчество сотрудника",
      enterEmployeeEmail: "kk Введите Email сотрудника",
      chooseEmployeePosition: "kk Выбрать из справочника",
      enterNewPosition: "Введите должность специалиста на казахском и русском языках",
      enterNewPositionKz: "Введите должность на казахском языке",
      enterNewPositionRu: "Введите должность на русском языке",
      editEmailInfo: "Email будет изменен на новый после того,</br>как специалист его подтвердит",
    },
  },
  profile: {
    editPassword: "kk Изменить пароль",
    personalData: "kk Личные данные",
    editPersonalData: "Редактирование личных данных",
    organizationData: "kk Данные организации",
    organizationName: "kk Наименование",
    enterFirstname: "kk Введите имя",
    enterLastname: "kk Введите фамилию",
    enterPatronymic: "kk Введите отчество",
    enterEmail: "kk Введите email",
    emailInfo: "kk Email будет изменен на новый после того, как Вы его подтвердите",
    emailHint: "kk Укажите Ваш Email, на который будет направлена ссылка для подтверждения нового электронного адреса и продолжения работы с Личным кабинетом.",
    emailConfirmationLinkSent: "kk На указанный email отправлена информация о смене электронного адреса. Чтобы подтвердить email пройдите по ссылке из письма.",
    enterMobileNumber: "kk Введите номер телефона",
    passwordUpdateEmailSent: "kk Ссылка для изменения пароля направлена на Ваш электронный адрес. Пройдите по ссылке в письме для установки нового пароля.",
    passwordUpdateEmailSentHint: "kk Ссылка для изменения пароля направлена на Ваш электронный адрес.",
  },
  VfgMessages: {
    fieldIsRequired: "Обязательное поле",
    fileNotUploaded: "Файл не загружен",
    invalidFormat: "Invalid format!",
    numberTooSmall: "Слишком малое значение! Допустимо: {0}",
    numberTooBig: "Слишком большое значение! Допустимо: {0}",
    invalidNumber: "Invalid number",
    invalidInteger: "The value is not an integer",
    textTooSmall: "The length of text is too small! Current: {0}, Minimum: {1}",
    textTooBig: "The length of text is too big! Current: {0}, Maximum: {1}",
    thisNotText: "This is not a text!",
    thisNotArray: "This is not an array!!!",
    selectMinItems: "Select minimum {0} items!",
    selectMaxItems: "Select maximum {0} items!",
    invalidDate: "Invalid date!",
    dateIsEarly: "The date is too early! Current: {0}, Minimum: {1}",
    dateIsLate: "The date is too late! Current: {0}, Maximum: {1}",
    invalidEmail: "Invalid e-mail address!",
    invalidURL: "Invalid URL!",
    invalidCard: "Invalid card format!",
    invalidCardNumber: "Invalid card number!",
    invalidTextContainNumber: "Invalid text! Cannot contains numbers or special characters",
    invalidTextContainSpec: "Invalid text! Cannot contains special characters",
    notValidPhoneNumber: "Неправильный формат номера телефона",
    fillRequiredFields: "Заполните обязательные поля",
  },
};

export default locale;
