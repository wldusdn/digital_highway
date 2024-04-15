import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden flex flex-row items-start justify-end py-[18px] px-[25px] box-border gap-[2px] text-center text-[48px] text-white font-inter">
      <div className="w-[844px] h-[498px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[206px] mt-[346px]">
        <div className="w-[286px] h-[204px] flex flex-col items-end justify-start py-[87px] px-[58px] box-border bg-[url('/public/frame-28@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="w-3 relative bg-black h-2" />
        </div>
        <div
          className="w-[227px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onFrameContainer1Click}
        >
          <div className="rounded-3xs bg-mediumaquamarine overflow-hidden flex flex-row items-center justify-center py-[15px] px-[25px] border-[1px] border-solid border-gray-200">
            <div className="relative">시작하기</div>
          </div>
        </div>
      </div>
      <img
        className="w-[45px] relative h-[52px] object-cover"
        alt=""
        src="/close@2x.png"
      />
    </div>
  );
};

export default Frame;
