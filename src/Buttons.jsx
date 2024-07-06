import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Buttons(){
    return (
        <div className="button-container">
             <button className="count-btn">
                <MinusIcon/>
             </button>
             <button className="count-btn"> <PlusIcon/></button>
        </div>
    )
}