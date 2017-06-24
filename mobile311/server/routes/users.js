import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data){
  let errors = {};

  if(Validator.isEmpty(data.username)){
    errors.username = "This field is required";
  }
  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }
  if(Validator.isEmpty(data.email)){
    errors.email = "This field is required";
  }
  //need password confirmation field
  if(Validator.isEmpty(data.password)){
    errors.password = "This field is required";
  }
  if(Validator.isEmpty(data.state)){
    errors.state = "This field is required";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
