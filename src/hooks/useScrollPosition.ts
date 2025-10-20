import { useState } from "react"

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	return [scrollPosition, setScrollPosition] as const
}
