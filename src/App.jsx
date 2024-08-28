import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FinalForm from './components/FinalForm';
import DashboardGrid from './dashboard/DashboardGrid';
import FeedbackDetails from './feedback/FeedbackDetails';
import WebPage from './webpage/WebPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<WebPage />} />
        <Route path="dashboard" element={<DashboardGrid />} />
        <Route path="forms" element={<FinalForm />} />
        <Route path="feedback" element={<FeedbackDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
