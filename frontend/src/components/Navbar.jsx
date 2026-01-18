import { memo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = memo(() => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path
      ? { borderBottom: "2px solid white", borderRadius: 0 }
      : {};

  return (
    <AppBar elevation={0}>
      <Container maxWidth="full">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            MOVIE<span style={{ color: "#444" }}>APP</span>
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={isActive("/")}>
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/search"
              sx={isActive("/search")}
            >
              Search
            </Button>

            {user ? (
              <>
                {user.role === "admin" && (
                  <Button
                    color="inherit"
                    component={Link}
                    to="/admin"
                    sx={isActive("/admin")}
                  >
                    Admin
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogout}
                  sx={{ ml: 2 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="contained"
                  component={Link}
                  to="/login"
                  sx={isActive("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Navbar;
