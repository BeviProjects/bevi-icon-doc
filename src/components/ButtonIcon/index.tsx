"use client"
import { BvIcon } from "bevi-icon"
import { useDrawer } from "@/hooks/useDrawer"
import { useIconVariant } from "@/hooks/useIconVariant"
import { useIconWeight } from "@/hooks/useIconWeight"
import { useQueryParams } from "@/hooks/useQueryParams"
import type { Variants, Weights } from "@/types/icons"

type ButtonIconProps = {
	id: string
	name: string
	initialWeight?: Weights
	initialVariant?: Variants
}

export const ButtonIcon = ({ id, name }: ButtonIconProps) => {
	const { navigateWithQuery } = useQueryParams()
	const { openDrawer } = useDrawer()

	const { weight } = useIconWeight()
	const { variant } = useIconVariant()

	const handleIconSelect = (id: string) => {
		openDrawer()
		navigateWithQuery("icon", id)
	}

	return (
		<button
			type="button"
			title={name}
			onClick={() => handleIconSelect(id)}
			className="w-100 ds-flex-center p-block-04 p-inline-02 bgc-primary-03 radius-sm"
		>
			<BvIcon
				name={id}
				title={name}
				variant={variant}
				size={4}
				weight={weight}
				className={`color-${variant === "light" ? "primary-02" : "primary-01"}`}
			/>
		</button>
	)
}
