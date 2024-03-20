import { useApi } from "./../composables/useApi";
import type { LoginDto } from "../types/dtos/login.dto";
import type { RegisterDto } from "../types/dtos/register.dto";
import { FetchingStatus } from "../types/enums/FetchingStatus";
import { TSession } from "../types/session.type";

export const useAuthStore = defineStore("auth", () => {
  const username = useCookie(server.TOKEN_KEY);
  const token = useCookie(server.TOKEN_KEY);
  const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
  const session = reactive<TSession>({
    isLoggedIn: false,
    username: undefined,
  });
  const router = useRouter();
  const api = useApi();

  const restoreSession = () => {
    if (!!token.value && !!username.value) {
      session.isLoggedIn = true;
      session.username = username.value!;
    } else {
      session.isLoggedIn = false;
    }
  };

  const login = async (loginDto: LoginDto) => {
    try {
      fetchingStatus.value = FetchingStatus.fetching;
      await new Promise((resolve) => setTimeout(resolve, 100));
      const { result, data } = await api.login(loginDto);
      if (result === "ok") {
        token.value = "DUMP TOKEN";
        username.value = data.username;
        fetchingStatus.value = FetchingStatus.success;
        message.success("Login successful");
        console.log("ล็อคอินสำเร็จ");
      } else {
        session.isLoggedIn = false;
        fetchingStatus.value = FetchingStatus.failed;
        message.error("Login Failed");
      }

      window.open("/stock", "_self");
    } catch (e) {
      console.log(e);

      session.isLoggedIn = false;
      fetchingStatus.value = FetchingStatus.failed;
      message.error("Something went wrong");
    }
  };

  const register = async (registerDto: RegisterDto) => {
    try {
      fetchingStatus.value = FetchingStatus.fetching;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await api.register(registerDto);
      if (result == true) {
        fetchingStatus.value = FetchingStatus.success;
        message.success("Register successful");
        return await navigateTo("/login", { redirectCode: 301 });
      } else {
        fetchingStatus.value = FetchingStatus.failed;
        message.error("Register Failed");
      }
    } catch (e) {
      fetchingStatus.value = FetchingStatus.failed;
      message.error("Something went wrong");
    }
  };

  const logout = async () => {
    username.value = null;
    token.value = null;
    session.isLoggedIn = false;
    session.username = undefined;
    message.success("Logout successful");
    return await navigateTo("/login");
  };

  const isLoading = () => fetchingStatus.value === FetchingStatus.fetching;

  return {
    login,
    register,
    logout,
    isLoading,
    restoreSession,
    session,
  };
});
