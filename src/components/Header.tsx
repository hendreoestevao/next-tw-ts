import Image from "next/image";

import Logo from "@/assets/logo.svg";

import Arrow from "@/assets/arrow-down.svg";
export function Header() {
  return (
    <header className="w-full h-20 bg-primary-orange">
      <div className="w-full max-w-[1246px] px-[15px]">
        <div>
          <div>
            <Image src={Logo} alt="Logo" />
            <ul>
              <li>
                <button>
                  <span>Para Você</span>
                  <Image src={Arrow} alt="Arrow dropdown" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
