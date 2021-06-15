
import "./countryitem.css";

const Countryitem=(props)=>{
    const clickHandler=()=>{
        props.click(props.country);
    }
return (
<div id="item-container" onClick={clickHandler} style={{backgroundColor:props.filter===props.country?'lightblue':'white'}}>
    <h2 className="country-name">{props.country}</h2>
</div>
);
}
export default Countryitem;