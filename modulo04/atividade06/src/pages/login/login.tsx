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
    <div>
      <header className="flex w-full p-6 sm:px-12 sm:py-6">
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

      <main className="flex items-center justify-center">
        <section
          id="login-form"
          className="sm:px-17 bg-[rgba(0, 0, 0, 0.7)] w-full px-6 sm:py-12"
        >
          <header>
            <h1 className="mb-7 text-[2rem] font-bold">Entrar</h1>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <p className="text-[#ffffffb3]">OU</p>
          <Button variant="secondary">Usar um código de acesso</Button>
          <p>Esqueceu a senha?</p>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="h-[18px] w-[18px] border border-[#808080b2] bg-black text-white accent-white invert checked:border-none checked:invert-0 hover:border-white checked:hover:opacity-70"
            />
            Lembre-se de mim
          </label>
          <p className="text-[#ffffffb3]">
            Novo por aqui?{" "}
            <Link to="#" className="text-white hover:underline">
              Assine agora
            </Link>
          </p>
          <p className="text-[#8c8c8c]">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.{" "}
            <button
              onClick={() => setShowMoreVisible((show) => !show)}
              className="text-blue-link hover:underline"
            >
              Saiba mais.
            </button>
          </p>
          <p
            className={`${isShowMoreVisible ? "visible" : "hidden"} text-[#8c8c8c]`}
          >
            As informações recolhidas pelo Google reCAPTCHA estão sujeitas à
            <span className="text-blue-link hover:underline">
              Política de Privacidade
            </span>{" "}
            e
            <span className="text-blue-link hover:underline">
              Termos de Uso
            </span>
            , e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA
            e por questões de segurança (não são usadas para exibir anúncios
            personalizados pelo Google).
          </p>
        </section>
      </main>
      <footer className="text-[#ffffffb2]">
        <p>Dúvidas? Ligue 0800 591 2876</p>
        <div className="grid grid-cols-2">
          <p>Perguntas frequentes</p>
          <p>Central de Ajuda</p>
          <p>Termos de Uso</p>
          <p>Privacidade</p>
          <p>Preferências de cookies</p>
          <p>Informações corporativas</p>
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
      </footer>
    </div>
  );
};

export default Login;
