import { Link } from 'react-router-dom'

import { Icon } from '@/shared/ui'

export const RegistrationFooter = () => {
  return (
    <div className="flex gap-2 items-start bg-white pt-3 pb-2.5 border-t border-t-black/[.05]">
      {/*<img className="relative top-1" src="./images/check.svg" alt="" />*/}
      <Icon className="relative top-1 w-3 h-3 flex-none" type="check" />
      <p className="text-xs">
        Нажимая «Регистрация», вы подтверждаете, что ознакомлены, полностью
        согласны и принимаете условия{' '}
        <Link className="underline hover:text-blue" to="/terms">
          «Соглашения об оказании услуг по содействию в трудоустройстве
          (оферта)»
        </Link>
      </p>
    </div>
  )
}
