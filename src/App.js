import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Services from "./pages/Services"
import Register from "./pages/Register"
import Student from "./pages/Student"
import Businessowner from "./pages/Businessowner"
import Schooladmin from "./pages/Schooladmin"
import Superadmin from "./pages/Superadmin"
import Joinclub from "./pages/Joinclub"
import Leaveclub from "./pages/Leaveclub"
import Allbpages from "./pages/Allbpages"
import Addclub from "./pages/Addclub"
import Deleteclub from "./pages/Deleteclub"
import Postadvertisement from "./pages/Postadvertisement"
import Deleteadvertisement from "./pages/Deleteadvertisement"
import Editprofile from "./pages/Editprofile"
import Studentedit from "./pages/Studentedit"
import Editbusinessownerprofile from "./pages/Editbusinessownerprofile"
import Addbusiness from "./pages/Addbusiness"
import Deletebusiness from "./pages/Deletebusiness"
import Cancelorders from "./pages/Cancelorders"
import Cancellationsuccess from "./pages/Cancellationsuccess"
import Schooladminedit from "./pages/Schooladminedit"
import Studentdataedit from "./pages/Studentdataedit"
import Scadminstudentedit from "./pages/Scadminstudentedit"
import Scadminbusinessedit from "./pages/Scadminbusinessedit"
import Sadmindetailedit from "./pages/Sadmindetailedit"
import Sadminchat from "./pages/Sadminchat"
import Sadminchatwindow from "./pages/Sadminchatwindow"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Forgetpassword from "./pages/Forgetpassword"
import Items from "./pages/Items"
import Removeproducts from "./pages/Removeproducts"
import Returnproducts from "./pages/Returnproducts"
import Addnewproducts from "./pages/Addnewproducts"
import Businessedit from "./pages/Businessedit"
import Alladv from "./pages/Alladv"
import Barchart from "./pages/Barchart"
import React, { useState, useMemo, useContext } from 'react'


import Header from "./components/Header";
import UserContext from "./components/UserContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import './App1.css';
import './Contact.css';
import './Services.css';
import './Cart.css';
import './Products.css';




function App() {

  
    const userDat = useContext(UserContext)
    const [value, setValue] = useState(null)
    
    const providerValue = useMemo(() => ({ 
      value, setValue 
    }), [value, setValue])
    
  
  return (
    
    <div>
      <Router>
      <UserContext.Provider value={providerValue}>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
        <Route path="/businessowner" element={<Businessowner />} />
        <Route path="/schooladmin" element={<Schooladmin />} />
        <Route path="/superadmin" element={<Superadmin />} />
        <Route path="/joinclub" element={<Joinclub />} />
        <Route path="/leaveclub" element={<Leaveclub />} />
        <Route path="/addclub" element={<Addclub />} />
        <Route path="/alladv" element={<Alladv />} />
        <Route path="/allbpages" element={< Allbpages />} />
        <Route path="/deleteclub" element={<Deleteclub />} />
        <Route path="/postadvertisement" element={<Postadvertisement />} />
        <Route path="/deleteadvertisement" element={<Deleteadvertisement />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/studentedit" element={<Studentedit />} />
        <Route path="/editbusinessownerprofile" element={<Editbusinessownerprofile />} />
        <Route path="/addbusiness" element={<Addbusiness />} />
        <Route path="/deletebusiness" element={<Deletebusiness />} />
        <Route path="/cancelorders" element={<Cancelorders />} />
        <Route path="/cancellationsuccess" element={<Cancellationsuccess />} />
        <Route path="/schooladminedit" element={<Schooladminedit />} />
        <Route path="/scadminstudentedit" element={<Scadminstudentedit />} />
        <Route path="/scadminbusinessedit" element={<Scadminbusinessedit />} />
        <Route path="/sadmindetailedit" element={<Sadmindetailedit />} />
        <Route path="/sadminchat" element={<Sadminchat />} />
        <Route path="/sadminchatwindow" element={<Sadminchatwindow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/items" element={<Items />} />
        <Route path="/removeproducts" element={<Removeproducts />} />
        <Route path="/returnproducts" element={<Returnproducts />} />
        <Route path="/addnewproducts" element={<Addnewproducts />} />
        <Route path="/businessedit" element={<Businessedit />} />
        <Route path="/Studentdataedit" element={<Studentdataedit />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Barchart" element={<Barchart />} />
        </Routes>
        </UserContext.Provider>
        </Router>
    </div>
  );
}

export default App;
