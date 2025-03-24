import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/Navigation';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetail';
import ContactForm from './components/ContactForm';
import ItineraryPlanner from './components/ItineraryPlanner';
import MapExplorer from './components/MapExplorer';
import DestinationGallery from './components/DestinationGallery';
import TravelTips from './components/TravelTips';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/main.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="main-content">
              <Routes>
                <Route path="/" element={<DestinationList />} />
                <Route path="/destination/:id" element={<DestinationDetail />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/planner" element={<ItineraryPlanner />} />
                <Route path="/explore" element={<MapExplorer />} />
                <Route path="/gallery" element={<DestinationGallery />} />
                <Route path="/tips" element={<TravelTips />} />
              </Routes>
            </main>
          </Suspense>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;