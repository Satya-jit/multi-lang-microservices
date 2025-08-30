import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pythonData, setPythonData] = useState('Loading...');
  const [javaData, setJavaData] = useState('Loading...');
  const [goData, setGoData] = useState('Loading...');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pythonResponse = await fetch('/api/python/hello');
      const pythonResult = await pythonResponse.text();
      setPythonData(pythonResult);

      const javaResponse = await fetch('/api/java/hello');
      const javaResult = await javaResponse.text();
      setJavaData(javaResult);

      const goResponse = await fetch('/api/go/hello');
      const goResult = await goResponse.text();
      setGoData(goResult);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi-Language Microservices Demo</h1>
        
        <div className="services-grid">
          <div className="service-card react-card">
            <h2>React.js Frontend</h2>
            <p>This page is built with React.js</p>
            <div className="tech-info">
              <span>Technology: React.js</span>
              <span>Port: 3000</span>
            </div>
          </div>

          <div className="service-card python-card">
            <h2>Python Backend</h2>
            <p>{pythonData}</p>
            <div className="tech-info">
              <span>Technology: Python Flask</span>
              <span>Port: 5000</span>
            </div>
          </div>

          <div className="service-card java-card">
            <h2>Java Backend</h2>
            <p>{javaData}</p>
            <div className="tech-info">
              <span>Technology: Java Spring Boot</span>
              <span>Port: 8080</span>
            </div>
          </div>

          <div className="service-card go-card">
            <h2>Go Backend</h2>
            <p>{goData}</p>
            <div className="tech-info">
              <span>Technology: Go</span>
              <span>Port: 8090</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>All services are containerized with Docker and deployed via GitHub Actions</p>
        </div>
      </header>
    </div>
  );
}

export default App;
