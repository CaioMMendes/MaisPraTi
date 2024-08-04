import { LanguagesIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../components/button";
import { InputContainer } from "../../components/input";
import netflixLogo from "/netflix-logo.png";

const Login = () => {
  const handleSubmit = () => {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowMoreVisible, setShowMoreVisible] = useState(false);

  return (
    <div className="relative flex w-full max-w-[100vw] flex-col gap-4 bg-black xl:items-center">
      <div className="md:overflow-clip-margin relative flex w-full flex-col md:overflow-clip md:bg-login xl:items-center">
        <p className="pointer-events-none absolute left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 select-none flex-wrap overflow-hidden text-center text-[3rem] text-white/30 md:text-[5rem]">
          Projeto para aprendizado, não utilize dados reais
        </p>
        <div className="absolute z-10 h-full w-full bg-[#00000073]"></div>
        <header className="z-20 flex w-full px-6 py-6 sm:px-12 sm:py-6 xl:max-w-7xl">
          <nav>
            <NavLink
              to={"/"}
              className="flex h-6 w-[5.5625rem] md:h-10 md:w-[9.25rem]"
            >
              {/* <div> */}
              <img src={netflixLogo} alt="Netflix" className="object-cover" />
              {/* </div> */}
            </NavLink>
          </nav>
        </header>
        <main className="flex items-center justify-center md:px-6">
          <section
            id="login-form"
            className="sm:px-17 z-20 flex w-full flex-col items-center justify-center gap-4 rounded-[4px] bg-[#000000b2] px-6 sm:px-[68px] sm:py-12 md:mb-[5.5rem] md:max-w-[28.125rem]"
          >
            <header className="w-full">
              <h1 className="mb-3 w-full text-start text-[2rem] font-bold">
                Entrar
              </h1>
            </header>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4"
            >
              <InputContainer
                inputValue={email}
                setInputValue={setEmail}
                name="email"
                labelText="Email ou número de celular"
              />
              <InputContainer
                inputValue={password}
                setInputValue={setPassword}
                name="password"
                type="password"
                labelText="Senha"
              />
              <Button>Entrar</Button>
            </form>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="text-[#ffffffb3]">OU</p>
              <Button className="w-full" variant="secondary">
                Usar um código de acesso
              </Button>
              <p>Esqueceu a senha?</p>
              <label className="flex w-full items-center justify-start gap-3">
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] border border-[#808080b2] bg-black text-white accent-white invert checked:border-none checked:invert-0 hover:border-white checked:hover:opacity-70"
                />
                Lembre-se de mim
              </label>
              <p className="w-full text-start text-[#ffffffb3]">
                Novo por aqui?{" "}
                <Link to="#" className="text-white hover:underline">
                  Assine agora
                </Link>
              </p>
              <p className="text-[13px] text-[#8c8c8c]">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.{" "}
                <button
                  onClick={() => setShowMoreVisible((show) => !show)}
                  className="text-blue-link hover:underline"
                >
                  Saiba mais.
                </button>
              </p>
              <p
                className={`${isShowMoreVisible ? "opacity-100" : "opacity-0"} text-[13px] text-[#8c8c8c]`}
              >
                As informações recolhidas pelo Google reCAPTCHA estão sujeitas à
                <span className="text-blue-link hover:underline">
                  Política de Privacidade
                </span>{" "}
                e
                <span className="text-blue-link hover:underline">
                  Termos de Uso
                </span>
                , e são usadas para oferecer, manter e melhorar o serviço
                reCAPTCHA e por questões de segurança (não são usadas para
                exibir anúncios personalizados pelo Google).
              </p>
            </div>
          </section>
        </main>
      </div>

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
    </div>
  );
};

export default Login;
