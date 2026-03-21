import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Analytics from "./pages/Analytics";
import PlacementPredictor from "./pages/PlacementPredictor";
import ResumeHelp from "./pages/ResumeHelp";
import ResumeRequests from "./pages/ResumeRequests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<ResumeHelp />} />

        <Route
        path="/resume"
        element={
        <Layout>
          <ResumeHelp />
          </Layout>
        }
        />

        <Route
        path="/resume-requests"
        element={
        <Layout>
          <ResumeRequests />
          </Layout>
        }
        />
        
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/students"
          element={
            <Layout>
              <Students />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <AddStudent />
            </Layout>
          }
        />
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/predict"
          element={
            <Layout>
              <PlacementPredictor />
            </Layout>
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
