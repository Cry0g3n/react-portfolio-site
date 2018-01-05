import React, {PureComponent} from 'react';
import {AuthContainer, AuthHeader} from "./Styles";

class Auth extends PureComponent {
    render() {
        return (
            <AuthContainer>
                <AuthHeader>Авторизуйтесь</AuthHeader>
                {/*<form action="/auth" method="POST">*/}
                    {/*<div className="form__inline">*/}
                        {/*<i className="icon icon__people"></i>*/}
                        {/*<input type="text" name="login" placeholder="Логин" data-error="Вы не ввели логин"*/}
                               {/*className="input input__login"/>*/}
                    {/*</div>*/}
                {/*</form>*/}
            </AuthContainer>
        );
    }
}

export default Auth;
