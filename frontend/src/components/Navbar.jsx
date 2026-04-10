import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Gem<span>M</span>
        <em>ERN</em>
      </Link>

      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <Link
          to="/"
          className={isActive("/") ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <button
          className={styles.navLink}
          onClick={() => scrollTo("overview")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--muted)",
            padding: "6px 12px",
            borderRadius: 6,
            fontFamily: "inherit",
            transition: "all 0.18s",
          }}
        >
          Overview
        </button>
        <button
          className={styles.navLink}
          onClick={() => scrollTo("roadmap")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--muted)",
            padding: "6px 12px",
            borderRadius: 6,
            fontFamily: "inherit",
            transition: "all 0.18s",
          }}
        >
          Roadmap
        </button>
        <button
          className={styles.navLink}
          onClick={() => scrollTo("faq")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--muted)",
            padding: "6px 12px",
            borderRadius: 6,
            fontFamily: "inherit",
            transition: "all 0.18s",
          }}
        >
          FAQ
        </button>
        <Link
          to="/leaderboard"
          className={isActive("/leaderboard") ? styles.active : ""}
          onClick={() => setMenuOpen(false)}
        >
          Leaderboard
        </Link>
        {user && (
          <>
            <Link
              to="/history"
              className={isActive("/history") ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              History
            </Link>
          </>
        )}
      </div>

      <div className={styles.actions}>
        {user ? (
          <>
            <Link
              to="/profile"
              className={`${styles.btnOutline} ${isActive("/profile") ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <button className={styles.btnLogout} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.btnOutline}>
              Sign in
            </Link>
            <Link to="/register" className={styles.btnStart}>
              Register
            </Link>
          </>
        )}
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
