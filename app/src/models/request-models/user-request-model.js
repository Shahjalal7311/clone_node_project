const Joi = require('joi');
export const schema = Joi.object().keys(
    {
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org'] } })
    }
);
const validate = (data) => {
    const result = schema.validate(data);
    data.createdAt = new Date();
    result.value = data;
    return result;
}

export default validate; 