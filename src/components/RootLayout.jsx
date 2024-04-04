import { Outlet } from 'react-router-dom';
import Nav from './NavbarLayout';
import { Provider } from 'react-redux';                              
import store from './store/store';


const RootLayout = () => {
    return (
        <div>
            <Provider store={store}>
                
            <Nav></Nav>
            <main>
                <Outlet></Outlet>
            </main>

            </Provider>
        </div>
    );
};

export default RootLayout;