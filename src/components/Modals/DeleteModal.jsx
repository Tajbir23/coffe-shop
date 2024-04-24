
import { useContext } from 'react';
import { ContextCoffee } from '../../Root';

const DeleteModal = () => {
    const {deleteData, deleteItem, setDeleteModal} = useContext(ContextCoffee)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={deleteItem?.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{deleteItem?.name}</h2>
    <p>Do you want to delete this item ?</p>
    <div className="card-actions justify-end">
      <button onClick={() => deleteData(deleteItem)} className="btn btn-primary">Delete</button>
      <button onClick={() => setDeleteModal(false)} className="btn btn-secondary">Close</button>
    </div>
  </div>
</div>
  )
}


export default DeleteModal