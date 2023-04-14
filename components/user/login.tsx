// components/Login.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { AutenticacionAPIAxios} from "../../src/domain/user/infrastructure/auth";

const baseUrl = process.env.AUTH_API_BASE_URL||'http://localhost:8081/api';
export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const authApi = new AutenticacionAPIAxios(baseUrl);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
     

      const token = await authApi.login(username, password);
      console.log('good token',token)
      localStorage.setItem("token", token);
      router.push("/");
    } catch (error) {
      console.error('entro error',error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="username" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
