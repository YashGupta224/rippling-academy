import React, { useEffect } from 'react'
import { useState } from 'react';
import ExpensesList from './exp';



const Fbutton = (props) => {
    console.log("Fbutton");
    console.log(props.list)
    const [flist, setFList] = useState(props.list);

    const filter_list = () => {
        let new_list = props.list;
        console.log(flist);
        console.log(new_list)
        new_list = new_list.filter(elem => {
            if (props.name === "") return true;
            return elem.name === props.name
        });
        new_list = new_list.filter(elem => {
            if (props.payment === "") return true;
            return elem.payment === props.payment
        });
        new_list = new_list.filter(elem => {
            if (props.date === "") return true;
            return elem.date === props.date
        });
        new_list = new_list.filter(elem => {
            if (props.amount === "") return true;
            return elem.amount === props.amount
        });

        setFList([...new_list]);
    }
    useEffect(() => {
        //setFList(props.list);
        filter_list();
    }, [props.list])
    console.log(flist)
    function onDelete(id) {
        let arr = [...flist];
        let index = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i].id === id) index = i;
        arr.splice(index, 1);
        setFList(arr);
        props.onDelete(id);
    }

    return (
        <div className="width_100 wrap " >
            <div className="line">
                <button id="button" onClick={filter_list} >Filter</button>
            </div>
            <div className="head">
                <div className='box'>Type</div>
                <div className='box'>Name</div>
                <div className='box'>Date</div>
                <div className='box'>Amount</div>
                <div className='box'>Delete</div>
            </div>
            <ExpensesList list={flist} onDelete={onDelete} />
        </div>
    )
}

export default Fbutton;