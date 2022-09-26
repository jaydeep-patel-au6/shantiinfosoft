import React from "react";
import Delete from "../assets/images/delete.svg";
import Left from "../assets/images/left.svg";
import Right from "../assets/images/right.svg";

const Container = ({
  titleNumber,
  data,
  leftArrow = true,
  onClickRightMove,
  rightArrow = true,
  onClickLeftMove,
  deleteItem,
  query,
}) => {
  return (
    <div
      className="w-[297px] p-4 min-h-[572px] bg-[#E4E7EE] rounded mx-[15px] xl:mx-[0px] my-[24px]"
      style={{ border: "1px solid #E4E7EE" }}
    >
      <div className="text-base leading-[24px] text-[#252525] mb-4">
        STEP {titleNumber}
      </div>
      {data && (
        <>
          {data.map((data, idx) => {
            return (
              <div key={idx}>
                {data?.name.toLowerCase().includes(query.toLowerCase()) ? (
                  <div
                    className="bg-[white] mb-5 h-[120px] w-full rounded p-[12px] flex items-center justify-between flex-col"
                    style={{ border: "1px solid #DEDEDE" }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-sm text-[#252525]">{data?.id}</div>
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => deleteItem(idx)}
                      >
                        <div className="mr-[5.67px]">
                          <img src={Delete} alt="delete" />
                        </div>
                        <div className="text-sm text-[#F52B2B]">Delete</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[#252525]">{data?.name}</div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div onClick={() => onClickLeftMove(data, idx)}>
                        {leftArrow && (
                          <img
                            className="cursor-pointer"
                            src={Right}
                            alt="left"
                          />
                        )}
                      </div>
                      <div onClick={() => onClickRightMove(data, idx)}>
                        {rightArrow && (
                          <img
                            className="cursor-pointer"
                            src={Left}
                            alt="right"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Container;
