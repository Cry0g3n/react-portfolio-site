import React, {PureComponent} from 'react';

class Auth extends PureComponent {
    render() {
        return (
            <div className="auth">
                <h4>Авторизуйтесь</h4>
                {/*<form action="/auth" method="POST">*/}
                    {/*<div className="form__inline">*/}
                        {/*<i className="icon icon__people"></i>*/}
                        {/*<input type="text" name="login" placeholder="Логин" data-error="Вы не ввели логин"*/}
                               {/*className="input input__login"/>*/}
                    {/*</div>*/}
                {/*</form>*/}
            </div>
        );
    }
}

export default Auth;
