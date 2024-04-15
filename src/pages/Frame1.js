import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame1 = () => {
  const navigate = useNavigate();

  const onContainer1Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-white h-[932px] overflow-hidden cursor-pointer text-left text-[36px] text-black font-inter"
      onClick={onContainer1Click}
    >
      <div className="absolute top-[55px] left-[33px] flex items-center w-[375px] h-[143px]">
        <span className="w-full">
          <p className="m-0">배달 받을 주소를</p>
          <p className="m-0">설정해주세요</p>
        </span>
      </div>
      <div className="absolute top-[197px] left-[22px] w-[376px] h-20">
        <input
          className="[outline:none] bg-gainsboro-400 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[1px] border-solid border-gainsboro-300"
          type="text"
        />
        <img
          className="absolute h-[66.25%] w-[11.17%] top-[18.75%] right-[85.64%] bottom-[15%] left-[3.19%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/search@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame1;
