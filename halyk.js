const translations = {
  ru: {
    private: "Частным лицам",
    business: "Бизнесу",
    premium: "Премиум",
    about: "О банке",
    headline: "Банк №1 в Казахстане",
    subheadline: "Кредиты, депозиты, переводы и многое другое — просто и удобно",
    learn_more: "Узнать больше",
    popular_services: "Популярные услуги",
    deposit: "Открыть вклад",
    loan: "Взять кредит",
    card: "Получить карту",
    mobile: "Мобильный банкинг",
    footer: "© 2025 Halyk Bank. Все права защищены.",
  },
  kz: {
    private: "Жеке тұлғаларға",
    business: "Бизнеске",
    premium: "Премиум",
    about: "Банк туралы",
    headline: "Қазақстандағы №1 банк",
    subheadline: "Несие, депозит, аударымдар және тағы басқалар — оңай әрі ыңғайлы",
    learn_more: "Көбірек білу",
    popular_services: "Танымал қызметтер",
    deposit: "Депозит ашу",
    loan: "Несие алу",
    card: "Карта алу",
    mobile: "Мобильді банк",
    footer: "© 2025 Halyk Bank. Барлық құқықтар қорғалған.",
  },
  en: {
    private: "For Individuals",
    business: "For Business",
    premium: "Premium",
    about: "About the Bank",
    headline: "Bank #1 in Kazakhstan",
    subheadline: "Loans, deposits, transfers and more — easy and convenient",
    learn_more: "Learn more",
    popular_services: "Popular Services",
    deposit: "Open a Deposit",
    loan: "Take a Loan",
    card: "Get a Card",
    mobile: "Mobile Banking",
    footer: "© 2025 Halyk Bank. All rights reserved.",
  }
};

document.getElementById("language").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});