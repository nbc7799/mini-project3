import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [text, setText] = useState();
  const debouncedText = useDebounce(text, 700);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedText) {
      navigate(`/search?query=${debouncedText}`);
    }
  }, [debouncedText]);

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
      <input
        type="search"
        className="h-5 w-[50%] text-black"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="flex gap-10">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
