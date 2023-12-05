import LoginModalAvater from '@components/icons/LoginModalAvater'
import { Button } from '@components/ui'

const LoginView = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg text-center px-2">
      <LoginModalAvater />
      <div className="space-y-4">
        <p className="text-xl text-accent-7 font-medium">Login/Signup</p>
        <p className="text-lg text-accent-3">
          Please login or signup to see profile
        </p>
      </div>
      <div className="flex justify-around items-center gap-6">
        <Button
          variant="light"
          type="submit"
          className="text-accent-5 border-accent-5 border text-lg py-1 hover:bg-primary hover:text-accent-5 rounded-xl px-5 md:px-8"
          // loading={loading}
          // disabled={disabled}
        >
          Signup
        </Button>
        <Button
          variant="light"
          type="submit"
          className="text-accent-5 border-accent-5 border text-lg py-1 hover:bg-primary hover:text-accent-5 rounded-xl px-6 md:px-8"
          // loading={loading}
          // disabled={disabled}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginView
