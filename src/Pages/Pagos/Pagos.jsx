import style from "./Pagos.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanLink, linkPaymentPlatform } from "../../Redux/Slicers/paymentSlicer";
import {Button} from "@chakra-ui/react"

export default function Pagos() {
  const dispatch = useDispatch();
  const payLink = useSelector((state) => state.paymentLink.payLink);

  useEffect(()=>{
    payLink&&window.open(payLink, "_blank");
    return ()=>{
      dispatch(cleanLink())
    }
  },[payLink, dispatch])

  const handleButtonClick = () => {
      dispatch(linkPaymentPlatform());
    };

  return (
    <div className={style.Prov}>
      <div className={style.column}>
        <Button onClick={handleButtonClick} className={style.button}>
          Realizar donacion con PayPal
        </Button>
      </div>
    </div>
  );
}