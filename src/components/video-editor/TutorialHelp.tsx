import { ArrowRight, HelpCircle, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useScopedT } from "@/contexts/I18nContext";

export function TutorialHelp() {
	const t = useScopedT("dialogs");
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="h-7 px-2 text-xs text-slate-400 hover:text-slate-200 hover:bg-white/10 transition-all gap-1.5"
				>
					<HelpCircle className="w-3.5 h-3.5" />
					<span className="font-medium">{t("tutorial.triggerLabel")}</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-lg bg-[#09090b] border-white/10 [&>button]:text-slate-400 [&>button:hover]:text-white overflow-y-auto max-h-[85vh]">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold text-slate-200 flex items-center gap-2">
						<Scissors className="w-5 h-5 text-[#ef4444]" /> {t("tutorial.title")}
					</DialogTitle>
					<DialogDescription className="text-slate-400 text-sm">
						{t("tutorial.description")}
					</DialogDescription>
				</DialogHeader>
				<div className="mt-3 space-y-5">
					{/* Explanation */}
					<div className="bg-white/5 rounded-lg p-3 border border-white/5">
						<p className="text-sm text-slate-300 leading-relaxed">
							{t("tutorial.explanation")}
							<span className="text-[#ef4444] font-bold">{t("tutorial.explanationRemove")}</span>
							{t("tutorial.explanationEnd")}
						</p>
					</div>
					{/* Visual Illustration */}
					<div className="space-y-2">
						<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
							{t("tutorial.visualExample")}
						</h3>
						<div className="relative h-20 bg-black rounded-lg border border-white/10 flex items-center px-3 overflow-hidden select-none">
							<div className="absolute inset-x-3 h-1.5 bg-slate-700 rounded-full" />
							<div
								className="absolute left-[20%] h-7 bg-[#ef4444]/20 border border-[#ef4444]/60 rounded flex items-center justify-center z-10"
								style={{ width: "20%" }}
							>
								<span className="text-[9px] font-bold text-[#ef4444]">{t("tutorial.removed")}</span>
							</div>
							<div
								className="absolute left-[65%] h-7 bg-[#ef4444]/20 border border-[#ef4444]/60 rounded flex items-center justify-center z-10"
								style={{ width: "15%" }}
							>
								<span className="text-[9px] font-bold text-[#ef4444]">{t("tutorial.removed")}</span>
							</div>
							<div className="absolute left-[6%] bottom-1 text-[9px] text-slate-500">
								{t("tutorial.kept")}
							</div>
							<div className="absolute left-[44%] bottom-1 text-[9px] text-slate-500">
								{t("tutorial.kept")}
							</div>
							<div className="absolute left-[84%] bottom-1 text-[9px] text-slate-500">
								{t("tutorial.kept")}
							</div>
						</div>
						<div className="flex justify-center">
							<ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
						</div>
						<div className="relative h-10 bg-black rounded-lg border border-white/10 flex items-center justify-center gap-1 px-3 select-none">
							<div
								className="h-6 bg-slate-700 rounded flex items-center justify-center"
								style={{ width: "30%" }}
							>
								<span className="text-[9px] text-white/70 font-medium">{t("tutorial.part1")}</span>
							</div>
							<div
								className="h-6 bg-slate-700 rounded flex items-center justify-center"
								style={{ width: "30%" }}
							>
								<span className="text-[9px] text-white/70 font-medium">{t("tutorial.part2")}</span>
							</div>
							<div
								className="h-6 bg-slate-700 rounded flex items-center justify-center"
								style={{ width: "30%" }}
							>
								<span className="text-[9px] text-white/70 font-medium">{t("tutorial.part3")}</span>
							</div>
						</div>
						<p className="text-[10px] text-slate-500 text-center">↑ {t("tutorial.finalVideo")}</p>
					</div>
					{/* Steps */}
					<div className="grid grid-cols-2 gap-3">
						<div className="p-3 rounded-lg bg-white/5 border border-white/5">
							<div className="text-[#ef4444] font-bold text-sm mb-1">
								{t("tutorial.step1Title")}
							</div>
							<p className="text-xs text-slate-400 leading-relaxed">
								{t("tutorial.step1Description")}
							</p>
						</div>
						<div className="p-3 rounded-lg bg-white/5 border border-white/5">
							<div className="text-[#ef4444] font-bold text-sm mb-1">
								{t("tutorial.step2Title")}
							</div>
							<p className="text-xs text-slate-400 leading-relaxed">
								{t("tutorial.step2Description")}
							</p>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
