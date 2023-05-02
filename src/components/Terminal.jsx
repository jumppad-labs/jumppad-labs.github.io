import {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'

function TerminalBar({ toggle }) {
  return (
    <div 
        className="flex-none cursor-pointer w-full py-2 px-3 border-t border-b border-zinc-400/10 bg-zinc-800 text-zinc-400"
        onClick={toggle}
      >Terminal</div>
  )
}

export function Terminal() {
  let [collapsed, setCollapsed] = useState(true)
  
  return (
    <div 
      className={clsx(
        'fixed transition-height transform duration-300 overflow-hidden ease-in-out flex flex-col align-items-start z-50 inset-x-0 bottom-0',
        collapsed
        ? 'h-10'
        : 'h-screen'
      )}
      
    >
      <TerminalBar toggle={() => {setCollapsed(!collapsed)}} />
      <div className={clsx('grow w-full bg-zinc-900', collapsed ? 'opacity-0' : 'opacity-100')}>terminal</div>
    </div>
  )
}