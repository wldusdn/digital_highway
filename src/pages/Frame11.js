import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame11 = () => {
  const navigate = useNavigate();

  const onText8Click = useCallback(() => {
    navigate("/15");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[205px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0.25)] w-[430px] h-[141px]" />
      <div className="absolute top-[346px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0)] box-border w-[430px] h-[164px] border-t-[1px] border-solid border-silver-100 border-b-[1px]" />
      <div className="absolute top-[225px] left-[22px] text-13xl">말왕족발</div>
      <div className="absolute top-[225px] left-[314px] rounded-3xs bg-white box-border w-[93px] h-[39px] border-[1px] border-solid border-black" />
      <div className="absolute top-[235px] left-[354px] text-base">찜하기</div>
      <div className="absolute top-[286px] left-[60px]">5.0</div>
      <img
        className="absolute top-[283px] left-[22px] w-[35px] h-[35px] object-cover"
        alt=""
        src="/star@2x.png"
      />
      <div className="absolute top-[286px] left-[133px]">리뷰 15개</div>
      <img
        className="absolute top-[286px] left-[111.6px] w-[0.4px] h-[30px] object-contain"
        alt=""
      />
      <div className="absolute top-[368px] left-[22px]">
        <p className="m-0">최소주문금액 15,000원</p>
        <p className="m-0">한집배달 소요시간 31~41분</p>
      </div>
      <div className="absolute top-[547px] left-[22px]">인기 메뉴</div>
      <div className="absolute top-[447px] left-[24px] rounded-3xs bg-mediumaquamarine w-[381px] h-10" />
      <div className="absolute top-[454px] left-[86px] text-xl text-white">
        2000원 첫주문 할인 쿠폰 받기
      </div>
      <div className="absolute top-[596px] left-[9px] w-[411px] h-[145px] text-xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray-100" />
        <div className="absolute h-4/5 w-[62.53%] top-[11.03%] left-[4.38%] flex items-center">
          <span className="w-full">
            <p className="m-0">[무료배달이벤트]</p>
            <p className="m-0">1+1 족발세트</p>
            <p className="m-0">소 : 34,900</p>
            <p className="m-0">중 : 41,900</p>
            <p className="m-0">대 : 48,900</p>
          </span>
        </div>
        <img
          className="absolute h-4/5 w-[27.59%] top-[11.31%] right-[3.45%] bottom-[8.69%] left-[68.95%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="absolute top-[761px] left-[9px] w-[411px] h-[145px] text-xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[1px] border-solid border-darkgray-100" />
        <div className="absolute h-4/5 w-[62.53%] top-[11.03%] left-[4.38%] flex items-center">
          <span className="w-full">
            <p className="m-0">마늘보쌈</p>
            <p className="m-0">소 : 29,000원</p>
            <p className="m-0">중 : 36,000원</p>
            <p className="m-0">대 : 43,000원</p>
          </span>
        </div>
        <img
          className="absolute h-4/5 w-[27.59%] top-[11.31%] right-[3.45%] bottom-[8.69%] left-[68.95%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="absolute top-[821px] left-[0px] rounded-3xs bg-mediumaquamarine w-[430px] h-[111px]" />
      <div className="absolute top-[862px] left-[78px] text-white">
        43,900원
      </div>
      <div
        className="absolute top-[862px] left-[212px] text-white cursor-pointer"
        onClick={onText8Click}
      >
        장바구니 보기
      </div>
      <div className="absolute top-[861.5px] left-[196.5px] box-border w-px h-[30px] border-r-[1px] border-solid border-white" />
      <img
        className="absolute top-[0px] left-[0px] w-[430px] h-[202px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[227px] left-[324px] w-[23px] h-[35px] object-cover"
        alt=""
        src="/favorite@2x.png"
      />
    </div>
  );
};

export default Frame11;
