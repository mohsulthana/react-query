import useAuth from "./useAuth";

const LoginStatus = () => {
    const { user, dispatch } = useAuth();

    if (user)
        return (
            <div>
                <span className="mx-2">{user}</span>
                <button onClick={() => dispatch({ type: "LOGOUT" })}>
                    Logout
                </button>
            </div>
        );
    return (
        <div>
            <button
                onClick={() =>
                    dispatch({ type: "LOGIN", username: "Mohammad Sulthan" })
                }
            >
                Login
            </button>
        </div>
    );
};

export default LoginStatus;
