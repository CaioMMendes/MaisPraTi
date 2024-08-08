import LoginFooter from "./components/login-footer";
import LoginHeader from "./components/login-header";
import LoginMain from "./components/login-main";

const Login = () => {
  return (
    <div className="relative flex w-full max-w-[100vw] flex-col gap-4 bg-black xl:items-center">
      <div className="md:overflow-clip-margin relative flex w-full flex-col md:overflow-clip md:bg-login xl:items-center">
        <p className="pointer-events-none absolute left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 select-none flex-wrap overflow-hidden text-center text-[3rem] text-white/30 md:text-[5rem]">
          Projeto para aprendizado, não utilize dados reais
        </p>
        <div className="absolute z-10 h-full w-full bg-[#00000073]"></div>
        <LoginHeader />
        <LoginMain />
      </div>

      <LoginFooter />
    </div>
  );
};

export default Login;
