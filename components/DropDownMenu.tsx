"use client"

import * as React from "react";

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

export function DropdownMenuRadioGroupDemo({title, items}: {title: string, items: string[]}) {
	const [selectedItem, setSelectedItem] = React.useState<string | undefined>(undefined);

	return (
		<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<div>
				<div className="text-sm text-gray-500">{selectedItem ? title : ''}</div> {/* Title above button */}
				<Button variant="outline">{selectedItem || `${title}`}</Button> {/* Show selected item or default title */}
			</div>
		</DropdownMenuTrigger>

		<DropdownMenuContent className="w-56">
			<DropdownMenuLabel>{title}</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuRadioGroup value={selectedItem} onValueChange={setSelectedItem}>
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

export default DropdownMenuRadioGroupDemo