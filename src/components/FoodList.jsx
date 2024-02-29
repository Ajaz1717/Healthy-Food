import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../store/Redux-store";

const FoodList = () => {
  const { foodList } = useSelector((store) => store.food);
  const dispatch = useDispatch();
  
  const [check, setCheck] = useState(false);
  const [currnetIndex, setCurrentIndex] = useState()

  const handleDlt = (indexItem) => {
    let newFoodList = foodList;
    
    let filterFoodList = newFoodList.filter((item, i) => {
      return i !== indexItem;
    });

    dispatch(foodActions.dltFood({
      filterFoodList,
    }));
    setCheck(!check);
  }

  const handleChechBox = (value, i) => {
    setCheck(!check)
    setCurrentIndex(i)
  }

  return (
    <div className="foodList" style={{width:'330px'}}>
      <ul className="list-group">
        {foodList.map((item, i) => (
          <li key={item} className="list-group-item ajAlignItem">
            <input type="checkBox" className="checkBox" onChange={(e)=>handleChechBox(e.target.value, i)}/>
            {item}
            {(check == false && currnetIndex==i) && <button onClick={()=>handleDlt(i)} type="button" className="AjDltbtn">
              Delete
            </button>}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
