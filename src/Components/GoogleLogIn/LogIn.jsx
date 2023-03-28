import { Button } from "@chakra-ui/react";
import React from "react";
import { ImGoogle } from "react-icons/im";
export default function SignUp() {
  return (
    <div>
      <a className="enlace" href="http://localhost:3001/auth/google">
        <Button>
          <ImGoogle color="#07588a" />
          &nbsp;&nbsp;inicio de sesion con google
        </Button>
      </a>
    </div>
  );
}
