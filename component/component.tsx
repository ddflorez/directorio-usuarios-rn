
import React, {useState} from "react";
import { View, Text, Button } from "react-native";
const Contador = () =>{

    const[contador, setContador]= useState(0);
    <view>
        <text> Contador en {contador}</text>
        <Button title="sumar" onPress={()=>setContador(contador+1)}/>

    </view>
}

export default Contador