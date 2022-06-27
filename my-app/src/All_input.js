import React from 'react'
import { useState } from 'react';
import Button from './Button';

const AllInput = () => {
    console.log("All_input");
    const [payment, setPayment] = useState("");
    const [name, setNmae] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const changeamount = (e) => setAmount(e.target.value);
    const changename = (e) => setNmae(e.target.value)
    const changepayment = (e) => setPayment(e.target.value);
    const changedate = (e) => setDate(e.target.value);

    return (
        <>
            <div className="line">
                <select id="card" value={payment} onChange={changepayment} >
                    <option />
                    <option value="Card">Card</option>
                    <option value="Check">Check</option>
                    <option value="Cash">Cash</option>
                </select>
                <div className='lable'>
                    <div id="lname" >Name</div>
                    <input id="name" value={name} onChange={changename} ></input>
                </div>
            </div>
            <div className="line">
                <input type="date" id="date" value={date} onChange={changedate}></input>
                <div className='lable'>
                    <div id="lamount" >Amount</div>
                    <input id="amount" value={amount} onChange={changeamount}></input>
                </div>
            </div>
            <Button name={name} amount={amount} payment={payment} date={date} />

        </>
    )
}

export default AllInput;
