import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowUpDown,
	Check,
	ChevronDown,
	Image,
	MessageCircle,
	Search,
	Video,
	Volume2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "../../../translations/translationContext";
import ScriptList from "./feed";

type SortValue =
	| "recommended"
	| "recent"
	| "updated"
	| "downloads"
	| "alphabetical";

type SortOption = {
	value: SortValue;
	label: string;
	orderBy?: string | null;
	orderType?: "asc" | "desc" | null;
};

export default function SearchBar() {
	const { t } = useTranslation();
	const [search, setSearch] = useState("");
	const [type, setType] = useState("");
	const [sort, setSort] = useState<SortValue>("recommended");
	const [isSortOpen, setIsSortOpen] = useState(false);
	const sortRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!isSortOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
				setIsSortOpen(false);
			}
		};

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsSortOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeydown);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeydown);
		};
	}, [isSortOpen]);

	const sortOptions = useMemo<SortOption[]>(() => {
		return [
			{
				value: "recommended",
				label: t("search.sort.options.recommended"),
				orderBy: null,
				orderType: null,
			},
			{
				value: "recent",
				label: t("search.sort.options.recent"),
				orderBy: "created_at",
				orderType: "desc",
			},
			{
				value: "updated",
				label: t("search.sort.options.updated"),
				orderBy: "updated_at",
				orderType: "desc",
			},
			{
				value: "downloads",
				label: t("search.sort.options.downloads"),
				orderBy: "downloads",
				orderType: "desc",
			},
			{
				value: "alphabetical",
				label: t("search.sort.options.alphabetical"),
				orderBy: "name",
				orderType: "asc",
			},
		];
	}, [t]);

	const selectedSort = useMemo<SortOption>(() => {
		return (
			sortOptions.find((option) => option.value === sort) ?? sortOptions[0]
		);
	}, [sort, sortOptions]);

	const sortParams = useMemo(() => {
		const params: Record<string, string> = {};
		if (selectedSort.orderBy) {
			params.order_by = selectedSort.orderBy;
			params.order_type = selectedSort.orderType ?? "desc";
		}
		return params;
	}, [selectedSort]);

	const normalizedSearch = search.trim();
	const encodedSearch = encodeURIComponent(normalizedSearch);
	const encodedType = encodeURIComponent(type);

	const buildEndpoint = (
		base: string,
		extraParams: Record<string, string | undefined> = {},
	) => {
		const params = new URLSearchParams();
		const combined = { ...extraParams, ...sortParams };
		Object.entries(combined).forEach(([key, value]) => {
			if (value && value.length > 0) {
				params.set(key, value);
			}
		});
		const queryString = params.toString();
		return queryString ? `${base}?${queryString}` : base;
	};

	const exploreEndpoint = buildEndpoint("/db/explore");
	const searchNameEndpoint =
		normalizedSearch.length > 0
			? buildEndpoint(`/db/search/name/${encodedSearch}`)
			: null;
	const searchTypeEndpoint =
		type.length > 0 ? buildEndpoint(`/db/search/type/${encodedType}`) : null;
	const searchNameTypeEndpoint =
		normalizedSearch.length > 0 && type.length > 0
			? buildEndpoint(`/db/search/type/${encodedType}`, {
					q: normalizedSearch,
			  })
			: null;

	function handleType(name: string) {
		if (type === name) {
			setType("");
			return;
		}
		setType(name);
	}

	return (
		<div className="h-full min-h-screen">
			<div className="w-full h-full space-y-4 mb-4">
				<div className="flex flex-col gap-3 sm:flex-row">
					<div className="relative flex-1">
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder={t("search.placeholder")}
							className="w-full h-10 text-sm text-white 
                            bg-gradient-to-r from-[#BCB1E7]/5 to-[#080808]/10
                            border border-white/5 hover:border-white/20 rounded-lg px-4 pr-10 hover:shadow-lg
                            placeholder:text-neutral-400 
                            focus:outline-none focus:border-white/20
                            active:border-white/20 active:outline-none"
						/>
						<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none text-neutral-400" />
					</div>
					<div ref={sortRef} className="relative sm:w-64">
						<button
							type="button"
							onClick={() => setIsSortOpen((prev) => !prev)}
							className="flex h-10 w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-neutral-200 transition-colors duration-200 hover:bg-white/10 focus:outline-none cursor-pointer"
						>
							<span className="flex items-center gap-2">
								<ArrowUpDown className="w-4 h-4" />
								<span>{t("search.sort.label")}</span>
							</span>
							<span className="flex items-center gap-1 text-neutral-300">
								<span className="max-w-[8rem] truncate text-xs sm:text-sm">
									{selectedSort.label}
								</span>
								<motion.div
									animate={{ rotate: isSortOpen ? 180 : 0 }}
									transition={{ duration: 0.15 }}
								>
									<ChevronDown className="w-4 h-4" />
								</motion.div>
							</span>
						</button>
						<AnimatePresence>
							{isSortOpen && (
								<motion.div
									key="sort-menu"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 6 }}
									exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
									transition={{ duration: 0.15 }}
									className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-white/10 bg-[#2e2d32]/90 p-2 shadow-lg backdrop-blur-md"
								>
									<div className="flex flex-col gap-1">
										{sortOptions.map((option) => (
											<button
												type="button"
												key={option.value}
												onClick={() => {
													setSort(option.value);
													setIsSortOpen(false);
												}}
												className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
													option.value === selectedSort.value
														? "bg-white/20 text-white"
														: "text-neutral-300 hover:bg-white/10 hover:text-white"
												}`}
											>
												<span className="truncate">
													{option.label}
												</span>
												{option.value === selectedSort.value && (
													<Check className="w-4 h-4" />
												)}
											</button>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				<div className="flex flex-wrap gap-3">
					<button
						onClick={() => handleType("audio")}
						type="button"
						className={`flex-1 min-w-[110px] px-6 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
							type === "audio"
								? "bg-gradient-to-r from-[#BCB1E7]/20 to-[#BCB1E7]/10 border border-[#BCB1E7]/30 text-[#BCB1E7] shadow-lg"
								: "border border-white/10 text-neutral-400 hover:bg-gradient-to-r hover:from-[#BCB1E7]/10 hover:to-[#BCB1E7]/5 hover:border-[#BCB1E7]/20 hover:text-[#BCB1E7]"
						}`}
					>
						<div className="flex items-center gap-2 justify-center">
							<Volume2 className="w-4 h-4" />
							{t("search.filters.audio")}
						</div>
					</button>
					<button
						onClick={() => handleType("image")}
						type="button"
						className={`flex-1 min-w-[110px] px-6 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
							type === "image"
								? "bg-gradient-to-r from-[#BCB1E7]/20 to-[#BCB1E7]/10 border border-[#BCB1E7]/30 text-[#BCB1E7] shadow-lg"
								: "border border-white/10 text-neutral-400 hover:bg-gradient-to-r hover:from-[#BCB1E7]/10 hover:to-[#BCB1E7]/5 hover:border-[#BCB1E7]/20 hover:text-[#BCB1E7]"
						}`}
					>
						<div className="flex items-center gap-2 justify-center">
							<Image className="w-4 h-4" />
							{t("search.filters.image")}
						</div>
					</button>
					<button
						onClick={() => handleType("video")}
						type="button"
						className={`flex-1 min-w-[110px] px-6 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
							type === "video"
								? "bg-gradient-to-r from-[#BCB1E7]/20 to-[#BCB1E7]/10 border border-[#BCB1E7]/30 text-[#BCB1E7] shadow-lg"
								: "border border-white/10 text-neutral-400 hover:bg-gradient-to-r hover:from-[#BCB1E7]/10 hover:to-[#BCB1E7]/5 hover:border-[#BCB1E7]/20 hover:text-[#BCB1E7]"
						}`}
					>
						<div className="flex items-center gap-2 justify-center">
							<Video className="w-4 h-4" />
							{t("search.filters.video")}
						</div>
					</button>
					<button
						onClick={() => handleType("chat")}
						type="button"
						className={`flex-1 min-w-[110px] px-6 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
							type === "chat"
								? "bg-gradient-to-r from-[#BCB1E7]/20 to-[#BCB1E7]/10 border border-[#BCB1E7]/30 text-[#BCB1E7] shadow-lg"
								: "border border-white/10 text-neutral-400 hover:bg-gradient-to-r hover:from-[#BCB1E7]/10 hover:to-[#BCB1E7]/5 hover:border-[#BCB1E7]/20 hover:text-[#BCB1E7]"
						}`}
					>
						<div className="flex items-center gap-2 justify-center">
							<MessageCircle className="w-4 h-4" />
							{t("search.filters.chat")}
						</div>
					</button>
				</div>
			</div>
			{!normalizedSearch && !type && (
				<ScriptList endpoint={exploreEndpoint} type="explore" />
			)}
			{normalizedSearch && !type && searchNameEndpoint && (
				<ScriptList endpoint={searchNameEndpoint} type="search_name" />
			)}
			{!normalizedSearch && type && searchTypeEndpoint && (
				<ScriptList endpoint={searchTypeEndpoint} type="search_type" />
			)}
			{normalizedSearch && type && searchNameTypeEndpoint && (
				<ScriptList
					endpoint={searchNameTypeEndpoint}
					type="search_name_type"
				/>
			)}
		</div>
	);
}
