import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
      {
        dispatch(login({userData}))
      }
      else{
dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (<div><Header/>
  {/* <main>Outlet</main> */}
  <Footer/></div>) : null
}

export default App;
