import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts';
import ChartMap from './components/ChartMap';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Contacts/>} />
              <Route path="/graph" element={<ChartMap/>}/>
            </Routes>
          </div>
        </Provider>
    </QueryClientProvider>
    
  );
}

export default App;
