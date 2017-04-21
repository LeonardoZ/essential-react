
export const DO_LOGIN = "DO_LOGIN";

export function doLogin (email, password) {
    // Fake Login
    console.log(email, password);

    return {
        type: DO_LOGIN,
        payload: {
            email: email,
            logged: true
        }
    };
}