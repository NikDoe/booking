import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import LanguageIcon from "shared/assets/icons/language.svg";
import { useTranslation } from "react-i18next";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation("translation");

  const toogleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      onClick={toogleLanguage}
    >
      <LanguageIcon className={styles.Icon} />
      <p>{t("Языки")}</p>
    </Button>
  );
};
