import { SignUpModal } from "../modals/SignUpModal"
import { Button } from "../ui/button"


const SignUpButton = () => {
  return (
    <SignUpModal><Button variant="outline" size={'sm'}>Sign Up</Button></SignUpModal>
  )
}

export default SignUpButton