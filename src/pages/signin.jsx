export function Signin() {
    return (
        <>
            <h1>Welcome back!</h1>
            <form action="/">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
            </form>
        </>
    )
}