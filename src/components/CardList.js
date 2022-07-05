import React from "react";
import Cards from "./Cards";

const CardList = ({robots}) =>{
    const cardComponent = robots.map((user,i)=>{
        return <Cards key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
    <div className="tc">
        {cardComponent}
    </div>
    );
}

export default CardList;