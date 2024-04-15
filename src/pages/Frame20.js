import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame20 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-base text-black font-inter">
      <div
        className="absolute top-[136px] left-[34px] w-[91px] h-[47px] cursor-pointer text-5xl"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] w-[91px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] flex items-center w-[91px] h-[47px]">
            뒤로가기
          </div>
        </div>
      </div>
      <div className="absolute top-[85px] left-[185px] text-13xl">리뷰</div>
      <div className="absolute top-[196px] left-[0px] bg-white box-border w-[430px] h-[787px] border-t-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[214px] left-[32px] text-9xl">
        최근 리뷰 15개
      </div>
      <div className="absolute top-[267px] left-[32px] w-[88px] h-[33px] text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[88px] h-[33px]" />
        <div className="absolute top-[8px] left-[35px] flex items-center w-[50.5px]">
          최신순
        </div>
      </div>
      <div className="absolute top-[267px] left-[133px] w-[146.8px] h-[33px] text-center text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[146.8px] h-[33px]" />
        <div className="absolute top-[8px] left-[32px] flex items-center justify-center w-[112.7px]">
          사진리뷰만 보기
        </div>
      </div>
      <div className="absolute top-[313px] left-[0px] w-[430px] h-[228px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[430px] h-[228px]" />
        <img
          className="absolute top-[21px] left-[22px] rounded-[50%] w-[35px] h-[35px] object-cover"
          alt=""
          src="/ellipse-8@2x.png"
        />
        <div className="absolute top-[21px] left-[76px] text-center">
          레몬나르고빚갚으리오
        </div>
        <div className="absolute top-[41px] left-[76px] flex flex-row items-start justify-start gap-[1px]">
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
        </div>
        <div className="absolute top-[67px] left-[22px] text-sm">
          <p className="m-0">빚 안갚고 이것만 시켜먹고 싶어요</p>
          <p className="m-0">
            양도 많은데 족발자체가 너무 부드럽고 살살녹습니다
          </p>
        </div>
        <img
          className="absolute top-[112px] left-[22px] rounded-3xs w-[60px] h-[60px] object-cover"
          alt=""
          src="/rectangle-50@2x.png"
        />
        <div className="absolute top-[183px] left-[22px] rounded-3xs bg-white box-border w-[196px] h-[26px] border-[1px] border-solid border-whitesmoke-300" />
        <div className="absolute top-[188px] left-[34px] text-smi">
          [무료배달이벤트] 1+1 족발세트
        </div>
      </div>
      <div className="absolute top-[541px] left-[0px] w-[430px] h-[220px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[430px] h-[220px]" />
        <img
          className="absolute top-[21px] left-[22px] rounded-[50%] w-[35px] h-[35px] object-cover"
          alt=""
          src="/ellipse-9@2x.png"
        />
        <div className="absolute top-[21px] left-[76px] text-center">
          맛있으면 짖는 개
        </div>
        <div className="absolute top-[41px] left-[76px] flex flex-row items-start justify-start gap-[1px]">
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
        </div>
        <div className="absolute top-[76px] left-[22px] text-sm">
          월월우ㅜ어루어루얼얼
        </div>
        <img
          className="absolute top-[104px] left-[22px] rounded-3xs w-[60px] h-[60px] object-cover"
          alt=""
          src="/rectangle-53@2x.png"
        />
        <div className="absolute top-[175px] left-[22px] rounded-3xs bg-white box-border w-[196px] h-[26px] border-[1px] border-solid border-whitesmoke-300" />
        <div className="absolute top-[180px] left-[34px] text-smi">
          [무료배달이벤트] 1+1 족발세트
        </div>
      </div>
      <div className="absolute top-[761px] left-[0px] w-[430px] h-[220px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[430px] h-[220px]" />
        <img
          className="absolute top-[21px] left-[22px] rounded-[50%] w-[35px] h-[35px] object-cover"
          alt=""
          src="/ellipse-10@2x.png"
        />
        <div className="absolute top-[21px] left-[76px] text-center">
          냥냥한하루
        </div>
        <div className="absolute top-[41px] left-[76px] flex flex-row items-start justify-start gap-[1px]">
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
          <img
            className="w-[15px] relative h-[15px] object-cover"
            alt=""
            src="/star@2x.png"
          />
        </div>
        <div className="absolute top-[76px] left-[22px] text-sm">
          고기가 야들야들하니 부드럽고 맛있어용
        </div>
        <img
          className="absolute top-[104px] left-[22px] rounded-3xs w-[60px] h-[60px] object-cover"
          alt=""
          src="/rectangle-56@2x.png"
        />
        <div className="absolute top-[175px] left-[22px] rounded-3xs bg-white box-border w-[196px] h-[26px] border-[1px] border-solid border-whitesmoke-300" />
        <div className="absolute top-[180px] left-[34px] text-smi">
          마늘보쌈
        </div>
      </div>
      <img
        className="absolute top-[271px] left-[144px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/slr-camera@2x.png"
      />
      <div className="absolute top-[271px] left-[40px] w-[25px] h-[25px]">
        <img
          className="absolute top-[0px] left-[6.6px] w-[18.4px] h-[25px] object-cover"
          alt=""
          src="/down-arrow@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[18.4px] h-[25px] object-cover"
          alt=""
          src="/up-arrow@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame20;
