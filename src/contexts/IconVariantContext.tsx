"use client"
import { createContext, useState } from "react"
import type {
	IconVariantContextType,
	IconVariantProviderProps,
	Variants,
} from "@/types/icons"

export const IconVariantContext = createContext<IconVariantContextType>({
	variant: "duo",
	setVariant: () => {},
})

export const IconVariantProvider = ({ children }: IconVariantProviderProps) => {
	const [variant, setVariant] = useState<Variants>("duo")
	return (
		<IconVariantContext.Provider value={{ variant, setVariant }}>
			{children}
		</IconVariantContext.Provider>
	)
}
