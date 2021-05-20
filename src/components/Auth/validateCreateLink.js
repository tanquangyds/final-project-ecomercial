export default function validateCreateLink(values) {
  let errors = {};
  //Description Errors
  if (!values.description) {
    errors.description = "description required";
  } else if (values.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  //URL Errors
  if (!values.url) {
    errors.url = "url required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "url must be valid";
  }

  return errors;
}
