import { Form, FormGroup, Label, Input } from "reactstrap";

const MyForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="firstName">First Name:</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name:</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password:</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
        />
      </FormGroup>
      <button type="submit" className="btn btn-primary bnt1">
        Submit
      </button>
    </Form>
  );
};

export default MyForm;
