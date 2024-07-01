import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username && router.pathname !== '/login') {
            router.push('/login');
        }
    }, [router]);

    return <Component {...pageProps }
    />;
};

export default MyApp;