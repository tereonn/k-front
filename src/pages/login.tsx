import { KangForm, KangFormProps } from '../components/kangForm';
import * as Helpers from '../helpers';

type LoginFormData = {
  login: string;
  pass: string;
};
export const LoginPage = () => {
  const onSubmit = (d: LoginFormData) => {
    Helpers.Net.login(d)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const regFormProps: KangFormProps<LoginFormData> = {
    onSubmit,
    inputs: [
      {
        prop: 'login',
        label: 'Login',
        validationRules: {
          required: {
            value: true,
            errMsg: 'Login is required',
          },
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            errMsg: 'Login must be valid email',
          },
        },
      },
      {
        prop: 'pass',
        label: 'Password',
        validationRules: {
          required: {
            value: true,
            errMsg: 'Pass req',
          },
          minLength: {
            value: 5,
            errMsg: 'Pass must be 5 or greater',
          },
        },
      },
    ],
  };

  return (
    <div>
      <p>Login page!</p>
      <KangForm {...regFormProps} />
    </div>
  );
};
