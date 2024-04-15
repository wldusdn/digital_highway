import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame14 = () => {
  const navigate = useNavigate();

  const onContainer14Click = useCallback(() => {
    navigate("/18");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-white h-[932px] overflow-hidden cursor-pointer text-left text-13xl text-black font-inter"
      onClick={onContainer14Click}
    >
      <div className="absolute top-[102px] left-[102px]">휴대폰 번호 입력</div>
      <div className="absolute top-[180px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[306px] h-[45px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[257px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[389px] h-[45px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[180px] left-[calc(50%_+_129px)] rounded-3xs bg-white box-border w-[66px] h-[45px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[188px] left-[354px] text-5xl">입력</div>
      <img
        className="absolute top-[39px] right-[371px] w-[27px] h-[26px] object-cover"
        alt=""
        src="/close@2x.png"
      />
    </div>
  );
};

export default Frame14;
