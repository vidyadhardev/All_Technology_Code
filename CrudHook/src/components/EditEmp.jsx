import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EditEmp=()=>{
    const { empid } = useParams();
    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/EmpList/" + empid).then((vidya) => {
            return vidya.json();
        }).then((data) => {
  idChange(data.id)
  nameChange(data.name)
  emailChange(data.email)
phoneChange(data.phone)
activeChange(data.active)
            //console.log(empdatachange(data))
        }).catch((err) => {
            console.log(err.message)

        })
    }, []);
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [active, activeChange] = useState(true);
    const [validation, validChange] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const empdata = { id,name, email, phone };

       

        console.log(id, name, phone, email, active);
        fetch("http://localhost:5000/EmpList/"+empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('saved successfully');
            navigate('/');
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>

                    <div className="card">
                        <div className="card-title">
                            <h1 style={{ textAlign: "center" }}>Emp_Edit Form</h1>
                        </div>


                        <div className="card-body">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <label> ID</label>
                                        <input value={id} disabled="disabled" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <label> NAME</label>
                                        <input  value={name} onMouseDown={event => validChange(true)} onChange={event => nameChange(event.target.value)} className="form-control" />
                                        {name.length==0 && validation && <span className="text-danger">Enter Here Name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <label> EMAIL</label>
                                        <input required value={email} onChange={event => emailChange(event.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <label> PHONE</label>
                                        <input required value={phone} onChange={event => phoneChange(event.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">


                                        <input checked={active} onChange={event => activeChange(event.target.checked)} type="checkbox" className="form-check-input" />
                                        <label className="form-check-label" > This is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">SAVE</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditEmp;