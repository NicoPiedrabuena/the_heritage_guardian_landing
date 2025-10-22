"use client";
import { useParams } from "next/navigation";
import Footer from "../../components/Footer";
import CountryNavbar from "../../components/CountryNavbar";
import { COUNTRY_TIMELINES } from "../../../countryData";
import React, { useEffect, useState } from "react";

export default function CountryScreen() {
	const params = useParams();
	const countryName = params?.name;

	// Normaliza el nombre para buscar en COUNTRY_TIMELINES
	const normalizedCountryName = countryName
		? countryName
			.split("-")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
			.join(" ")
		: "";

	const timelineData = COUNTRY_TIMELINES[normalizedCountryName] || [];

	// Fade transition state
	const [fade, setFade] = useState(false);

	useEffect(() => {
		setFade(false);
		const timeout = setTimeout(() => setFade(true), 60);
		return () => clearTimeout(timeout);
	}, [countryName]);

	return (
		<div
			style={{
				minHeight: "100vh", 
				display: "flex",
				flexDirection: "column",
				transition: "opacity 0.5s",
				opacity: fade ? 1 : 0,
			}}
		>
			{/* Banner con imagen completa y overlays */}
			<div
				style={{
					position: "relative",
					width: "100vw",
					left: "50%",
					right: "50%",
					marginLeft: "-50vw",
					marginRight: "-50vw",
					overflow: "hidden",
					padding: 0,
					border: "none",
				}}
			>
				<img
					src={`/banners/${countryName}.png`}
					alt=""
					style={{
						width: "100vw",
						height: "auto",
						display: "block",
						objectFit: "cover",
						margin: 0,
						padding: 0,
						border: "none",
						maxWidth: "100vw",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						zIndex: 10,
						background: "rgba(255,255,255,0.10)",
						backdropFilter: "blur(2px)",
					}}
				>
					<CountryNavbar />
				</div>
				<h1
					style={{
						color: "#fff",
						fontSize: 64,
						fontWeight: 800,
						letterSpacing: 1,
						textShadow: "0 4px 18px #000b",
						margin: 0,
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						background: "transparent",
						zIndex: 20,
						pointerEvents: "none",
						fontFamily: "serif",
						width: "100%",
						textAlign: "center",
					}}
				>
					{/* Sin countryName */}
				</h1>
			</div>
			{/* Descripción */}
			<div
				style={{
					textAlign: "center",
					margin: "32px auto 0",
					maxWidth: 700,
					color: "#5a3c22",
					fontSize: 18,
					fontWeight: 500,
					lineHeight: 1.5,
				}}
			>
				Here you can describe the country's cultural legacy, events, and
				collaborations.
				<br />
				(Replace this text with real content.)
			</div>
			{/* Timeline */}
			<div
				style={{
					display: "flex",
					justifyContent: "center", // <-- centra el timeline
					margin: "48px 0 32px 0",
					width: "100%",
				}}
			>
				<div
					style={{
						position: "relative",
						maxWidth: 1100,
						marginLeft: 0, // <-- elimina el margen izquierdo
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{/* Timeline vertical line con estilo vintage */}
					<div
						style={{
							position: "absolute",
							left: 120,
							top: 0,
							bottom: 0,
							width: 3,
							background: "linear-gradient(to bottom, #8b4513 0%, #5a3c22 50%, #8b4513 100%)",
							borderRadius: "2px",
							zIndex: 0,
							boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
						}}
					/>
					<div>
						{timelineData.map((item, idx) => (
							<div
								key={item.year}
								style={{
									display: "flex",
									alignItems: "flex-start",
									marginBottom:
										idx === timelineData.length - 1 ? 0 : 64,
									position: "relative",
									minHeight: 220,
								}}
							>
								{/* Year and dot */}
								<div
									style={{
										width: 160,
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-end",
										position: "relative",
										zIndex: 2,
									}}
								>
									<span
										style={{
											fontWeight: 900,
											fontSize: 32,
											color: "#2a2017",
											marginRight: 16,
											letterSpacing: 2,
											background: "rgba(255,255,255,0.9)",
											padding: "4px 12px",
											borderRadius: 8,
											position: "relative",
											zIndex: 3,
											fontFamily: "serif",
											boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
											border: "2px solid #8b4513",
										}}
									>
										{item.year}
									</span>
									<span
										style={{
											width: 24,
											height: 24,
											borderRadius: "50%",
											background: "linear-gradient(135deg, #8b4513, #5a3c22)",
											border: "4px solid #fff",
											display: "inline-block",
											position: "relative",
											zIndex: 2,
											boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
										}}
									/>
								</div>
								{/* Curved line SVG */}
								<div
									style={{
										width: 40,
										minWidth: 40,
										height: "100%",
										display: "flex",
										alignItems: "flex-start",
										justifyContent: "center",
										position: "relative",
										zIndex: 1,
									}}
								>
									<svg
										width="40"
										height="120"
										style={{
											position: "absolute",
											left: 0,
											top: 0,
											height: "100%",
										}}
									>
										<path
											d={
												idx < timelineData.length - 1
													? "M20 11 Q22 60 20 110"
													: ""
											}
											stroke="#bfa77a"
											strokeWidth="2"
											fill="none"
											style={{
												opacity:
													idx < timelineData.length - 1 ? 1 : 0,
											}}
										/>
									</svg>
								</div>
								{/* Card con estilo vintage */}
								<div  >
									{/* Imagen con efecto de papel rasgado */}
									<div
										style={{
											position: "relative",
											width: "100%",
											maxWidth: 400,
											marginBottom: 20,
										}}
									>
										<img
											src={item.image}
											alt={item.title}
											style={{
												width: "100%",
												borderRadius: 8,
												objectFit: "cover",
												filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
											}}
										/>
									</div>
									
									{/* Título principal */}
									<h3
										style={{
											fontWeight: 700,
											fontSize: 20,
											color: "#2a2017",
											marginBottom: 12,
											fontFamily: "serif",
										}}
									>
										{item.title}
									</h3>
									
									{/* Descripción con formato de lista */}
									<div
										style={{
											color: "#4d4a45",
											fontSize: 16,
											lineHeight: 1.6,
											fontFamily: "serif",
										}}
									>
										{item.description}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Botón y Footer */}
			<div style={{ textAlign: "center", margin: "24px 0 0 0" }}>
				<button
					onClick={() => {
						window.location.href = '/#cultural-map';
					}}
					style={{
						background: "#f4e8d3",
						color: "#5a3c22",
						border: "2px solid #5a3c22",
						borderRadius: "25px",
						padding: "12px 32px",
						fontWeight: 600,
						fontSize: 16,
						cursor: "pointer",
						fontFamily: "var(--font-family-primary)",
						transition: "all 0.3s ease",
						boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
					}}
					onMouseEnter={(e) => {
						e.target.style.background = "#5a3c22";
						e.target.style.color = "#f4e8d3";
					}}
					onMouseLeave={(e) => {
						e.target.style.background = "#f4e8d3";
						e.target.style.color = "#5a3c22";
					}}
				>
					Back to Cultural Map
				</button>
			</div>
			<Footer />
		</div>
	);
}