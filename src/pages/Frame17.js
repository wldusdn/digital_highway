import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame17 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/21");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-3xl text-black font-inter">
      <div className="absolute top-[98px] left-[156px] text-13xl">할인쿠폰</div>
      <img
        className="absolute top-[23px] right-[383px] w-[27px] h-[26px] object-cover"
        alt=""
        src="/close@2x.png"
      />
      <div className="absolute top-[160px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[304px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div
        className="absolute top-[856px] left-[calc(50%_-_152px)] w-[304px] h-[42px] cursor-pointer text-xl"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[calc(50%_-_152px)] rounded-3xs bg-white box-border w-[304px] h-[42px] border-[1px] border-solid border-silver-100" />
        <div className="absolute top-[9px] left-[115px]">사용하기</div>
      </div>
      <div className="absolute top-[234px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[389px] h-[132px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[160px] left-[343px] rounded-3xs bg-white box-border w-[67px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[167px] left-[356px]">등록</div>
      <div className="absolute top-[250px] left-[44px]">
        <p className="m-0">2,000원</p>
        <p className="m-0">말왕족발 깜짝 할인</p>
      </div>
      <div className="absolute top-[312px] left-[44px] text-base">
        <p className="m-0">7일 후 만료</p>
        <p className="m-0">최소주문금액 : 30,000원</p>
      </div>
      <div className="absolute top-[287px] left-[364px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
    </div>
  );
};

export default Frame17;
