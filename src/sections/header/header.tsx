import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logoImage } from "@/constant/images";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";

const Header = () => {
  let t = useTranslations();
  let pathname = usePathname();
  let isArabic = pathname.startsWith("/ar");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isScreen600 = useMediaQuery("(max-width:650px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    t("header.home"),
    t("header.about"),
    t("header.services"),
    t("header.contact-us"),
  ];

  return (
    <Container sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo/Branding */}
          <Image src={logoImage} alt="logo-image" width={40} height={40} />

          {/* Desktop Nav buttons */}
          {!isScreen600 && (
            <Stack direction={"row"}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "white", marginX: 2 }}>
                  {item}
                </Button>
              ))}
              <LanguageToggle />
            </Stack>
          )}

          {/* Mobile Menu Icon */}
          {isScreen600 && (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor={isArabic ? "right" : "left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: 250,
            paddingTop: 3,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item} sx={{ textAlign: "start" }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem>
              <LanguageToggle isIcon={false} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header;
