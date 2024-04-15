import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame19 = () => {
  const navigate = useNavigate();

  const onContainer19Click = useCallback(() => {
    navigate("/23");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-white h-[932px] overflow-hidden cursor-pointer text-center text-5xl text-black font-inter"
      onClick={onContainer19Click}
    >
      <div className="absolute top-[105px] left-[39px] text-left">
        주문 진행 중이에요
      </div>
      <div className="absolute top-[105px] left-[310px] rounded-3xs bg-lightcyan w-[90px] h-20" />
      <div className="absolute top-[120px] left-[325px] text-base">
        남은시간
      </div>
      <div className="absolute top-[141px] left-[39px] text-base text-left">
        <p className="m-0">맛있게 조리하여 배달해드릴게요</p>
        <p className="m-0">잠시만 기다려주세요</p>
      </div>
      <div className="absolute top-[328px] left-[39px] rounded-3xs bg-whitesmoke-200 w-[361px] h-[17px]" />
      <div className="absolute top-[328px] left-[39px] rounded-3xs bg-mediumaquamarine w-[103px] h-[17px]" />
      <div className="absolute top-[140px] left-[322px] text-11xl">45분</div>
      <div className="absolute top-[328px] left-[65px] rounded-[50%] bg-lightseagreen w-[15px] h-4" />
      <div className="absolute top-[328px] left-[355px] rounded-[50%] bg-silver-100 w-[15px] h-4" />
      <div className="absolute top-[352px] left-[43px] text-base text-mediumaquamarine">
        주문접수
      </div>
      <div className="absolute top-[352px] left-[333px] text-base text-silver-100">
        배달완료
      </div>
      <div className="absolute top-[282px] left-[326px] text-base text-silver-100">
        <p className="m-0">오후 10:10</p>
        <p className="m-0">{`도착예정 `}</p>
      </div>
      <img
        className="absolute top-[210px] left-[165px] w-[109px] h-[126px] object-cover"
        alt=""
        src="/kakaotalk-20240410-182746195-1@2x.png"
      />
      <div className="absolute top-[402px] left-[0px] bg-white box-border w-[430px] h-[490px] border-t-[1px] border-solid border-lightgray-100 border-b-[1px]" />
      <div className="absolute top-[437px] left-[39px]">주문 내역</div>
      <div className="absolute top-[483px] left-[31px] text-13xl">말왕족발</div>
      <div className="absolute top-[535px] left-[31px]">
        [무료배달이벤트] 1+1 족발세트
      </div>
      <div className="absolute top-[581px] left-[35px] text-xl text-left">
        <p className="m-0">주문일시 : 2024년 03월 25일 오후 09:25</p>
        <p className="m-0">주문번호 : T1R60000HJ72</p>
        <p className="m-0">배달방식 : 알뜰배달</p>
      </div>
      <div className="absolute top-[685px] left-[calc(50%_-_184px)] rounded-3xs bg-white box-border w-[168px] h-[52px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[685px] left-[calc(50%_+_15px)] rounded-3xs bg-white box-border w-[168px] h-[52px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[697px] left-[87px]">문의하기</div>
      <div className="absolute top-[697px] left-[288px]">가게보기</div>
      <img
        className="absolute top-[696px] left-[253px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/about@2x.png"
      />
      <img
        className="absolute top-[696px] left-[52px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/online-shop@2x.png"
      />
    </div>
  );
};

export default Frame19;
