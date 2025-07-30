import { InputContainer } from './InputContainer.jsx';

export const HeroSection = ({ title, backgroundImage }) => {
const InputContainers = [
{
  id: "text-input-depart",
  placeholder: "Abfahrtort",
  path: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
  path2: "M10.5 13.5.5 11 21 3l-8 20.5-2.5-10"
},
{
  id: "text-input-arrival",
  placeholder: "Ankunftsort",
  path: "M17 7H7v10h10V7Z",
  path2: ""
},
{
  id: "input-date",
  placeholder: "Heute",
  path: "M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z",
  path2: ""
},
{
  id: "input-time",
  placeholder: "Jetzt",
  path: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z",
  path2:"M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"
}
];

  return (
    <>
    <section id="hero-section" className="p-16 h-[680px] w-full">
      <div className="px-16 flex h-full w-full"id="hero-container">
        <div id="hero-subcontainer-one" className="flex flex-col flex-1 pr-[180px] gap-8">
          <h1 className="text-[52px]/16 font-bold">{title}</h1>
          <div className="flex flex-col gap-4 items-start">
            <InputContainer {...InputContainers[0]}></InputContainer>
            <InputContainer {...InputContainers[1]}></InputContainer>
            <div className="border-l-[1px] border-black-solid h-[44px] absolute top-[387px] left-[149.5px]"></div>
            <div className="flex w-full gap-2">
              <div>
                <label className="opacity-60 text-sm" htmlFor="input-date">Datum</label>
                <InputContainer {...InputContainers[2]}></InputContainer>
              </div>
              <div>
                <label className="opacity-60 text-sm" htmlFor="input-time">Zeit</label>
                <InputContainer {...InputContainers[3]}></InputContainer>
              </div>
            </div>
            <button className="py-[14px] px-[25px] bg-black hover:bg-black/80 duration-300 ease-in-out rounded-[8px] text-white font-medium">Preise anzeigen</button>
            <div>
              <span className="border-b border-black/20 pb-[6px]">
                Melde dich an, um deine letzten Aktivitäten einzusehen
              </span>
            </div>
          </div>
        </div>
        <div id="hero-subcontainer-two" className="flex-1 flex items-center">
          <div className="w-[576px] h-[384px]"><img className="h-auto w-full" src={backgroundImage} alt="" /></div>
        </div>
      </div>
    </section>
    </>
  );
};