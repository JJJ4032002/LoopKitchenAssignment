import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const HomeIconWrapper = () => (
  <ListItemIcon>
    <HomeIcon />
  </ListItemIcon>
);
const BookmarkIconWrapper = () => (
  <ListItemIcon>
    <BookIcon />
  </ListItemIcon>
);
const SignOutIconWrapper = () => (
  <ListItemIcon>
    <LogoutIcon />
  </ListItemIcon>
);

const BrightnessIconWrapper = () => (
  <ListItemIcon>
    <Brightness7Icon />
  </ListItemIcon>
);
const MenuData = [
  { Title: "Home", Icon: HomeIconWrapper, to: "/home" },
  { Title: "Bookmarked", Icon: BookmarkIconWrapper, to: "/bookmarked" },
  { Title: "Light or Dark", Icon: BrightnessIconWrapper, to: null },
  { Title: "Sign Out", Icon: SignOutIconWrapper, to: "/login" },
];

export { MenuData };
