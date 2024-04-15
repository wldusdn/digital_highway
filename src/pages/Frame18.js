import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame18 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/22");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[254px] left-[calc(50%_-_153px)] rounded-3xs bg-white box-border w-[338px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[311px] left-[calc(50%_-_153px)] rounded-3xs bg-white box-border w-[338px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[108px] left-[29px]">결제수단</div>
      <div className="absolute top-[152px] left-[62px]">
        <p className="m-0">배민페이</p>
        <p className="m-0">토스페이</p>
        <p className="m-0">다른 결제수단</p>
      </div>
      <div className="absolute top-[152px] left-[29px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[182px] left-[29px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[211px] left-[29px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[265px] left-[73px] text-xl">
        신용/체크카드
      </div>
      <div className="absolute top-[322px] left-[73px] text-xl">
        카드사 선택
      </div>
      <img
        className="absolute top-[314px] left-[354px] w-[35px] h-[35px] object-cover"
        alt=""
        src="/sort-down@2x.png"
      />
      <div className="absolute top-[378px] left-[0px] bg-white box-border w-[430px] h-[173px] border-t-[1px] border-solid border-lightgray-100 border-b-[1px]" />
      <div className="absolute top-[551px] left-[0px] bg-white box-border w-[430px] h-[173px] border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[406px] left-[28px]">할인쿠폰</div>
      <div className="absolute top-[580px] left-[28px]">결제금액</div>
      <div className="absolute top-[750px] left-[28px]">총 결제금액</div>
      <div className="absolute top-[409px] left-[344px] text-xl">1장보유</div>
      <div className="absolute top-[459px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[469px] left-[36px] text-xl">
        2,000원 할인됨
      </div>
      <img
        className="absolute top-[471px] left-[378px] w-5 h-5 object-cover"
        alt=""
        src="/more-than@2x.png"
      />
      <div className="absolute top-[618px] left-[28px] text-3xl">
        <p className="m-0">주문금액</p>
        <p className="m-0">배달팁</p>
        <p className="m-0">할인쿠폰</p>
      </div>
      <div className="absolute top-[618px] left-[304px] text-3xl text-right">
        <p className="m-0">43,900원</p>
        <p className="m-0">1,000원</p>
        <p className="m-0">-2,000원</p>
      </div>
      <div className="absolute top-[750px] left-[305px] text-3xl text-right">
        42,900원
      </div>
      <div className="absolute top-[816px] left-[0px] rounded-3xs bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-lightgray-200" />
      <div
        className="absolute top-[869px] left-[77px] w-[275px] h-[43px] cursor-pointer text-3xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumaquamarine w-[275px] h-[43px]" />
        <div className="absolute top-[8px] left-[46px]">44,900원 결제하기</div>
      </div>
      <div className="absolute top-[836px] left-[107px] text-3xl text-lightgray-100">
        위 내용에 모두 동의합니다
      </div>
      <div className="absolute top-[840px] left-[80px] rounded-8xs bg-white box-border w-5 h-5 border-[1px] border-solid border-lightgray-100" />
    </div>
  );
};

export default Frame18;
