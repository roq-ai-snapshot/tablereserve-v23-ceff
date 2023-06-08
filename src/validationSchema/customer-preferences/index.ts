import * as yup from 'yup';

export const customerPreferenceValidationSchema = yup.object().shape({
  preference: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
