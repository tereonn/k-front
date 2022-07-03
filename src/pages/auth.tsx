import { KangForm } from '../components/kangForm';
import { KangFormProps } from '../components/kangForm';
import * as Helpers from '../helpers';

type RegFormData = {
  login: string;
  pass: string;
  passRepeat: string;
  name: string;
  phone: string;
  city: string;
};

export const AuthPage = () => {
  const onSubmit = async (d: RegFormData) => {
    Helpers.Net.register(d)
      .then((d) => {
        console.log(d);
      })
      .catch((err) => console.log(err));
  };

  const regFormProps: KangFormProps<RegFormData> = {
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
      {
        prop: 'name',
        label: 'User name',
        validationRules: {
          required: {
            value: true,
            errMsg: 'Name is req',
          },
        },
      },
      {
        prop: 'phone',
        label: 'phone num',
        validationRules: {
          required: {
            value: true,
            errMsg: 'Phone num is required',
          },
        },
      },
      {
        prop: 'city',
        label: 'city name',
        validationRules: {
          required: {
            value: true,
            errMsg: 'City is required',
          },
        },
      },
    ],
  };

  return (
    <div>
      <p>Register page!</p>
      <KangForm {...regFormProps} />
    </div>
  );
};
