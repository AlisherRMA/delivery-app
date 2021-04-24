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
  common: {
    attention: "Внимание",
    cancel: "Отмена",
    reload: "Обновить",
    close: "Закрыть",
    save: "Сохранить",
    edit: "Редактировать",
    selectFilter: "Выбрать фильтр",
    applyFilter: "Применить фильтр",
    resetFilter: "Сбросить фильтр",
    binIin: "БИН/ИИН",
    bin: "БИН",
    iin: "ИИН",
    login: "Логин",
    lastName: "Фамилия",
    firstName: "Имя",
    middleName: "Отчество",
    email: "Email",
    emailInfo: "На него будет направлена ссылка<br/> для входа в Систему",
    mobileNumber: "Мобильный телефон",
    search: "Поиск",
    reject: "Отказать",
    approve: "Одобрить",
    backToTheList: "Вернуться к списку",
    wait: "Пожалуйста, подождите...",
    expand: "Развернуть",
    inDetail: "Подробно",
    swapPositions: `{1} {2}`,
    selectAddress: "Выберите населенный пункт",
    defaultErrorMessage: "Произошла ошибка. <br/> Обратитесь в Службу технической поддержки",
    exclude: "Исключить",
    searchResults: "Результаты поиска",
    selected: "Выбрано",
    add: "Добавить",
    select: "Выбрать",
    clickToSelectValue: "Нажмите, чтобы выбрать значение",
    dataSuccessfullySaved: "Данные успешно сохранены",
    changesSavedSuccessfully: "Изменения сохранены",
  },
  navigation: {
    managementOrgans: {
      name: "Органы управления МЖД",
      navName: "ОСИ / ПТ / КСК",
    },

    sem: {
      name: "Субъекты естественных монополий",
      navName: "СЕМ",
    },

    mjdModule: {
      name: "Многоквартирные жилые дома",
      navName: "МЖД",
    },

    requestsModule: {
      name: "Заявки",
      navName: "Заявки",
      requestsKsk: {
        name: "Регистрация КСК",
        navName: "Регистрация КСК",
      },
      requestsOsi: {
        name: "Регистрация ОСИ",
        navName: "Регистрация ОСИ",
      },
      requestsPt: {
        name: "Регистрация ПТ",
        navName: "Регистрация ПТ",
      },
    },

    analytics: {
      name: "Аналитика",
      navName: "Аналитика",
      analyticsMjd: {
        name: "Многоквартирные жилые дома",
        navName: "МЖД",
      },
      analyticsAddressRegister: {
        name: "Адресный регистр",
        navName: "Адресный регистр",
      },
      managementOrgansRequests: {
        name: "Органы управления",
        navName: "Органы управления",
      },
      analyticsRequests: {
        name: "Заявки",
        navName: "Заявки",
      },
    },

    adminModule: {
      name: "Администрирование",
      navName: "Администрирование",
      usersManagement: {
        name: "Управление пользователями",
        navName: "Управление пользователями",
      },
      referenceInfo: {
        name: "Нормативно-справочная информация",
        navName: "НСИ",
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
      "Информационная система централизованного сбора и хранения <br /> электронных информационных ресурсов в сфере <br /> жилищных отношений и жилищно-коммунального хозяйства",
  },
  governingModule: {
    name: "Органы управления МЖД",
    navName: "ОСИ / ПТ / КСК",
    organType: "Тип органа управления",
    selectOrganType: "Выберите тип ОУ",
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
    name: "Субъекты естественных монополий",
    navName: "СЕМ",
  },
  mjdModule: {
    name: "Многоквартирные жилые дома",
    navName: "МЖД",
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
    name: "Заявки",
    pendingRequestsCount: "Всего на рассмотрении",
    approvedRequestsCount: "Всего одобрено",
    rejectedRequestsCount: "Всего отказано",
    locality: "Адрес",
    requestNumberAndDate: '<span class="darkGrey--text mr-2">№ заявки:</span> {number} <span class="darkGrey--text mx-2">от</span> {date}',
    useAddressRegister: "Для выбора населенного пункта воспользуйтесь адресным регистром",
    orgName: "Наименование",
    housesCount: "Количество домов",
    flatsCount: "Количество помещений",
    inRequest: "В заявке",
    total: "Общее",
    totalFlats: "Общее количество помещений",
    unselected: "Не выбранные при <br /> подаче заявки",
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
    requestExecutor: "Исполнитель заявки",
    executor: "Исполнитель",
    requestDate: "Дата заявки",
    requestNumber: "Номер заявки",
    status: "Статус",
    requestLanguage: "Язык подачи",
    chairman: "Председатель",
    rejectReason: "Причина отказа",
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
        attach_type_gov_registration: "Справка о государственной регистрации",
        attach_type_meet_protocol: "Протокол собрания собственников имущества",
        attach_type_mio: "Справка о регистрации МИО",
        attach_type_attorney: "Доверенность",
        attach_type_act_input: "Акт ввода в эксплуатацию",
        attach_type_act_suppl: "Акт обслуживания",
        attach_type_technical_pasport: "Технический паспорт",
      },
    },
    registerKsk: {
      navName: "Регистрация КСК",
    },
    registerOsi: {
      navName: "Регистрация ОСИ",
    },
    registerPt: {
      navName: "Регистрация ПТ",
    },
    consideringMessages: {
      rejected: `Отказано. <br><br> Руководителю органа управления отправлена информация о причине отказа`,
      confirmApprove: `Помещения, указанные в заявке, <br> закреплены за другим органом управления. <br><br> <span style="color: #8CCD94">Подробности Вы можете посмотреть <br> в детализации по дому.</span> <br><br>Вы уверены, что хотите одобрить заявку?<br><br>После выполнения действия <br> помещения в заявке будут зарегистрированы <br> за органом управления <br> {organization}`,
      approved: `Заявка одобрена. <br> Регистрация ОУ прошла успешно. <br><br> Руководителю ОУ отправлена информация для входа в систему`,
    },
  },
  analyticsModule: {
    name: "Аналитика",
  },
  adminModule: {
    name: "Администрирование",
    usersManagement: {
      name: "Управление пользователями",
    },
    referenceInfo: {
      name: "Нормативно-справочная информация",
      navName: "НСИ",
    },
  },
  employees: {
    addEmployee: "Добавить сотрудника",
    employeeAdded: "Регистрация прошла успешно.</br></br>На email специалиста отправлена информация для входа в систему",
    employeeEmailEdited: "На email сотрудника отправлена информация о смене электронного адреса с ссылкой для его подтверждения.",
    labels: {
      position: "Должность",
      enterEmployeeIin: "Введите ИИН сотрудника",
      enterEmployeeLastname: "Введите фамилию сотрудника",
      enterEmployeeFirstname: "Введите имя сотрудника",
      enterEmployeePatronymic: "Введите отчество сотрудника",
      enterEmployeeEmail: "Введите Email сотрудника",
      chooseEmployeePosition: "Выбрать из справочника",
      enterNewPosition: "Введите должность специалиста на казахском и русском языках",
      enterNewPositionKz: "Введите должность на казахском языке",
      enterNewPositionRu: "Введите должность на русском языке",
      editEmailInfo: "Email будет изменен на новый после того,</br>как специалист его подтвердит",
    },
  },

  profile: {
    editPassword: "Изменить пароль",
    personalData: "Личные данные",
    editPersonalData: "Редактирование личных данных",
    organizationData: "Данные организации",
    organizationName: "Наименование",
    enterFirstname: "Введите имя",
    enterLastname: "Введите фамилию",
    enterPatronymic: "Введите отчество",
    enterEmail: "Введите email",
    emailInfo: "Email будет изменен на новый после того, как Вы его подтвердите",
    emailHint: "Укажите Ваш Email, на который будет направлена ссылка для подтверждения нового электронного адреса и продолжения работы с Личным кабинетом.",
    emailConfirmationLinkSent: "На указанный email отправлена информация о смене электронного адреса. Чтобы подтвердить email пройдите по ссылке из письма.",
    enterMobileNumber: "Введите номер телефона",
    passwordUpdateEmailSent: "Ссылка для изменения пароля направлена на Ваш электронный адрес. Пройдите по ссылке в письме для установки нового пароля.",
    passwordUpdateEmailSentHint: "Ссылка для изменения пароля <br/> направлена на Ваш электронный адрес.",
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
