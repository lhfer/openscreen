import { useEffect, useState } from "react";
import { LaunchWindow } from "./components/launch/LaunchWindow";
import { SourceSelector } from "./components/launch/SourceSelector";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ShortcutsConfigDialog } from "./components/video-editor/ShortcutsConfigDialog";
import VideoEditor from "./components/video-editor/VideoEditor";
import { ShortcutsProvider } from "./contexts/ShortcutsContext";
import { loadAllCustomFonts } from "./lib/customFonts";

export default function App() {
	const [windowType, setWindowType] = useState("");

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const type = params.get("windowType") || "";
		setWindowType(type);
		if (type === "hud-overlay" || type === "source-selector") {
			document.body.style.background = "transparent";
			document.documentElement.style.background = "transparent";
			document.getElementById("root")?.style.setProperty("background", "transparent");
		}

		// Load custom fonts on app initialization
		loadAllCustomFonts().catch((error) => {
			console.error("Failed to load custom fonts:", error);
		});
	}, []);

	const content = (() => {
		switch (windowType) {
			case "hud-overlay":
				return <LaunchWindow />;
			case "source-selector":
				return <SourceSelector />;
			case "editor":
				return (
					<ShortcutsProvider>
						<VideoEditor />
						<ShortcutsConfigDialog />
					</ShortcutsProvider>
				);
			default:
				return (
					<div className="w-full h-full bg-[#0a0a0f] text-white flex flex-col items-center justify-center gap-8">
						<img
							src="icons/icons/png/256x256.png"
							alt="ScreenCut"
							className="w-24 h-24 rounded-2xl shadow-lg"
							draggable={false}
						/>
						<div className="text-center">
							<h1 className="text-3xl font-bold text-white">ScreenCut</h1>
							<p className="text-base text-white/50 mt-2">屏幕剪辑 — 精致录屏，轻松创作</p>
							<p className="text-xs text-white/20 mt-6">
								基于 <span className="text-white/30">OpenScreen</span> 开源项目
							</p>
						</div>
					</div>
				);
		}
	})();

	return (
		<TooltipProvider>
			{content}
			<Toaster theme="dark" className="pointer-events-auto" />
		</TooltipProvider>
	);
}
