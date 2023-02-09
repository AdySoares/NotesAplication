import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { New } from '../pages/New'
import { Account } from '../pages/Account'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/new' element={ <New/>}/>
      <Route path='/details/:id' element={ <Details/>}/>
      <Route path='/account' element={ <Account/>}/>

    </Routes>
  )
}