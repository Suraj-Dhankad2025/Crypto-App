import React from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import {
  Container,
  HStack,
  Button, 
  RadioGroup,
  Radio
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { server } from "../index";
import Loader from "./Loader";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency==="inr"?"₹":currency==="usd"?"$":"€";
  const changePage = (page)=>{
    setPage(page);
    setLoading(true);
  }
  const btns = new Array(132).fill(1);
  useEffect(() => {
    const fetchCoin = async () => {
      try{
        const { data } = await axios.get(`${server}/coins/markets?per_page=40&vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);

      }catch(error){
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency,page]);
  if(error)return <ErrorComponent message={'Error While Fetching Coins'}/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
        <RadioGroup value={currency} onChange={setCurrency} padding={'8'}>
          <HStack spacing={'4'}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={'usd'}>USD</Radio>
            <Radio value={'eur'}>EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack width={'full'}  p={'8'} overflowX={'auto'}>
              {
                btns.map((item, index)=>(
                   <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>
                ))
              }
          </HStack>

        </>
      )}
    </Container>
  );
};

export default Coins