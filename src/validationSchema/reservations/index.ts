import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
