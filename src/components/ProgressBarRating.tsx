import { IoStar } from "react-icons/io5";

export const ProgressBarRating = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4 pt-[30px] mb-[30px]">
      <div>
        <div className="mb-[16px] text-[18px] font-bold">
          Рейтинг кинокритиков в мире
        </div>

        <div className="filmRatingBar">
          <div className="greenBar">91</div>
          <div className="redBar">40</div>
          <span className="positiveBar"></span>
        </div>

        <div className="actionBar">
          <div className="actionBarLeft">
            <div className="film-rating ">
              <div className="ratingValue flex items-baseline">
                <div className="valueBlock flex items-center">
                  <span className="value">
                    <span className="film-rating-value">
                      <span className="ratingPositive text-[24px] font-semibold text-[#3bb33b]">
                        81%
                      </span>
                    </span>
                  </span>
                </div>
                <div className="countBlock">
                  <span className="count flex items-baseline text-[#00000099] ml-[4px] text-[13px]">
                    131 оценка
                    <span className="starValue ml-[14px] text-[18px] flex items-baseline gap-2 text-black">
                      <IoStar />
                      6.2
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[16px] text-[18px] font-bold">В России</div>

        <div className="filmRatingBar">
          <div className="greenBar">91</div>
          <div className="redBar">40</div>
          <span className="positiveBar"></span>
        </div>

        <div className="actionBar">
          <div className="actionBarLeft">
            <div className="film-rating ">
              <div className="ratingValue flex items-baseline">
                <div className="valueBlock flex items-center">
                  <span className="value">
                    <span className="film-rating-value">
                      <span className="ratingPositive text-[24px] font-semibold text-[#3bb33b]">
                        71%
                      </span>
                    </span>
                  </span>
                </div>
                <div className="countBlock">
                  <span className="count flex items-baseline text-[#00000099] ml-[4px] text-[13px]">
                    14 оценок
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
