'use client';
import { useCallback, useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useQueryParams() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Esta função continua a mesma, pois é uma utilidade para criar a query string
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);
			return params.toString();
		},
		[searchParams],
	);

	// Esta função continua a mesma, pois é uma utilidade para remover parâmetros
	const removeQueryString = useCallback(
		(name: string) => {
			const params = new URLSearchParams(searchParams);
			params.delete(name);
			return params.toString();
		},
		[searchParams],
	);

	// Aqui está a principal mudança - usando history.replaceState
	const navigateWithQuery = useCallback(
		(queryName: string, queryValue?: string) => {
			const newQueryString = queryValue
				? createQueryString(queryName, queryValue)
				: removeQueryString(queryName);

			const newUrl = newQueryString
				? `${pathname}?${newQueryString}`
				: pathname;

			// Usando replaceState para atualizar a URL sem causar rolagem
			window.history.replaceState(null, '', newUrl);
		},
		[pathname, createQueryString, removeQueryString],
	);

	// O processamento dos parâmetros continua o mesmo
	const queryParams = useMemo(() => {
		const params = new URLSearchParams(searchParams);
		return Object.fromEntries(params.entries());
	}, [searchParams]);

	return {
		queryParams,
		createQueryString,
		removeQueryString,
		navigateWithQuery,
	};
}
