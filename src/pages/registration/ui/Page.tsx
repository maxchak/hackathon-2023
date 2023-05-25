import { AuthHeader } from '@/shared/ui'
import { RegistrationFooter, RegistrationForm } from '@/features/Registration'

export const RegistrationPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <AuthHeader />
      <div className="grow flex items-center">
        <div className="w-full">
          <h1 className="text-center my-8">Регистрация</h1>
          <RegistrationForm />
        </div>
      </div>
      <RegistrationFooter />
    </div>
  )
}
