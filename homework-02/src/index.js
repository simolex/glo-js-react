import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <div className={props.wrapperName}>{props.children}</div>
    </div>
  );
};

const Section = (props) => {
  const sectionName = props.sectionName;
  const title = props.titleSection;
  return (
    <section className={sectionName}>
      <Wrapper wrapperName={sectionName + "-wrapper"} titleSection={title}>
        {props.titleName && <h2 className={sectionName + "-title"}>{props.titleName}</h2>}
        {props.subtitle && <div className={sectionName + "-subtitle"}>{props.subtitle}</div>}
        {props.description && <div className={sectionName + "-description"}>{props.description}</div>}
        {props.children}
      </Wrapper>
    </section>
  );
};

const FeaturesItem = (props) => {
  return (
    <div className="features-slider_item">
      <div className="features-img" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
      <div className="features-feature">{props.text}</div>
    </div>
  );
};

const Phone = (props) => {
  return (
    <div className={props.elementName + "-phonelink"}>
      <a href="tel:7(962)556-1234">+7(962)556-1234</a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Wrapper wrapperName="header">
        <a href="#">
          <div className="header-logo"></div>
        </a>
        <a href="tel:888" className="header-phone"></a>
        <Phone elementName="header" />
      </Wrapper>
    </header>
  );
};

const MainHero = (props) => {
  return (
    <main>
      <Wrapper wrapperName="main">
        <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U </h1>
        <div className="main-small">
          Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
          несколько абзацев более.
        </div>
        <button className="btn main-btn">
          <span>Подробнее</span>
        </button>
      </Wrapper>
    </main>
  );
};
const Features = (props) => {
  return (
    <Section
      sectionName="features"
      titleName="Уникальный заголовок для преимущества компании"
      subtitle="О нас"
      description="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
        осмысленного текста рыбы на русском языке, а начинающему оратору отточить."
    >
      <div className="features-slider">
        <div className="features-slider_items">
          <FeaturesItem image="./images/1.svg" text="Первое целевое преимущество" />
          <FeaturesItem image="./images/2.svg" text="Второе целевое преимущество" />
          <FeaturesItem image="./images/3.svg" text="Третье целевое преимущество" />
          <FeaturesItem image="./images/4.svg" text="Четвертое целевое преимущество" />
        </div>
        <button className="features-slider-arrow features-slider-prev">
          <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
          </svg>
        </button>
        <button className="features-slider-arrow features-slider-next">
          <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
          </svg>
        </button>
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section
      sectionName="contact"
      titleName="Остались вопросы?"
      description="Оставьте номер телефона, и мы перезвоним вам"
      // titleSection="Уникальный заголовок для преимущества компании"
    >
      <form action="../mailer.smart.php" className="contact-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Телефон" />
        <input type="email" placeholder="E-mail" />
        <button className="btn contact-btn">
          <span>Позвоните мне</span>
        </button>
      </form>
      <div className="contact-personal">
        Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo"></div>
        <div className="footer-company">
          <span>© 2020 XXXcompany. Все права защищены.</span>
        </div>
        <a href="tel:888" className="footer-phone"></a>
        <div className="footer-websurfer">
          <span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a>
        </div>
        <Phone elementName="footer" />
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <MainHero />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
