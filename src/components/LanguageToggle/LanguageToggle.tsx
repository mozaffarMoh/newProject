import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useLanguage from "@/custom-hooks/useLanguage";

const LanguageToggle = ({ isIcon = true }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const { t, currentLang,pathname, isArabic } = useLanguage();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (value: string) => {
    if (value) {
      if (value !== currentLang) {
        const newPathname = `/${value}${pathname.replace(/^\/(en|ar)/, "")}`;
        Cookies.set("NEXT_LOCALE", value);
        router.push(newPathname);
      }
    }
    handleMenuClose(); // Close the menu after selecting a language
  };

  return (
    <Box>
      {/* Language Icon Button */}
      <Box onClick={handleMenuOpen}>
        {isIcon ? (
          <IconButton>
            <LanguageIcon sx={{ color: "#ECB740" }} />
          </IconButton>
        ) : (
          <Box>
            <Typography color="error">
              {" "}
              {!isArabic ? t("language.en") : t("language.ar")}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Language Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        <MenuItem onClick={() => changeLanguage("ar")}>
          {t("language.ar")}
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>
          {t("language.en")}
        </MenuItem>
        {/* Add more languages as needed */}
      </Menu>
    </Box>
  );
};

export default LanguageToggle;
