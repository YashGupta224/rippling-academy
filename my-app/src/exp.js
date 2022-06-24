const ExpensesList = (props) => {
    console.log("Expenseslist");
    console.log(props.list)
    const v2 = props.list.map((ls) => {
        return (
            <div key={ls.id} className="width_100">
                <hr />
                <div className="list">
                    <div className='box'>{ls.payment}</div>
                    <div className='box'>{ls.name}</div>
                    <div className='box'>{ls.date}</div>
                    <div className='box'>{ls.amount}</div>
                    <div className='box'>
                        <button onClick={() => props.onDelete(ls.id)} >delete</button>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="width_100">
            {v2}
        </div>
    );
};

export default ExpensesList;