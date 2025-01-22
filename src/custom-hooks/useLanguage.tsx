import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const useLanguage = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLang = pathname?.slice(1, 3) || "en";
  const isArabic = currentLang == "ar";

  return { t, isArabic, currentLang, pathname };
};

export default useLanguage;
