"use client"
import { useCallback, useEffect, useState } from "react"
import { Drawer } from "vaul"
import { useDrawer } from "@/hooks/useDrawer"
import { useQueryParams } from "@/hooks/useQueryParams"
import type { IconData } from "@/types/icons"
import { allIconsSorted } from "@/utils/icons"
import { Content } from "./Content"
import { Skeleton } from "./Skeleton"

export const IconShow = () => {
	const { navigateWithQuery, queryParams } = useQueryParams()
	const [searchResult, setSearchResult] = useState<IconData | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const { isOpen, closeDrawer, openDrawer } = useDrawer()

	const searchIcon = useCallback(() => {
		setIsLoading(true)
		try {
			const foundIcon =
				allIconsSorted.find((icon) => icon.id === queryParams.icon) || null
			setSearchResult(foundIcon)
		} finally {
			setIsLoading(false)
		}
	}, [queryParams.icon])

	const handleOnChange = (open: boolean) => {
		if (!open) {
			navigateWithQuery("icon")
			closeDrawer()
			setSearchResult(null)
		}
	}

	useEffect(() => {
		if (queryParams.icon) {
			openDrawer(queryParams.icon)
			searchIcon()
		} else {
			closeDrawer()
			setSearchResult(null)
		}
	}, [queryParams, openDrawer, closeDrawer, searchIcon])

	return (
		<Drawer.Root
			open={isOpen}
			onOpenChange={(open) => handleOnChange(open)}
			shouldScaleBackground
		>
			<Drawer.Portal>
				<Drawer.Overlay className="ps-fixed inset-00 bg-black-40 z-index-07" />
				<Drawer.Content className="ps-fixed bottom-00 left-00 right-00 bgc-primary-03 pt-06 pb-16 radius-md z-index-08">
					<Drawer.Handle />
					<div className="bv-container-sm pt-06 ds-flex-start flow-col-nw gap-sm">
						<Drawer.Title className="ds-none">{queryParams.icon}</Drawer.Title>
						<Drawer.Description className="ds-none">
							Icon {queryParams.icon}
						</Drawer.Description>
						{isLoading ? (
							<Skeleton />
						) : searchResult ? (
							<Content icon={searchResult} />
						) : null}
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	)
}
