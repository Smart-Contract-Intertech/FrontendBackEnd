import "./newtransfer.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const NewTransfer = () => {
    const initialValues = {name: "", address: "", amount: "", date: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let today = new Date().toISOString().slice(0, 10);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        if(!values.name){
            errors.name = "İsim boş bırakılamaz!";
        }
        if(!values.address){
            errors.address = "Cüzdan adresi boş bırakılamaz!";
        }
        if(!values.amount){
            errors.amount = "Miktar boş bırakılamaz!";
        }
        if(!values.date){
            errors.date = "Tarih boş bırakılamaz!";
        }else if(values.date < today){
            errors.date = "Lütfen gelecek bir tarih giriniz!"
        }
        return errors;
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Yeni Yatırım</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success"style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Başarıyla İletildi!</div>) : 
                        (<div className="ui message success" style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Gerçekleştirilemiyor!</div>)}
                        <form onSubmit={handleSubmit}>
                            <div name="myForm" className="formInput" key="">
                                <label>İsim:</label>
                                <input type="text" name="name" value={formValues.name} onChange={handleChange}></input>
                                <br/>
                                <p style={{color:'red'}}>{formErrors.name}</p>
                                <br/>
                                <label>Cüzdan Adresi:</label>
                                <input type="text" name="address" value={formValues.address} onChange={handleChange}></input>
                                <br/>
                                <p style={{color:'red'}}>{formErrors.address}</p>
                                <br/>
                                <label>Miktar:</label>
                                <input type="number" name="amount" value={formValues.amount} onChange={handleChange}></input>
                                <br/>
                                <p style={{color:'red'}}>{formErrors.amount}</p>
                                <br/>
                                <label>Tarih:</label>
                                <input type="date" name="date" value={formValues.date} onChange={handleChange}></input>
                                <br/>
                                <p style={{color:'red'}}>{formErrors.date}</p>
                                <br/>
                                <button>Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTransfer;