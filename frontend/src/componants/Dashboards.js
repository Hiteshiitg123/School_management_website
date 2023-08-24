import React,{useState,useEffect} from 'react'
import AdminDashboard from './AdminDashboard'
import GuestDashboard from './GuestDashboard'


export default function Dashboards() {

  const [role, setrole] = useState(null);

  useEffect(() => {
    const storedrole= localStorage.getItem("role");
    if (storedrole) {
      setrole(storedrole);
    }
  }, []);


  return (
    <div className='dashboard'>
      {role==='0' && <AdminDashboard/>}
      {role==='3' && <GuestDashboard/>}
    </div>
  )
}
