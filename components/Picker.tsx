"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Picker({title, items, onChange}: {title: string, items: string[], onChage: ({ item }: {item: string }) => {}}) {
	const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="w-full">{selectedItem || `${title}`}</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>{title}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={selectedItem} onValueChange={(value) => onChange(value)}>
				{items.map((item) => (
					<DropdownMenuRadioItem key={item} value={item}>
					{item}
					</DropdownMenuRadioItem>
				))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default Picker