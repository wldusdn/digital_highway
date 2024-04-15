import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame9 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-y-auto text-left text-xl text-black font-inter">
      <div className="absolute top-[93px] left-[22px] text-5xl">인기 메뉴</div>
      <div
        className="absolute top-[142px] left-[9px] w-[411px] h-[145px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
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
      <div className="absolute top-[307px] left-[9px] w-[411px] h-[145px]">
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
    </div>
  );
};

export default Frame9;
