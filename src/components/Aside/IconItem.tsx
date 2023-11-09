import { IconBaseProps } from 'react-icons'
import {
  FaHouseChimney,
  FaUser,
  FaBook,
  FaPhone,
  FaBriefcase,
  FaGamepad,
  FaMedal,
  FaGuitar,
} from 'react-icons/fa6'

export interface IconAsideProps extends IconBaseProps {
  type:
    | 'FaHouseChimney'
    | 'FaUser'
    | 'FaBook'
    | 'FaPhone'
    | 'FaBriefcase'
    | 'FaGamepad'
    | 'FaMedal'
    | 'FaGuitar'
}

export default function IconItem({ type, ...props }: IconAsideProps) {
  const icon = () => {
    switch (type) {
      case 'FaHouseChimney':
        return <FaHouseChimney {...props} />
      case 'FaBook':
        return <FaBook {...props} />
      case 'FaUser':
        return <FaUser {...props} />
      case 'FaPhone':
        return <FaPhone {...props} />
      case 'FaBriefcase':
        return <FaBriefcase {...props} />
      case 'FaGamepad':
        return <FaGamepad {...props} />
      case 'FaMedal':
        return <FaMedal {...props} />
      case 'FaGuitar':
        return <FaGuitar {...props} />
    }
  }
  return <div>{icon()}</div>
}
