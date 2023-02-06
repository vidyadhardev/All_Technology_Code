import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Emp = () => {
    const [empdata, empdatachange] = useState(null);
const navigate= useNavigate();
const EditItem=(id)=>{
navigate('/edit/'+id)
}
// Here Data delete For Click form Button
const RemoveItem=(id)=>{
    if(window.confirm('Sure to Delete')){
        fetch("http://localhost:5000/EmpList/"+id, {
        method: "DELETE"
        
    }).then((res) => {
        alert('Deleted SuccessFully !');
       window.location.reload();
    }).catch((err) => {
        console.log(err)
    })
    }
}

const LoadDetail=(id)=>{
    navigate('/details/'+id)

}



    useEffect(() => {
        fetch("http://localhost:5000/EmpList/").then((res) => {
            return res.json();
        }).then((data) => {

            console.log(empdatachange(data))
        }).catch((err) => {
            console.warn(err.message)

        })
    }, [])
    
    return (
     
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee List</h2>
                </div>
                <div className="card-body">
                    <div>
                       <Link  as={Link} to="/create" className="btn btn-primary">Add new(+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item =>{
                                 return   <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={()=>{EditItem(item.id)}} className="btn btn-primary me-3">Edit </a>
                                            <a onClick={()=>{RemoveItem(item.id)}} className="btn btn-danger me-3">Remove </a>
                                            <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary me-3">Details</a>
                                        </td>
                                     </tr>
                                 
                                })
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default Emp;