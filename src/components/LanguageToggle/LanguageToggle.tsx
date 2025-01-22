import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const LanguageToggle = ({ isIcon = true }: any) => {
  let t = useTranslations();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const langCurrent = pathname?.slice(1, 3) || "en";

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (value: string) => {
    if (value) {
      if (value !== langCurrent) {
        const newPathname = `/${value}${pathname.replace(/^\/(en|ar)/, "")}`;
        Cookies.set("NEXT_LOCALE", value);
        router.push(newPathname);
      }
    }
    handleMenuClose(); // Close the menu after selecting a language
  };

  return (
    <div>
      {/* Language Icon Button */}
      <Box onClick={handleMenuOpen}>
        {isIcon ? (
          <IconButton>
            <LanguageIcon sx={{ color: "#ECB740" }} />
          </IconButton>
        ) : (
          <Typography color="red"> {t("language.ar")}</Typography>
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
    </div>
  );
};

export default LanguageToggle;
