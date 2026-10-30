import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  return React.useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches,
    () => false,
  )
}
