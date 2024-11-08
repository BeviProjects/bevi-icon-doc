import { useCallback } from 'react';

const useCopySvgToClipboard = () => {
	const copySvgToClipboard = useCallback(
		async (svgElement: SVGSVGElement | null) => {
			if (svgElement) {
				try {
					// Copia o conteúdo HTML do SVG para a área de transferência
					await navigator.clipboard.writeText(svgElement.outerHTML);
					alert('SVG copiado para a área de transferência!');
				} catch (error) {
					console.error('Erro ao copiar o SVG:', error);
				}
			} else {
				console.warn('Elemento SVG não encontrado.');
			}
		},
		[],
	);

	return copySvgToClipboard;
};

export default useCopySvgToClipboard;
