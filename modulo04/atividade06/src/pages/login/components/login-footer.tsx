import { LanguagesIcon } from "lucide-react";

const LoginFooter = () => {
  return (
    <footer className="border-1 relative flex w-full justify-center border-t border-[#808080b2] from-[#000000d9] to-[rgb(0,0,0)] text-[#ffffffb2] md:-top-[4.5rem] md:border-none md:bg-gradient-to-b md:pt-7">
      <div className="z-30 flex w-full flex-col gap-4 px-6 pt-3 md:pt-0 xl:max-w-7xl xl:px-12">
        <p>Dúvidas? Ligue 0800 591 2876</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p className="underline">Perguntas frequentes</p>
          <p className="underline">Central de Ajuda</p>
          <p className="underline">Termos de Uso</p>
          <p className="underline">Privacidade</p>
          <p className="underline">Preferências de cookies</p>
          <p className="underline">Informações corporativas</p>
        </div>

        <div className="relative text-white">
          <span className="absolute left-1 top-1/2 -translate-y-1/2">
            <LanguagesIcon width={16} height={16} />
          </span>
          <select className="color-white rounded-[3px] bg-black px-9 py-1.5 accent-black ring-1 ring-[#808080b3]">
            <option value="portugues">Português</option>
            <option value="english">English</option>
          </select>
          <span className="absolute top-1/2 -translate-y-1/2"></span>
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
