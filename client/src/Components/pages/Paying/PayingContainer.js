import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import PayingPresenter from "./PayingPresenter";

import { useSelector } from "react-redux";

const PayingContainerBlock = styled.div``;

const PavingContainer = () => {
  // const { date, title, price, memo, category } = useSelector(
  //   ({ payingReducer }) => ({
  //     date: payingReducer.payload.date,
  //     title: payingReducer.payload.title,
  //     price: payingReducer.payload.price,
  //     memo: payingRedcuer.payload.memo,
  //     category: payingReducer.payload.category,
  //   })
  // );

  return (
    <PayingContainerBlock>
      <Header HeaderInfo="지출"></Header>
      <PayingPresenter
        date=""
        title=""
        price=""
        memo=""
        category=""
        categoryInfoName="지출"
      ></PayingPresenter>
    </PayingContainerBlock>
  );
};

export default PavingContainer;
