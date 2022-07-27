import { StyledButton } from "./Button.styles";

const Button = (props) => {
  return <StyledButton className={props.outline ? 'outline' : ''} {...props} />;
}

export default Button;