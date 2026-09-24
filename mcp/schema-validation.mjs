import Ajv from "ajv";

export function createValidator(schema) {
  const ajv = new Ajv({ allErrors: true, strict: true });
  const validate = ajv.compile(schema);
  return value => {
    const valid = validate(value);
    return { valid, errors: valid ? [] : (validate.errors ?? []).map(e => ({ instancePath:e.instancePath, keyword:e.keyword, message:e.message })) };
  };
}

export function assertValid(validate, value, label="value") {
  const result=validate(value);
  if(!result.valid) {
    const err=new Error(`${label} failed schema validation: ${JSON.stringify(result.errors)}`);
    err.code="UT_SCHEMA_VALIDATION";
    err.validation=result.errors;
    throw err;
  }
  return value;
}
