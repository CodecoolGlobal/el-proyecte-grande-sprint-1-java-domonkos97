import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import DashBoard from "./routes/DashBoard.jsx";
import AddTransaction from "./routes/AddTransaction.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import React from 'react';
import Cookies from "js-cookie";
import MainPage from "./routes/MainPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
//import Sidebar from "./components/Sidebar.jsx";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';


function App(){

  const { collapseSidebar } = useProSidebar();
  const [darkMode, setDarkMode] = useState(false)

  const [transactions, setTransactions] = useState([])


  const exampleWallets= [
    {
      name: "Hello",
      id: 1,
      transactionList: transactions,
      user: 1,
      balance: 2000
    }
  ]

  const [transactionTypeToDisplay, setTransactionTypesToDisplay] = useState(undefined)

  const [wallets, setWallets] = useState(exampleWallets)

  const [currentWallet, setCurrentWallet] = useState(() => wallets[0])

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  const [userId, setUserId] = useState(undefined);
  useEffect(() => {
    setUserId(Cookies.get('userId'))
  }, [])
  // const userId = user.id;
  // const userId = 2;
  const walletId = currentWallet.id;
  // const walletId = currentWallet.id;

  // TODO get userId from cookies
  // dashboard -> choose which wallet
  // wallet dashboard

  const getApi = async(url, setter) => {
    let response = await fetch(url);
    let data = await response.json();
    setter([...data])
  }


  useEffect( () => {
    if (userId === undefined){
      return
    }
    getApi(`/api/wallets/user/${userId}`, setWallets).catch(console.error)
  }, [userId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/transactions`, setTransactions).catch(console.error)
  }, [walletId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/expenses`, setExpenses).catch(console.error)
  }, [walletId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/incomes`, setIncomes).catch(console.error)
  }, [walletId]);

  return (
        <Router>
            <div className="App">
              <Sidebar  style={{height: "100vh",position: "sticky", top:"0", backgroundColor: "blue"}}>
                <Menu>
                  <MenuItem icon={<MenuOutlinedIcon></MenuOutlinedIcon>}
                            onClick={() => collapseSidebar()}
                            style={{textAlign: "center"}}>
                    <h2>Menu</h2>
                  </MenuItem>
                  <MenuItem icon={<HomeOutlinedIcon></HomeOutlinedIcon>}
                            component={<Link to="/home"> </Link>}>
                    Home
                  </MenuItem>
                  <MenuItem icon={<AccountBalanceWalletOutlinedIcon></AccountBalanceWalletOutlinedIcon>}>Wallets</MenuItem>
                  <MenuItem icon={<AccountBalanceOutlinedIcon></AccountBalanceOutlinedIcon>}>Transactions</MenuItem>
                  <MenuItem icon={<BarChartOutlinedIcon></BarChartOutlinedIcon>}>Statistics</MenuItem>
                </Menu>
              </Sidebar>
              <div className="content">
                <Routes>
                  <Route exact path='/'
                         element={ <MainPage />} />
                  <Route exact path="/home"
                         element={ <DashBoard
                                      currentWallet={currentWallet}
                                      setCurrentWallets={setCurrentWallet}
                                      transactions={transactions}
                                      expenses={expenses}
                                      incomes={incomes}
                                      wallets={wallets}
                                      setTransactionTypesToDisplay={setTransactionTypesToDisplay}
                                      transactionTypeToDisplay={transactionTypeToDisplay} userId={userId} />} />
                  <Route exact path="/add"
                         element={<AddTransaction wallets={wallets} walletId={walletId}/>} />
                  <Route exact path="/Login"
                         element={<Login/>} />

                  <Route exact path="/Signup"
                         element={<Signup />} />
                </Routes>
              </div>
            </div>
          </Router>
  )
}

export default App


