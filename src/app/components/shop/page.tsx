import Image from "next/image";
import  card from "@/images/card-item (1).png";

export default function Shop(){
    return(
        <div className="w-full h-[271]" >
          <div className="w-1088 h-[223px] bg-white">
          <Image src={card} alt="Instagram" width={16} height={16} />
          </div>
        </div>
    )
}