const UerGreeting = () => <h1>Welcome back</h1>

const GuestGreeting = () => <h1>Please sign up</h1>

const Greeting = (props) => {
    const isUserLogin = props.isLoggedIn;
    if (isUserLogin) {
        return <UerGreeting/>
    }
    return <GuestGreeting/>

}

export default Greeting;