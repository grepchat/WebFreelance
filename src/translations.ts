export const translations = {
  ru: {
    hero: {
      available: 'Доступен для заказов',
      greeting: 'Привет, я',
      name: 'grepchat',
      description: 'Создаю лендинги, которые продают. Next.js, дизайн, скорость.',
      ctaWorks: 'Смотреть работы',
      ctaContact: 'Связаться',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    },
    about: {
      badge: 'Обо мне',
      title: 'Григорий — он же',
      name: 'grepchat',
      description: 'Лендинги на Next.js: упор на заявки, аккуратный код и UI с характером.',
      automation: 'По запросу — автоматизация: лиды с сайта, уведомления, Telegram-боты и ИИ.',
      skills: [
        { title: 'Разработка', desc: 'Next.js, React, TypeScript' },
        { title: 'Дизайн', desc: 'Tailwind, анимации, адаптив' },
        { title: 'Продвижение', desc: 'SEO и мета для соцсетей' },
        { title: 'Скорость', desc: 'Быстрая загрузка и оптимизация' },
      ],
    },
    portfolio: {
      badge: 'Портфолио',
      title: 'Проекты, которые я сделал',
      description: 'Готовые лендинги: адаптив, анимации, формы.',
      projects: [
        { name: 'LUMIÈRE Beauty Studio', niche: 'Бьюти-салон', desc: 'Салон, галерея, онлайн-запись' },
        {
          name: 'IRONPULSE Coaching',
          niche: 'Фитнес-коучинг',
          desc: 'Программы, тренировки, результаты',
          highlight: 'Подключён ИИ чат-консультант',
        },
        { name: 'CodeForge Academy', niche: 'Онлайн-курсы', desc: 'Курсы и менторство' },
        { name: 'VERTEX Строй', niche: 'Строительная компания', desc: 'Коммерческие объекты под ключ' },
        { name: 'APEX Detailing', niche: 'Премиум детейлинг', desc: 'Калькулятор и портфолио работ' },
      ],
      cta: 'Обсудить ваш проект',
    },
    contact: {
      badge: 'Свяжитесь со мной',
      title: 'Готовы начать?',
      description: 'Оставьте заявку — я свяжусь с вами в ближайшее время. Обсудим задачу, сроки и бюджет.',
      email: 'g.chadakin@mail.ru',
      telegram: '@grepchat (Telegram)',
      form: {
        nameLabel: 'Как вас зовут?',
        namePlaceholder: 'Александр',
        phoneLabel: 'Телефон',
        phonePlaceholder: '+7 (999) 000-00-00',
        messengerLabel: 'Контакт в мессенджере',
        messengerPlaceholder: '@username или ссылка',
        messageLabel: 'Сообщение',
        messagePlaceholder: 'Расскажите о вашем проекте...',
        submit: 'Отправить',
        submitting: 'Отправка...',
        privacyBefore: 'Нажимая кнопку, вы соглашаетесь с ',
        privacyLink: 'политикой конфиденциальности',
        thanks: 'Спасибо!',
        thanksDesc: 'Я свяжусь с вами в ближайшее время.',
      },
    },
    privacyPolicy: {
      title: 'Политика конфиденциальности',
      close: 'Закрыть',
      sections: [
        {
          title: '1. Общие положения',
          body: 'Настоящая политика описывает порядок обработки персональных данных, которые вы передаёте через формы на этом сайте при оформлении заявки или запроса на услугу (имя, телефон, контакт в мессенджере, текст сообщения и иные поля формы, если они есть).',
        },
        {
          title: '2. Кто обрабатывает данные',
          body: 'Оператором является владелец сайта и исполнитель по вашей заявке — лицо, указанное в контактах на сайте (далее — «мы»).',
        },
        {
          title: '3. Цель обработки',
          body: 'Мы используем данные только для связи с вами по заявке: уточнение задачи, расчёт стоимости, согласование сроков и исполнение договорённостей. Рассылок без отдельного согласия не ведём.',
        },
        {
          title: '4. Правовая основа',
          body: 'Обработка основана на вашем согласии, выраженном нажатием кнопки отправки формы после ознакомления с этой политикой, и на исполнении договора или подготовке к нему — по запросу.',
        },
        {
          title: '5. Передача и хранение',
          body: 'Для доставки заявки могут использоваться сторонние сервисы (например, почтовый сервис EmailJS и уведомления в Telegram), настроенные на сайте. Они выступают обработчиками в рамках своих условий. Мы не продаём ваши данные третьим лицам.',
        },
        {
          title: '6. Срок хранения',
          body: 'Данные хранятся не дольше, чем нужно для обработки заявки и дальнейшей переписки по проекту, либо до отзыва вашего согласия, если иное не требуется по закону.',
        },
        {
          title: '7. Ваши права',
          body: 'Вы можете запросить уточнение, копию или удаление данных, ограничить обработку — для этого напишите на указанный на сайте email. При необходимости вы вправе обратиться в уполномоченный орган по защите персональных данных.',
        },
        {
          title: '8. Контакты',
          body: 'Вопросы по обработке данных: g.chadakin@mail.ru',
        },
      ],
    },
    footer: {
      brand: 'grepchat',
      tagline: 'Разработка продающих лендингов',
      rights: 'Все права защищены.',
    },
    languageSwitch: 'EN',
  },
  en: {
    hero: {
      available: 'Available for orders',
      greeting: "Hi, I'm",
      name: 'grepchat',
      description: 'I create landing pages that sell. Next.js, design, speed.',
      ctaWorks: 'View portfolio',
      ctaContact: 'Get in touch',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    },
    about: {
      badge: 'About me',
      title: 'Grigory — aka',
      name: 'grepchat',
      description: 'Next.js landing pages focused on leads, clean code, and distinctive UI.',
      automation: 'On request: lead capture, alerts, Telegram bots, and AI where it fits.',
      skills: [
        { title: 'Development', desc: 'Next.js, React, TypeScript' },
        { title: 'Design', desc: 'Tailwind, motion, responsive' },
        { title: 'Promotion', desc: 'SEO and social meta' },
        { title: 'Speed', desc: 'Fast loads and optimization' },
      ],
    },
    portfolio: {
      badge: 'Portfolio',
      title: "Projects I've built",
      description: 'Turnkey landings: responsive, motion, forms.',
      projects: [
        { name: 'LUMIÈRE Beauty Studio', niche: 'Beauty salon', desc: 'Salon, gallery, booking' },
        {
          name: 'IRONPULSE Coaching',
          niche: 'Fitness coaching',
          desc: 'Programs, training, client results',
          highlight: 'AI chat consultant included',
        },
        { name: 'CodeForge Academy', niche: 'Online courses', desc: 'Courses and mentoring' },
        { name: 'VERTEX Construction', niche: 'Construction company', desc: 'Commercial turnkey builds' },
        { name: 'APEX Detailing', niche: 'Premium detailing', desc: 'Calculator and work portfolio' },
      ],
      cta: 'Discuss your project',
    },
    contact: {
      badge: 'Contact me',
      title: 'Ready to start?',
      description: "Leave a request — I'll get back to you soon. Let's discuss the task, deadlines, and budget.",
      email: 'g.chadakin@mail.ru',
      telegram: '@grepchat (Telegram)',
      form: {
        nameLabel: "What's your name?",
        namePlaceholder: 'Alexander',
        phoneLabel: 'Phone',
        phonePlaceholder: '+1 (555) 000-0000',
        messengerLabel: 'Messenger contact',
        messengerPlaceholder: '@username or link',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send',
        submitting: 'Sending...',
        privacyBefore: 'By clicking the button, you agree to the ',
        privacyLink: 'privacy policy',
        thanks: 'Thank you!',
        thanksDesc: "I'll get back to you shortly.",
      },
    },
    privacyPolicy: {
      title: 'Privacy policy',
      close: 'Close',
      sections: [
        {
          title: '1. General',
          body: 'This policy describes how we handle personal data you submit through forms on this site when requesting a service or quote (name, phone, messenger contact, message text, and any other fields the form includes).',
        },
        {
          title: '2. Who processes your data',
          body: 'The controller is the site owner and the party you contact for your request — as shown in the site’s contact section (“we”).',
        },
        {
          title: '3. Purpose',
          body: 'We use your data only to respond to your request: clarify the task, estimate cost, agree on timelines, and fulfil what we agree. We do not send marketing without separate consent.',
        },
        {
          title: '4. Legal basis',
          body: 'Processing is based on your consent by submitting the form after reading this policy, and on steps prior to or performance of a contract where applicable.',
        },
        {
          title: '5. Sharing and storage',
          body: 'Delivering your request may use third-party services configured on the site (e.g. EmailJS for email and Telegram for notifications). They process data under their own terms. We do not sell your data.',
        },
        {
          title: '6. Retention',
          body: 'We keep data only as long as needed to handle your request and related correspondence, or until you withdraw consent, unless law requires otherwise.',
        },
        {
          title: '7. Your rights',
          body: 'You may ask for access, correction, deletion, or restriction — contact us at the email on this site. You may also complain to your local data protection authority where applicable.',
        },
        {
          title: '8. Contact',
          body: 'Questions about data processing: g.chadakin@mail.ru',
        },
      ],
    },
    footer: {
      brand: 'grepchat',
      tagline: 'Selling landing page development',
      rights: 'All rights reserved.',
    },
    languageSwitch: 'RU',
  },
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.ru