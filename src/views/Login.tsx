import { useState } from "react";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <input
          type={"text"}
          placeholder={"아이디"}
          onChange={(e) => setAccount(e.target.value)}
        />
        <p>{account}</p>
        <input type={"password"} placeholder={"비번"} />
        <p>{password}</p>
      </div>
      <div>
        <button>로그인</button>
      </div>
    </div>
  );
}
