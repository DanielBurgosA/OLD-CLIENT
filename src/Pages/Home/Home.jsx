import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyStatus } from "../../Redux/Slicers/LogInSlicer";
import Chatbot from "../../Components/chatbot/chatbot";

export default function Home() {
  const LogInStatus = useSelector (state => state.login.status)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (!LogInStatus){
        dispatch(verifyStatus());
    }
    
  }, [dispatch, LogInStatus]);
 

  return (
    <>
      <ImageSlider slides={SlideData} />
      
      <Chatbot />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
