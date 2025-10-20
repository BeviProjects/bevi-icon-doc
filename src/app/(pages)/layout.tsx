import type { ReactNode } from "react"
import { ClientBoundary } from "@/components/ClientBoundary"
import { IconShow } from "@/components/IconShow"
import { DrawerProvider } from "@/contexts/DrawerContext"
import { IconVariantProvider } from "@/contexts/IconVariantContext"
import { IconWeightProvider } from "@/contexts/IconWeightContext"

type IconLayoutProps = {
	children: ReactNode
}

const IconLayoutContent = ({ children }: IconLayoutProps) => {
	return (
		<main
			className="ds-flex flow-col-nw gap-xs pb-16 bgc-gray-95"
			data-vaul-drawer-wrapper="true"
		>
			{children}
			<ClientBoundary>
				<IconShow />
			</ClientBoundary>
		</main>
	)
}

const IconLayout = ({ children }: IconLayoutProps) => {
	return (
		<DrawerProvider>
			<IconVariantProvider>
				<IconWeightProvider>
					<IconLayoutContent>{children}</IconLayoutContent>
				</IconWeightProvider>
			</IconVariantProvider>
		</DrawerProvider>
	)
}

export default IconLayout
