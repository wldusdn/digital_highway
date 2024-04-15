import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame4 = () => {
  const navigate = useNavigate();

  const onText4Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[53px] left-[343px] w-[62px] h-[85px] text-center text-mini">
        <div className="absolute h-[49.41%] w-full top-[0%] right-[0%] bottom-[50.59%] left-[0%]" />
        <div className="absolute h-[55.29%] w-[93.55%] top-[44.71%] left-[3.23%] flex items-center justify-center">
          장바구니
        </div>
      </div>
      <img
        className="absolute top-[72px] left-[343px] w-[60px] h-8 object-cover"
        alt=""
        src="/shopping-cart@2x.png"
      />
      <div className="absolute top-[72px] left-[36px] flex items-center w-[91px] h-[47px]">
        뒤로가기
      </div>
      <div className="absolute top-[140px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0)] box-border w-[430px] h-[65px] border-t-[1px] border-solid border-lightgray-300 border-b-[1px]" />
      <div className="absolute top-[205px] left-[0px] bg-white shadow-[0px_0px_0px_rgba(0,_0,_0,_0)] w-[430px] h-[89px]" />
      <div className="absolute top-[165px] left-[36px] flex items-center w-[97px] h-[18px]">
        족발/보쌈
      </div>
      <div className="absolute top-[165px] left-[161px] flex items-center w-[150px] h-[18px]">
        돈까스/회/일식
      </div>
      <div className="absolute top-[165px] left-[336px] flex items-center w-[53px] h-[18px]">
        고기/
      </div>
      <div
        className="absolute top-[240px] left-[26px] text-xl cursor-pointer"
        onClick={onText4Click}
      >
        정렬
      </div>
      <div className="absolute top-[233px] left-[80px] w-[68px] h-[33px] text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[68px] h-[33px]" />
        <div className="absolute top-[8px] left-[16px]">별점순</div>
      </div>
      <div className="absolute top-[233px] left-[165px] w-[68px] h-[33px] text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[68px] h-[33px]" />
        <div className="absolute top-[8px] left-[8px]">배달방식</div>
      </div>
      <div className="absolute top-[233px] left-[250px] w-[68px] h-[33px] text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[68px] h-[33px]" />
        <div className="absolute top-[8px] left-[21px]">쿠폰</div>
      </div>
      <div className="absolute top-[233px] left-[335px] w-[68px] h-[33px] text-sm">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke-100 w-[68px] h-[33px]" />
        <div className="absolute top-[8px] left-[16px]">배달팁</div>
      </div>
      <div className="absolute top-[294px] left-[0px] bg-white box-border w-[430px] h-[638px] border-[1px] border-solid border-gray-200" />
      <div className="absolute top-[282px] left-[0px] w-[430px] h-[207px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        <div className="absolute top-[22px] left-[23px]">미미족발 부경점</div>
        <img
          className="absolute top-[19px] left-[194px] w-[35px] h-[35px] object-cover"
          alt=""
          src="/star@2x.png"
        />
        <div className="absolute top-[22px] left-[232px]">4.7</div>
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[67.44%] bottom-[8.21%] left-[4.65%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[35.58%] bottom-[8.21%] left-[36.51%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[3.72%] bottom-[8.21%] left-[68.37%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="absolute top-[499px] left-[0px] w-[430px] h-[207px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        <div className="absolute top-[22px] left-[23px]">뿌공족발 부경점</div>
        <img
          className="absolute top-[19px] left-[194px] w-[35px] h-[35px] object-cover"
          alt=""
          src="/star@2x.png"
        />
        <div className="absolute top-[22px] left-[232px]">4.7</div>
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[67.44%] bottom-[8.21%] left-[4.65%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[35.58%] bottom-[8.21%] left-[36.51%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[3.72%] bottom-[8.21%] left-[68.37%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="absolute top-[716px] left-[0px] w-[430px] h-[207px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        <div className="absolute top-[22px] left-[23px]">백경족발 부경점</div>
        <img
          className="absolute top-[19px] left-[194px] w-[35px] h-[35px] object-cover"
          alt=""
          src="/star@2x.png"
        />
        <div className="absolute top-[22px] left-[232px]">4.5</div>
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[67.44%] bottom-[8.21%] left-[4.65%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[35.58%] bottom-[8.21%] left-[36.51%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute h-[57.97%] w-[27.91%] top-[33.82%] right-[3.72%] bottom-[8.21%] left-[68.37%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame4;
