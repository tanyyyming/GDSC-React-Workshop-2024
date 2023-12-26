import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectOverview from './pages/ProjectOverview';
import Project from './pages/Project';
import { projects } from './data';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectOverview projects={projects}/>} />
          <Route path="/projects/:id" element={<Project projects={projects}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

