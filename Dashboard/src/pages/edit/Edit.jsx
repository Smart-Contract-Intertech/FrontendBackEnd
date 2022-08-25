import "./newtransfer.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { TransactionContext } from "../../context/TransactionContext";
import { useState, useEffect ,useContext} from "react";

const Edit = ({name, type, value, handleChange}) => (
        <input
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="a"
        min={0}
        />
    );

    const NewTransfer = () => {
        const {  sendTransaction, formData, setformData ,handleChange,isSubmit, setIsSubmit} = useContext(TransactionContext);
        const [formErrors, setFormErrors] = useState({});
        /*const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);*/
        let today = new Date().toISOString().slice(0, 10);
        
        console.log("xxxxxxxxxxxy");
        console.log(formData);
        console.log("xxxxxxxxxxxy");
        /*const handleChange = (e) => {
            const {name, value} = e.target;
            setformData({...formData, [name]: value});
        };*/

        const handleSubmit = (e) => {
            e.preventDefault();
            //const { addressTo, amount, nickName ,gonderimTarihi} = formData;
            //setFormErrors(validate(formData));
            //setIsSubmit(true);
            sendTransaction();
        };

        const validate = (values) => {
            console.log("validate");
            const errors = {};
            if(!values.nickName){
                errors.nickName = "İsim boş bırakılamaz!";
            }
            if(!values.addressTo){
                errors.addressTo = "Cüzdan adresi boş bırakılamaz!";
            }
            if(!values.amount){
                errors.amount = "Miktar boş bırakılamaz!";
            }
            if(!values.gonderimTarihi){
                errors.gonderimTarihi = "Tarih boş bırakılamaz!";
            }else if(values.gonderimTarihi < today){
                errors.gonderimTarihi = "Lütfen gelecek bir tarih giriniz!"
            }
            console.log("validate");
            console.log(errors);
            console.log("validate");

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
                            {Object.keys(formErrors).length === 0 && isSubmit? (<div className="ui message success"style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Başarıyla İletildi!</div>) : 
                            (<div className="ui message success" style={{fontWeight:"bold", color:"GrayText"}}>Yatırım Gerçekleştirilemiyor!</div>)}
                            <form onSubmit={handleSubmit}>
                                <div name="myForm" className="formInput" key="">
                                    <label>İsim:</label>
                                    <Input  name="nickName" type="text" value={formData.nickName} handleChange={handleChange} />
                                    <br/>
                                    <p style={{color:'red'}}>{formErrors.nickName}</p>
                                    <br/>
                                    <label>Cüzdan Adresi:</label>
                                    <Input  name="addressTo" type="text" value={formData.addressTo} handleChange={handleChange} />
                                    <br/>
                                    <p style={{color:'red'}}>{formErrors.addressTo}</p>
                                    <br/>
                                    <label>Miktar:</label>
                                    <Input  name="amount" type="number" value={formData.amount} handleChange={handleChange} />
                                    <br/>
                                    <p style={{color:'red'}}>{formErrors.amount}</p>
                                    <br/>
                                    <label>Tarih:</label>
                                    <Input   name="gonderimTarihi" type="date" value={formData.name} handleChange={handleChange} />
                                    <br/>
                                    <p style={{color:'red'}}>{formErrors.gonderimTarihi}</p>
                                    <br/>
                                    <button>Düzenle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Edit;