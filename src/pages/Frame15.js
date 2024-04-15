import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame15 = () => {
  const navigate = useNavigate();

  const onContainer15Click = useCallback(() => {
    navigate("/19");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-white h-[932px] overflow-hidden cursor-pointer text-left text-5xl text-black font-inter"
      onClick={onContainer15Click}
    >
      <div className="absolute top-[324px] left-[0px] bg-white box-border w-[430px] h-[273px] border-t-[1px] border-solid border-lightgray-100 border-b-[1px]" />
      <div className="absolute top-[95px] left-[120px] text-xl flex items-center w-[119px] h-[47px]">
        로 받을게요
      </div>
      <div className="absolute top-[95px] left-[250px] text-base text-right flex items-center w-[154px] h-[47px]">
        30~45분 후 도착
      </div>
      <div className="absolute top-[107px] left-[26px] text-xl text-cornflowerblue">
        알뜰배달
      </div>
      <img
        className="absolute top-[108px] left-[100px] w-5 h-5 object-cover"
        alt=""
        src="/won@2x.png"
      />
      <div className="absolute top-[157px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[93px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[431px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[532px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[161px] left-[42px] flex items-center w-[375px] h-[86px]">
        <span className="w-full">
          <p className="m-0">부산 남구 용소로 45(대연동)</p>
          <p className="m-0">303호</p>
        </span>
      </div>
      <div className="absolute top-[276px] left-[42px] text-xl">
        010-1234-5678
      </div>
      <div className="absolute top-[270px] left-[321px] rounded-3xs bg-white box-border w-[76px] h-[35px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[276px] left-[340px] text-xl">완료</div>
      <div className="absolute top-[343px] left-[26px]">요청사항</div>
      <div className="absolute top-[621px] left-[26px]">결제수단</div>
      <div className="absolute top-[665px] left-[59px]">
        <p className="m-0">배민페이</p>
        <p className="m-0">토스페이</p>
        <p className="m-0">다른 결제수단</p>
      </div>
      <div className="absolute top-[387px] left-[42px]">가게 사장님께</div>
      <div className="absolute top-[488px] left-[42px]">라이더님께</div>
      <div className="absolute top-[816px] left-[0px] rounded-3xs bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-lightgray-200" />
      <div className="absolute top-[869px] left-[77px] rounded-3xs bg-mediumaquamarine w-[275px] h-[43px]" />
      <div className="absolute top-[877px] left-[123px] text-3xl text-white">
        44,900원 결제하기
      </div>
      <div className="absolute top-[836px] left-[107px] text-3xl text-lightgray-100">
        위 내용에 모두 동의합니다
      </div>
      <div className="absolute top-[840px] left-[80px] rounded-8xs bg-white box-border w-5 h-5 border-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[665px] left-[26px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[695px] left-[26px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[724px] left-[26px] rounded-[50%] bg-white box-border w-[25px] h-[25px] border-[1px] border-solid border-silver-200" />
      <div className="absolute top-[763px] left-[calc(50%_-_156px)] rounded-3xs bg-white box-border w-[338px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[774px] left-[70px] text-xl">
        신용/체크카드
      </div>
    </div>
  );
};

export default Frame15;
