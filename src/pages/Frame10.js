import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame10 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[205px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0)] box-border w-[430px] h-[229px] border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[434px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0)] w-[430px] h-[387px]" />
      <div className="absolute top-[231px] left-[18px] text-11xl">
        [무료배달이벤트] 1+1 족발세트
      </div>
      <div className="absolute top-[466px] left-[22px] text-13xl">맛 선택</div>
      <div className="absolute top-[280px] left-[22px] text-9xl">가격</div>
      <div className="absolute top-[326px] left-[57px]">소</div>
      <div className="absolute top-[355px] left-[57px]">중</div>
      <div className="absolute top-[384px] left-[57px]">대</div>
      <div className="absolute top-[326px] left-[326px] text-right">
        <p className="m-0">34,900</p>
        <p className="m-0">41,900</p>
        <p className="m-0">48,900</p>
      </div>
      <div className="absolute top-[511px] left-[325px] text-right">
        <p className="[margin-block-start:0] [margin-block-end:7px]">+0</p>
        <p className="[margin-block-start:0] [margin-block-end:7px]">+2,000</p>
        <p className="[margin-block-start:0] [margin-block-end:7px]">+2,000</p>
        <p className="[margin-block-start:0] [margin-block-end:7px]">+2,000</p>
        <p className="m-0">+2,500</p>
      </div>
      <div className="absolute top-[327px] left-[22px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[357px] left-[22px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[386px] left-[22px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[517px] left-[22px] w-20 h-[29px]">
        <div className="absolute top-[0%] left-[43.75%]">기본</div>
        <div className="absolute h-[86.21%] w-[31.25%] top-[6.9%] right-[68.75%] bottom-[6.9%] left-[0%] rounded-[50%] bg-white box-border border-[1px] border-solid border-silver-200" />
      </div>
      <div className="absolute top-[551px] left-[22px] w-20 h-[29px]">
        <div className="absolute top-[0%] left-[43.75%]">간장맛</div>
        <div className="absolute h-[86.21%] w-[31.25%] top-[6.9%] right-[68.75%] bottom-[6.9%] left-[0%] rounded-[50%] bg-white box-border border-[1px] border-solid border-silver-200" />
      </div>
      <div className="absolute top-[585px] left-[22px] w-20 h-[29px]">
        <div className="absolute top-[0%] left-[43.75%]">바베큐맛</div>
        <div className="absolute h-[86.21%] w-[31.25%] top-[6.9%] right-[68.75%] bottom-[6.9%] left-[0%] rounded-[50%] bg-white box-border border-[1px] border-solid border-silver-200" />
      </div>
      <div className="absolute top-[619px] left-[22px] w-20 h-[29px]">
        <div className="absolute top-[0%] left-[43.75%]">매운맛</div>
        <div className="absolute h-[86.21%] w-[31.25%] top-[6.9%] right-[68.75%] bottom-[6.9%] left-[0%] rounded-[50%] bg-white box-border border-[1px] border-solid border-silver-200" />
      </div>
      <div className="absolute top-[653px] left-[22px] w-20 h-[29px]">
        <div className="absolute top-[0%] left-[43.75%]">마늘맛</div>
        <div className="absolute h-[86.21%] w-[31.25%] top-[6.9%] right-[68.75%] bottom-[6.9%] left-[0%] rounded-[50%] bg-white box-border border-[1px] border-solid border-silver-200" />
      </div>
      <img
        className="absolute top-[511px] left-[37px] w-[100px] h-[100px]"
        alt=""
      />
      <div className="absolute top-[821px] left-[0px] bg-white box-border w-[430px] h-[111px] border-t-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[874px] left-[18px]">15,000원</div>
      <div className="absolute top-[850px] left-[18px] text-xl">
        배달최소주문금액
      </div>
      <div
        className="absolute top-[850px] left-[182px] w-[226px] h-[53px] cursor-pointer text-xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumaquamarine w-[226px] h-[53px]" />
        <div className="absolute top-[15px] left-[54px]">장바구니 담기</div>
      </div>
      <img
        className="absolute top-[-2px] left-[0px] w-[430px] h-[202px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
    </div>
  );
};

export default Frame10;
