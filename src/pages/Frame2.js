import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-13xl text-white font-inter">
      <div
        className="absolute top-[765px] left-[73px] rounded-3xs bg-mediumaquamarine box-border w-[283px] h-16 cursor-pointer border-[1px] border-solid border-gray-200"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[779px] left-[192px]">완료</div>
      <div className="absolute top-[111px] left-[34px] text-5xl text-black flex items-center w-[375px] h-[86px]">
        부산 남구 용소로 45(대연동)
      </div>
      <div className="absolute top-[197px] left-[27px] w-[376px] h-20">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gainsboro-400 box-border border-[1px] border-solid border-gainsboro-300" />
      </div>
    </div>
  );
};

export default Frame2;
