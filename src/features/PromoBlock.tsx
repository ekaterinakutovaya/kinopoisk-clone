import video from "../../public/media/stars.mp4";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { BookmarkPlus } from "lucide-react";

export const PromoBlock = () => {
  return (
    <div className="hidden md:block  w-full max-w-[926px] h-[400px] relative promo-wrapper">
      <div className="promo-content">
        <Link to="#">
          <img src="//avatars.mds.yandex.net/get-bunker/998550/dbc9c484635831df4d6e4f0ee6f14c7300e46e65/800x124" />

          <div className="mt-[16px] text-[13px] leading-[18px] text-white">
            Торговец лошадьми восстает против несправедливости властей. Драма по
            Генриху фон Клейсту с Мадсом Миккельсеном
          </div>
          <div className="mt-[16px] text-[13px] leading-[18px] text-white">
            <span className="font-bold">В главных ролях:</span>
            Мадс Миккельсен, Мелюсин Маянс, Дэльфин Шийо, Роксана Дюран, Давид
            Кросс, Бруно Ганц, Дени Лаван, Пол Бартел
          </div>
          <div className="mt-[8px] text-[13px] leading-[18px] text-white">
            <span className="font-bold mr-[6px]">Режиссер:</span>
            Арно де Пальер
          </div>
          <div className="mt-[24px] text-[20px] leading-[24px] text-[#f50] font-bold">
            Смотрите по подписке
          </div>
          <div className="mt-[12px]">
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="lg">
                <IoPlaySharp className="min-w-[24px] min-h-[24px] " />
                <div className="pl-[4px]">Смотреть</div>
              </Button>
              <Button variant="round" size="roundSm">
                <BookmarkPlus className="min-w-[24px] min-h-[24px] " />
              </Button>
            </div>
          </div>
        </Link>
      </div>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
