import React, { useEffect } from 'react'
import { useState } from 'react';
import ExpensesList from './exp';
import Bugdet from './Bugdet';
import AllFilter from './All_filters';


const Button = (props) => {
    console.log("Button");
    const [list, setList] = useState(JSON.parse(window.localStorage.getItem('Expenses')));
    const [bugdet, setBugdet] = useState("");
    const changebugdet = (e) => setBugdet(e.target.value);

    useEffect(() => {
        const data = window.localStorage.getItem('Bugdet');
        if (data) setBugdet(data);
    }, [])
    useEffect(() => {
        window.localStorage.setItem('Bugdet', bugdet);
    })
    const addexp = () => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const obj = {
            id: id,
            payment: props.payment,
            name: props.name,
            amount: props.amount,
            date: props.date
        }
        if (props.payment === "" || props.name === "" || props.amount === "" || props.date === "") return;
        let int_amount = parseInt(props.amount);
        let int_bugdet = parseInt(bugdet);
        int_bugdet = int_bugdet - int_amount;
        let t_bugdet = int_bugdet.toString();
        setBugdet(t_bugdet)
        console.log(bugdet)
        console.log("obj", obj);
        setList([...list, obj]);
        console.log("list", list);
    }
    function onDelete(id) {
        let arr = [...list];
        let index = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i].id === id) index = i;
        let int_amount = parseInt(arr[index].amount);
        let int_bugdet = parseInt(bugdet);
        int_bugdet = int_bugdet + int_amount;
        let t_bugdet = int_bugdet.toString();
        setBugdet(t_bugdet)
        arr.splice(index, 1);
        setList(arr);
    }

    useEffect(() => {
        window.localStorage.setItem('Expenses', JSON.stringify(list));
    }, [list])
    return (
        <>
            <div className="width_100 wrap " >
                <div className="line">
                    <button id="button" onClick={addexp} >Add Expense</button>
                    <Bugdet bugdet={bugdet} changebugdet={changebugdet} />
                </div>
                {/* <div className="head">
                    <div className='box'>Type</div>
                    <div className='box'>Name</div>
                    <div className='box'>Date</div>
                    <div className='box'>Amount</div>
                    <div className='box'>Delete</div>
                </div> 
                <ExpensesList list={list} onDelete={onDelete} /> */}
            </div>
            <div className='width_100'> <hr /> </div>
            <AllFilter list={list} onDelete={onDelete} />
        </>
    )
}

export default Button;