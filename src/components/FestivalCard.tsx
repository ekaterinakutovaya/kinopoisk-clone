type Props = {
  img: string;
};

export const FestivalCard = ({ img }: Props) => {
  return (
    <div className="w-full max-w-[926px]">
      <div className="relative flex justify-center items-center w-full h-[294px] bg-[#f4f4f4] overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
