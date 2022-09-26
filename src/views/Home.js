import React, { useState } from "react";
import Search from "../components/Search";
import Container from "../components/Container";
import BasicModal from "../components/BasicModal";

const Home = () => {
  const [item, setItem] = useState([]);
  const [step2, setStep2] = useState([]);
  const [step3, setStep3] = useState([]);
  const [step4, setStep4] = useState([]);
  const [state, setState] = useState(true);
  const [query, setQuery] = useState("");
  // console.log(
  //   item.filter((data) => {
  //     if (data.name.toLowerCase().includes(query.toLowerCase())) return data;
  //   })
  // );

  // console.log(item[0].name.toLowerCase().includes(query.toLowerCase()));

  const rightMoveStep1ToStep2 = (name, idx) => {
    setStep2([...step2, name]);
    item.splice(idx, 1);
  };

  const deleteStep1Card = (idx) => {
    item.splice(idx, 1);
    setState(!state);
  };

  const rightMoveStep2ToStep3 = (name, idx) => {
    setStep3([...step3, name]);
    step2.splice(idx, 1);
  };

  const deleteStep2Card = (idx) => {
    step2.splice(idx, 1);
    setState(!state);
  };

  const leftMoveStep2ToStep1 = (name, idx) => {
    setItem([...item, name]);
    step2.splice(idx, 1);
  };

  const rightMoveStep3ToStep4 = (name, idx) => {
    setStep4([...step4, name]);
    step3.splice(idx, 1);
  };

  const leftMoveStep3ToStep2 = (name, idx) => {
    setStep2([...step2, name]);
    step3.splice(idx, 1);
  };

  const deleteStep3Card = (idx) => {
    step3.splice(idx, 1);
    setState(!state);
  };

  const leftMoveStep4ToStep3 = (name, idx) => {
    setStep3([...step3, name]);
    step4.splice(idx, 1);
  };

  const deleteStep4Card = (idx) => {
    step4.splice(idx, 1);
    setState(!state);
  };
  return (
    <div className="mx-[50px] my-[72px]">
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div>
          <Search setQuery={setQuery} query={query} />
        </div>
        <div className="mt-5 sm:mt-0">
          <BasicModal query={query} item={item} setItem={setItem} />
        </div>
      </div>
      <div className="flex xl:items-start xl:justify-between flex-wrap">
        <Container
          titleNumber="1"
          data={item}
          leftArrow={false}
          onClickRightMove={rightMoveStep1ToStep2}
          deleteItem={deleteStep1Card}
          query={query}
        />
        <Container
          titleNumber="2"
          data={step2}
          onClickRightMove={rightMoveStep2ToStep3}
          onClickLeftMove={leftMoveStep2ToStep1}
          deleteItem={deleteStep2Card}
          query={query}
        />
        <Container
          titleNumber="3"
          data={step3}
          onClickRightMove={rightMoveStep3ToStep4}
          onClickLeftMove={leftMoveStep3ToStep2}
          deleteItem={deleteStep3Card}
          query={query}
        />
        <Container
          titleNumber="4"
          data={step4}
          rightArrow={false}
          onClickLeftMove={leftMoveStep4ToStep3}
          deleteItem={deleteStep4Card}
          query={query}
        />
      </div>
    </div>
  );
};

export default Home;
