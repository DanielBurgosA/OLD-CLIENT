import { useParams } from "react-router-dom";
import { getProjectById } from "../../Redux/Slicers/projectSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectById(id)); //accedo al id de ese perro
  }, [dispatch, id]);

  return (
    <div>
      <p>Soy DetailProject</p>
    </div>
  );
}

//Solo el achivo index de Pages recibe este export
