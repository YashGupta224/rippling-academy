
const Bugdet = (props) => {
    console.log("Bugdet");
    return (
        <div className='lable'>
            <div id="lbugdet" >Bugdet</div>
            <input id="bugdet" value={props.bugdet} onChange={props.changebugdet} ></input>
        </div>
    )
}

export default Bugdet