import { Link } from "react-router-dom";
import { InputContainer } from "../../../components/input";
import { Button } from "../../../components/button";
import { useState } from "react";

const LoginMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowMoreVisible, setShowMoreVisible] = useState(false);

  return (
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
        <form className="flex w-full flex-col gap-4">
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
          <Link to="/home" className="flex w-full">
            <Button className="w-full">Entrar</Button>
          </Link>
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
            , e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA
            e por questões de segurança (não são usadas para exibir anúncios
            personalizados pelo Google).
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginMain;
