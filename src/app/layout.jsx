import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				{children}

				{/* Simple scroll-based reveal: adds `in-view` to .scroll-reveal elements */}
				<script dangerouslySetInnerHTML={{ __html: `
					(function(){
						if (typeof window === 'undefined') return;
						let ticking = false;

						function revealOnceOrToggle(el, visible){
							if(visible){
								el.classList.add('in-view');
								return;
							}
							// if element opted-in to remain once visible, don't remove
							if(el.dataset.scrollOnce === 'true') return;
							el.classList.remove('in-view');
						}

						function checkReveal(){
							const els = document.querySelectorAll('.scroll-reveal');
							const vh = window.innerHeight || document.documentElement.clientHeight;
							els.forEach(el => {
								const rect = el.getBoundingClientRect();
								const offset = parseFloat(el.dataset.revealOffset || '0.15');
								const threshold = vh * (1 - offset);
								const isVisible = rect.top <= threshold && rect.bottom >= 0;
								revealOnceOrToggle(el, isVisible);
							});
							ticking = false;
						}

						function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(checkReveal); } }

						document.addEventListener('DOMContentLoaded', function(){
							checkReveal();
							window.addEventListener('scroll', onScroll, { passive: true });
							window.addEventListener('resize', onScroll);
						});
					})();
				` }} />
			</body>
		</html>
	);
}