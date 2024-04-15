import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame12 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/16");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[932px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[509px] left-[0px] bg-white box-border w-[430px] h-[66px] border-b-[1px] border-solid border-darkgray-200" />
      <div className="absolute top-[155px] left-[31px] flex items-center w-[91px] h-[47px]">
        뒤로가기
      </div>
      <div className="absolute top-[101px] left-[156px] text-13xl">
        장바구니
      </div>
      <img
        className="absolute top-[527px] left-[115px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/plus-math@2x.png"
      />
      <div className="absolute top-[530px] left-[158px] text-xl">
        더 담으러 가기
      </div>
      <div className="absolute top-[577px] left-[0px] bg-white w-[430px] h-[358px]" />
      <div className="absolute top-[602px] left-[31px]">
        배달방식을 선택해주세요
      </div>
      <div
        className="absolute top-[653px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[57px] cursor-pointer border-[1px] border-solid border-silver-100"
        onClick={onRectangle2Click}
      />
      <div className="absolute top-[726px] left-[calc(50%_-_194px)] rounded-3xs bg-white box-border w-[388px] h-[57px] border-[1px] border-solid border-silver-100" />
      <div className="absolute top-[669px] left-[43px] text-cornflowerblue">
        알뜰배달
      </div>
      <div className="absolute top-[742px] left-[43px] text-mediumaquamarine">
        한집배달
      </div>
      <img
        className="absolute top-[668px] left-[132px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/won@2x.png"
      />
      <div className="absolute top-[671px] left-[168px] text-lg">
        (30분~45분)
      </div>
      <div className="absolute top-[744px] left-[168px] text-lg">
        (20분~30분)
      </div>
      <div className="absolute top-[672px] right-[34px] text-lg text-right">
        배달팁 1,000원
      </div>
      <div className="absolute top-[745px] right-[34px] text-lg text-right">
        배달팁 2,000원
      </div>
      <img
        className="absolute top-[741px] left-[132px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/home-page@2x.png"
      />
      <div className="absolute top-[822px] left-[0px] rounded-3xs bg-mediumaquamarine w-[430px] h-[111px]" />
      <div className="absolute top-[863px] left-[21px] text-white text-right">
        총 주문금액
      </div>
      <div className="absolute top-[863px] left-[305px] text-white text-right">
        44,900원
      </div>
      <div className="absolute top-[220px] left-[0px] w-[430px] h-[289px] text-xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100 box-border border-t-[1px] border-solid border-darkgray-200 border-b-[1px]" />
        <div className="absolute top-[30px] left-[31px] text-5xl flex items-center w-[329px] h-[47px]">
          <span className="w-full">
            <p className="m-0">말왕족발</p>
            <p className="m-0">[무료배달이벤트] 1+1 족발세트</p>
          </span>
        </div>
        <div className="absolute h-[20.45%] top-[36.33%] right-[41px] flex items-center w-[219px]">
          <span className="w-full">
            <p className="m-0">가격 : 중 (41,900원)</p>
            <p className="m-0">맛 선택 : 바베큐맛</p>
          </span>
        </div>
        <div className="absolute right-[85px] bottom-[68px] flex items-center w-[175px] h-[37px]">
          43,900원
        </div>
        <img
          className="absolute bottom-[68px] left-[31px] rounded-3xs w-[114px] h-[116px] object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className="absolute top-[241px] left-[170px] rounded-3xs bg-white box-border w-[97px] h-[34px] border-[1px] border-solid border-black" />
        <div className="absolute top-[241px] left-[296px] rounded-3xs bg-white box-border w-[97px] h-[34px] border-[1px] border-solid border-black" />
        <div className="absolute top-[248px] left-[189px] text-base">
          옵션변경
        </div>
        <img
          className="absolute top-[247px] left-[365px] w-5 h-5 object-cover"
          alt=""
          src="/plus-math@2x.png"
        />
        <img
          className="absolute top-[247px] left-[306px] w-5 h-5 object-cover"
          alt=""
          src="/subtract@2x.png"
        />
        <div className="absolute top-[245px] left-[341px]">1</div>
      </div>
    </div>
  );
};

export default Frame12;
