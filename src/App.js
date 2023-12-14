import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOverview from './pages/ProjectOverview';
import Project from './pages/Project';
import { projects } from './data';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectOverview projects={projects}/>} />
        <Route path="/project/:id" element={<Project projects={projects}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
