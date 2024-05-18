import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddMovie from './pages/Movie/AddMovie';
import Popular from './pages/Movie/Popular';
import NowPlaying from './pages/Movie/NowPlaying';
import TopRated from './pages/Movie/TopRated';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/create' element={<AddMovie />} />
          <Route path='/movie/popular' element={<Popular />} />
          <Route path='/movie/now' element={<NowPlaying />} />
          <Route path='/movie/top' element={<TopRated />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;
