import { useForm, RegisterOptions, FieldErrors } from 'react-hook-form';

type ValidateOpsWithErr = {
  [Property in keyof RegisterOptions]: {
    value: RegisterOptions[Property];
    errMsg: string;
  };
};

interface ValidationRules<ValidationFormData> extends ValidateOpsWithErr {
  isEqualTo?: {
    value: Extract<keyof ValidationFormData, string>;
    errMsg: string;
  };
}

export interface KangFormProps<FormData> {
  onSubmit: (d: FormData) => void;
  inputs: {
    prop: Extract<keyof FormData, string>;
    label: string;
    validationRules?: ValidationRules<FormData>;
  }[];
}

export function KangForm<T>(props: KangFormProps<T>) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<T>();

  const createInputValidationOps = (rules: ValidationRules<T> | undefined) => {
    if (!rules) {
      return undefined;
    }

    const ops = { ...rules };
    let validate = undefined;

    const res: RegisterOptions = {};
    let prop: keyof ValidationRules<T>;
    for (prop in ops) {
      if (prop === 'isEqualTo' && ops.isEqualTo) {
        const pName: keyof T = ops.isEqualTo.value;

        delete ops.isEqualTo;

        validate = (v: unknown) => getValues()[pName] === v;
      } else {
        res[prop as keyof ValidateOpsWithErr] = (
          ops[prop] as ValidateOpsWithErr
        ).value;
      }
    }

    return {
      ...res,
      validate,
    };
  };

  const getError = (
    errors: FieldErrors<T>,
    prop: Extract<keyof T, string>,
    rules: ValidationRules<T> | undefined,
  ): string => {
    if (!rules) {
      return '';
    }

    if (errors[prop]) {
      let type = errors[prop]?.type;
      if (type === 'validate') {
        type = 'isEqualTo';
      }

      if (rules[type as keyof ValidationRules<T>]) {
        const targetProp = type as keyof ValidationRules<T>;
        return rules[targetProp]?.errMsg ?? '';
      }
    }

    return '';
  };

  return (
    <form onSubmit={handleSubmit((d) => props.onSubmit(d))}>
      {props.inputs.map((p, i) => (
        <div key={i}>
          <p>{p.label}</p>
          <input
            {...register(
              p.prop as any,
              createInputValidationOps(p?.validationRules ?? undefined),
            )}
          />
          <p>{getError(errors, p.prop, p.validationRules)}</p>
        </div>
      ))}
      <input type="submit" />
    </form>
  );
}
