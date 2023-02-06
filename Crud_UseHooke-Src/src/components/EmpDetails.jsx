import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/EmpList/" + empid).then((vidya) => {
            return vidya.json();
        }).then((data) => {

            empdatachange(data)
        }).catch((err) => {
            console.log(err.message)

        })
    }, []);
    return (
        <div>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Data is Here</h2>
                </div>
                <div className="card-body">
                    {empdata &&
                        <div>
                            <h3>This is Employee Name : {empdata.name} ({empdata.id})</h3>
                            <h3>Contact Details</h3>
                            <h4>Email Is : {empdata.email}</h4>

                            <h4>Phone No. Is : {empdata.phone}</h4>
                            <Link to="/"  className="btn btn-outline-danger">Back to Listening</Link>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}
export default Details;