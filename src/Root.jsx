import { createContext, useState } from "react";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./components/config";

export const ContextCoffee = createContext();

const Root = () => {
  const [user, setUser] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteItem, setDeleteItem] = useState({})

  const deleteData = (data) => {
    fetch('http://localhost:5000/delete_coffee',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
     .then((res) => res.json())
     .then(() => setDeleteModal(false))
     .catch((err) => console.error(err))
  }

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }
  return (
    <ContextCoffee.Provider value={{user, checkUser, deleteModal, setDeleteModal, deleteData, deleteItem, setDeleteItem}}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextCoffee.Provider>
  );
};

export default Root;
