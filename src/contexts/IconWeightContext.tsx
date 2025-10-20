"use client"
import { createContext, useState } from "react"
import type {
	IconWeightContextType,
	IconWeightProviderProps,
	Weights,
} from "@/types/icons"

export const IconWeightContext = createContext<IconWeightContextType>({
	weight: 600,
	setWeight: () => {},
})

export const IconWeightProvider = ({ children }: IconWeightProviderProps) => {
	const [weight, setWeight] = useState<Weights>(600)

	return (
		<IconWeightContext.Provider value={{ weight, setWeight }}>
			{children}
		</IconWeightContext.Provider>
	)
}
