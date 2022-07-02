import { KangForm } from '../components/kangForm';
import { KangFormProps } from '../components/kangForm';

type RegFormData = {
  login: string;
  pass: string;
  passRepeat: string;
};

export const AuthPage = () => {
  const regFormProps: KangFormProps<RegFormData> = {
    onSubmit: (d) => console.log('CB:', d),
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
      {
        prop: 'passRepeat',
        label: 'Repeat password',
        validationRules: {
          required: {
            value: true,
            errMsg: 'Pass rep req',
          },
          isEqualTo: { value: 'pass', errMsg: 'Not equal' },
        },
      },
    ],
  };
  return (
    <div>
      <p>Auth page!</p>
      <KangForm {...regFormProps} />
    </div>
  );
};
