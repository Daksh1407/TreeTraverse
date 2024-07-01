const { useState } = require('react');
const { useRouter } = require('next/router');



const LoginPage = () => {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Simple client-side username storage
        localStorage.setItem('username', username);
        router.push('/');
    };

    return ( <
        div >
        <
        h1 > Login < /h1> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        placeholder = "Enter your username" /
        >
        <
        button onClick = { handleLogin } > Login < /button>  < /
        div >
    );
};

export default LoginPage;