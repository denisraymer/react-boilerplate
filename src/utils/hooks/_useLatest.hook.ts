import { MutableRefObject, useLayoutEffect, useRef } from "react"

export function useLatest<T>(value: T): MutableRefObject<T> {
  const latest = useRef(value)

  useLayoutEffect(() => {
    latest.current = value
  }, [value])

  return latest
}
