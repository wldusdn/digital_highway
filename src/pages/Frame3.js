import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame3 = () => {
  const navigate = useNavigate();

  const onComponent15ContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-center text-mini text-black font-inter">
      <div className="absolute top-[53px] left-[27px] text-5xl text-left flex items-center w-[375px] h-[86px]">
        부산 남구 용소로 45(대연동) 303호
      </div>
      <div className="absolute top-[133px] left-[25px] rounded-3xs bg-gainsboro-400 box-border w-[376px] h-20 border-[1px] border-solid border-gainsboro-300" />
      <img
        className="absolute top-[148px] left-[37px] w-[42px] h-[53px] object-cover"
        alt=""
        src="/search@2x.png"
      />
      <div className="absolute top-[831px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0.5)] box-border w-[430px] h-[101px] border-t-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[240px] left-[25px] rounded-3xs bg-whitesmoke-100 w-[376px] h-[557px]" />
      <div className="absolute top-[266px] left-[52px] text-5xl">메뉴 선택</div>
      <div className="absolute top-[337px] left-[36px] w-[352px] flex flex-row flex-wrap items-center justify-center gap-[110px_20px] text-xs">
        <div
          className="w-[70px] relative h-[70px] cursor-pointer"
          onClick={onComponent15ContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_25px)]">
            족발/보쌈
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_20px)]">
            <p className="m-0">돈까스/</p>
            <p className="m-0">회/일식</p>
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_25px)]">
            고기/구이
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_25px)]">
            피자/치킨
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_12px)]">
            양식
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_12px)]">
            중식
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_12px)]">
            분식
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_31px)]">
            카페/디저트
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_18px)]">
            아시안
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_20px)]">
            백반/죽
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_12px)]">
            국수
          </div>
        </div>
        <div className="w-[70px] relative h-[70px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-white" />
          <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_18px)]">
            햄버거
          </div>
        </div>
      </div>
      <div className="absolute top-[852px] left-[47px] w-10 h-[60px]">
        <img
          className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/search@2x.png"
        />
        <div className="absolute h-[33.33%] w-[150%] top-[66.67%] left-[-25%] flex items-center justify-center">
          검색
        </div>
      </div>
      <div className="absolute top-[852px] left-[120px] w-10 h-[60px]">
        <img
          className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/favorite@2x.png"
        />
        <div className="absolute h-[33.33%] w-[150%] top-[66.67%] left-[-25%] flex items-center justify-center">
          찜
        </div>
      </div>
      <div className="absolute top-[852px] left-[193px] w-10 h-[60px]">
        <img
          className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/clipboard@2x.png"
        />
        <div className="absolute h-[33.33%] w-[150%] top-[66.67%] left-[-25%] flex items-center justify-center">
          주문내역
        </div>
      </div>
      <div className="absolute top-[852px] left-[266px] w-10 h-[60px]">
        <img
          className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/shopping-cart@2x.png"
        />
        <div className="absolute h-[33.33%] w-[150%] top-[66.67%] left-[-25%] flex items-center justify-center">
          장바구니
        </div>
      </div>
      <div className="absolute top-[852px] left-[339px] w-10 h-[60px]">
        <img
          className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/customer@2x.png"
        />
        <div className="absolute h-[33.33%] w-[150%] top-[66.67%] left-[-25%] flex items-center justify-center">
          내 정보
        </div>
      </div>
    </div>
  );
};

export default Frame3;
