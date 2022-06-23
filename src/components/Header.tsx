import logoImage from '../assets/images/logo.svg'
import { Sidebar } from './Sidebar'
import { Video } from './Video'

export function Header(){
    return( 
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
        <img src={logoImage} alt="logo do ignite lab" />
        </header>
        
    )
}