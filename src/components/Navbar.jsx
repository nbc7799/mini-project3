import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between relative top-0 h-[50px] p-6 bg-black w-full text-white">
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        로고
      </div>
      <input type="text" className="h-5 w-[50%]" />
      <div className="flex gap-10">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
