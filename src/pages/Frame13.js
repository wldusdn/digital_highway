import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame13 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[92px] left-[120px] flex items-center w-[119px] h-[47px]">
        로 받을게요
      </div>
      <div className="absolute top-[92px] left-[250px] text-base text-right flex items-center w-[154px] h-[47px]">
        30~45분 후 도착
      </div>
      <div className="absolute top-[104px] left-[26px] text-cornflowerblue">
        알뜰배달
      </div>
      <img
        className="absolute top-[105px] left-[100px] w-5 h-5 object-cover"
        alt=""
        src="/won@2x.png"
      />
      <div className="absolute top-[154px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[93px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[418px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[519px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[42px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[158px] left-[42px] text-5xl flex items-center w-[375px] h-[86px]">
        <span className="w-full">
          <p className="m-0">부산 남구 용소로 45(대연동)</p>
          <p className="m-0">303호</p>
        </span>
      </div>
      <div className="absolute top-[273px] left-[42px]">
        휴대폰번호 인증이 필요합니다
      </div>
      <div
        className="absolute top-[267px] left-[321px] w-[76px] h-[35px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[76px] h-[35px] border-[1px] border-solid border-silver-100" />
        <div className="absolute top-[6px] left-[19px]">인증</div>
      </div>
      <div className="absolute top-[330px] left-[26px] text-5xl">요청사항</div>
      <div className="absolute top-[374px] left-[42px] text-5xl">
        가게 사장님께
      </div>
      <div className="absolute top-[475px] left-[42px] text-5xl">
        라이더님께
      </div>
      <div className="absolute top-[816px] left-[0px] rounded-3xs bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-lightgray-200" />
      <div className="absolute top-[869px] left-[77px] w-[275px] h-[43px] text-3xl text-white">
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

export default Frame13;
