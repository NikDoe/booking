import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("aboutPage");

  return <h1>{t("Страница О Нас")}</h1>;
};

export default AboutPage;
