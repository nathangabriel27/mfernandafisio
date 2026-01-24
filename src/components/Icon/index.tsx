import type { LucideIcon } from 'lucide-react'
import { Menu, MessageCircle, Moon, PhoneCall, Sun, X } from 'lucide-react'
import type { IconName } from '../../types/icon'

const iconMap: Record<IconName, LucideIcon> = {
  sun: Sun,
  moon: Moon,
  menu: Menu,
  x: X,
  messageCircle: MessageCircle,
  phoneCall: PhoneCall,
}

type IconProps = {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
}

const Icon = ({ name, size = 20, strokeWidth, className }: IconProps) => {
  const IconComponent = iconMap[name]
  return (
    <IconComponent
      size={size}
      className={['icon', className].filter(Boolean).join(' ')}
      strokeWidth={strokeWidth}
      aria-hidden='true'
      focusable='false'
    />
  )
}

export type { IconName }
export default Icon
