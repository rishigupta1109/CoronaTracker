import Countryitem from "./countryitem";

const Countrylist=(props)=>{
    return (<div id="countryList">
        {props.data.map((item)=>{
            return<Countryitem country={item.country}></Countryitem>
        })}
        </div>
    )
}

export default Countrylist;