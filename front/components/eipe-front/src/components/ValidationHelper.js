import * as Yup from 'yup';
import { each, groupBy } from 'aigle';
import { keys } from 'lodash';

const ValidationHelper = async (validationSchema, data) => {
  const buildError = async (error) => {
    const errors = {};

    if (error instanceof Yup.ValidationError) {
      const fieldErrors = await groupBy(error.inner, 'path');
      const fields = keys(fieldErrors);

      await each(fields, async (field) => {
        const errorsHolder = [];

        await each(fieldErrors[field], (fieldError) => {
          errorsHolder.push(fieldError.errors[0]);
        });

        errors[field] = errorsHolder[0];
      });
    } else {
      errors[error.name] = error.message;
    }

    return errors;
  };

  return await validationSchema
    .validate(data, {
      abortEarly: false,
    })
    .then((data) => {
      return;
    })
    .catch((err) => {
      return buildError(err);
    });
};

export default ValidationHelper;
