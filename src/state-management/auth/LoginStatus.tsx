import useAuthStore from "./store";

const LoginStatus = () => {
    const { user, login, logout } = useAuthStore();

    if (user)
        return (
            <div>
                <span className="mx-2">{user}</span>
                <button onClick={() => logout()}>Logout</button>
            </div>
        );
    return (
        <div>
            <button onClick={() => login("Mohammad Sulthan")}>Login</button>
        </div>
    );
};

export default LoginStatus;
