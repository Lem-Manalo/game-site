import "../css/accessories.css";
import PS5Controller from "../images/ps5-controller.webp";
import PS5Headset from "../images/ps5-headset.webp";
import XboxController from "../images/xbox-controller.jpg"
import Xbox8BitDo from "../images/xbox-8bitdo.jpg"
import XboxHeadset from "../images/xbox-headset.jpg"
import SwitchJoycon from "../images/switch-joycon.jpg"
import SwitchController from "../images/switch-controller.avif"
import SwitchSplitpad from "../images/switch-splitpad.avif"

function Accessories() {
  return (
    <section className="w-full card-list py-20 px-8 text-gray-700 bg-background items-center">
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={PS5Controller} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={PS5Headset} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={XboxController} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={Xbox8BitDo} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={XboxHeadset} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={SwitchJoycon} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={SwitchController} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card">
        <div className="row-span-3 overflow-hidden">
          <img className="w-full h-auto" src={SwitchSplitpad} alt="Assassin's Creed: Odyssey" />
        </div>
        <div className="p-4 row-span-2">
          <h4 className="font-bold text-md">Assassin's Creed: Odyssey</h4>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}

export default Accessories;
