import { useState, useEffect } from 'react';

export function useGetWindowWidth() {
	const [width, setWidth] = useState<Number | undefined>();
	let mobile = false;
	let tablet = false;
	let desktop = false;

	useEffect(() => {
		const handleWindowResize = (): any => {
			const widths = [window.innerWidth];
			if (window.screen?.width) {
				widths.push(window.screen?.width);
			}
			setWidth(Math.min(...widths))};
		window.addEventListener('resize', handleWindowResize);
		handleWindowResize();
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	if (width && width < 768) mobile = true;
	else if (width && width < 1024) tablet = true;
	else desktop = true;

	return { width, mobile, tablet, desktop };
}
