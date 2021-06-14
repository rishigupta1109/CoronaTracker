import Countryitem from "./countryitem";

const Countrylist=(props)=>{
    const clickHandler=(country)=>{
        props.itemclicked(country);
    }
    return (<div id="countryList">
        {props.data.map((item)=>{
            return<Countryitem  click={clickHandler} filter={props.filter} key={item.country} country={item.country}></Countryitem>
        })}
        </div>
    )
}

export default Countrylist;