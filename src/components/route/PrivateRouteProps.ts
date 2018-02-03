import { RouteProps } from 'react-router';


interface PrivateRouteProps extends RouteProps {
    isLoggedIn: boolean;
    authPath: string;
}

export default PrivateRouteProps;