import { useRef } from "react";
import {useDispatch} from 'react-redux'
import { foodActions } from "../store/Redux-store";

const AddFood = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleAdd = () => {
    const item = inputElement.current.value;
    dispatch(foodActions.addFood({
      item,
    }));
    inputElement.current.value = "";
  }

  return (
    <div className="addFoods">
      <div
        className="input-group ajDivAlign"
        style={{ width: "300px", display: "flex", justifyContent: "center" }}
      >
        <input
          ref={inputElement}
          style={{ fontSize: "20px" }}
          type="text"
          aria-label="First name"
          className="form-control"
          placeholder="Enter Food"
        />
        <button className="<!--input-group-text --> ajBtnAdd" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default AddFood;
