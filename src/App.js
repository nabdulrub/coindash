import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Hero,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="layout-div">
            <div className="main-div">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/News" element={<News />} />
              </Routes>
            </div>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "black", textAlign: "center", fontWeight: "100" }}
          >
            CoinDash <br />
            By Nader Abdulrub
          </Typography.Title>
          <Space className="footer-links">
            <Link className="footer-link" to="/" element={<Homepage />}>
              Home
            </Link>
            <Link
              className="footer-link"
              to="/cryptocurrencies"
              element={<News />}
            >
              Cryptocurrencies
            </Link>
            <Link className="footer-link" to="/news" element={<News />}>
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
