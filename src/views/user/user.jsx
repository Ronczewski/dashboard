// import { useState } from "react";
import { useEffect, useState } from "react";
// import { Dialog } from "../../components/common/Dialog/Dialog";
import UserForm from "../../components/user-form/user-form";
import { Table } from "./table";
//import { userList } from "../../data/db";
import { UserListsOneItem } from "./userListOneItem";
import './user-table.css'


const UserView = () => {
  const [list, setList] = useState([])

  const getData = async () => {
    const url = 'http://localhost:3003/userList'
    const response = await fetch(url)
    const data = await response.json()
    setList(data)
  }

  const refreshData = () => {
    getData()
  }

  useEffect(() => {
    // (async () => {
    //   const url = 'http://localhost:3003/userList'
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   setList(data)
    // })()
    getData()
  }, [])

  console.log(list, 'Elo')

  return (
    <div className="UserLists">
      <h1 style={{ textAlign: 'center' }}>WELCOME IN MY POOR SITEEE</h1>
      <p style={{ textAlign: 'center' }}>Hello UserView</p>

      <UserForm refreshData={refreshData} />
      <Table list={list} />
    </div>
  )
}

export default UserView