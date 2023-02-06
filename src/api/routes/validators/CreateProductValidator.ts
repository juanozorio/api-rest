import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().strict().required()
});

export const validateCreateProduct = async (req, res, next) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err) {
    return res.status(400).json({ type: err.name, message: err.message });
  }
};