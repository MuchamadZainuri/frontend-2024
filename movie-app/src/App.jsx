import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddMovie from './pages/Movie/AddMovie';
import Popular from './pages/Movie/Popular';
import NowPlaying from './pages/Movie/NowPlaying';
import TopRated from './pages/Movie/TopRated';
import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import theme from './utils/constants/theme';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/create' element={<AddMovie />} />
          <Route path='/movie/popular' element={<Popular />} />
          <Route path='/movie/now' element={<NowPlaying />} />
          <Route path='/movie/top' element={<TopRated />} />
        </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;
