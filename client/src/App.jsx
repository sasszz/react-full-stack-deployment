import { Navigate, Routes, Route } from 'react-router-dom'
import './darkly.css'
import Nav from './components/Nav'
import Records from './components/Records'
import AllRecords from './pages/AllRecords'
import EditRecord from './pages/EditRecord'
import NewRecord from './pages/NewRecord'
import ShowRecord from './pages/ShowRecord'


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Navigate to='/records' />} />
        <Route path={'/records'} element={<Records />} >
          <Route index element={<AllRecords />} />
          <Route path=':id' element={<ShowRecord />} />
          <Route path='new' element={<NewRecord />} />
          <Route path=':id/edit' element={<EditRecord />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App