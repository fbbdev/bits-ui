import type { HTMLDivAttributes } from "$lib/internal/index.js";
import type { Props as MenubarProps } from "./_types.js";
import type {
	Props as MenuProps,
	SubProps,
	ItemProps,
	ArrowProps,
	GroupProps,
	LabelProps,
	MenubarTriggerProps as TriggerProps,
	ContentProps,
	RadioItemProps,
	SeparatorProps,
	RadioGroupProps,
	SubContentProps,
	SubTriggerProps,
	CheckboxItemProps,
	CheckboxIndicatorProps,
	//
	MenubarTriggerEvents as TriggerEvents,
	ItemEvents,
	SubTriggerEvents,
	CheckboxItemEvents,
	RadioItemEvents,
	ContentEvents,
	SubContentEvents
} from "$lib/bits/menu/types.js";

type Props = MenubarProps & HTMLDivAttributes;

export type {
	Props,
	SubProps,
	MenuProps,
	ItemProps,
	ArrowProps,
	GroupProps,
	LabelProps,
	TriggerProps,
	ContentProps,
	RadioItemProps,
	SeparatorProps,
	RadioGroupProps,
	SubContentProps,
	SubTriggerProps,
	CheckboxItemProps,
	CheckboxIndicatorProps,
	//
	Props as MenubarProps,
	SubProps as MenubarSubProps,
	MenuProps as MenubarMenuProps,
	ItemProps as MenubarItemProps,
	ArrowProps as MenubarArrowProps,
	GroupProps as MenubarGroupProps,
	LabelProps as MenubarLabelProps,
	ContentProps as MenubarContentProps,
	TriggerProps as MenubarTriggerProps,
	RadioItemProps as MenubarRadioItemProps,
	SeparatorProps as MenubarSeparatorProps,
	SubContentProps as MenubarSubContentProps,
	SubTriggerProps as MenubarSubTriggerProps,
	RadioGroupProps as MenubarRadioGroupProps,
	CheckboxItemProps as MenubarCheckboxItemProps,
	CheckboxIndicatorProps as MenubarCheckboxIndicatorProps,
	//
	ItemEvents,
	TriggerEvents,
	ContentEvents,
	RadioItemEvents,
	SubTriggerEvents,
	SubContentEvents,
	CheckboxItemEvents,
	//
	ItemEvents as MenubarItemEvents,
	ContentEvents as MenubarContentEvents,
	TriggerEvents as MenubarTriggerEvents,
	RadioItemEvents as MenubarRadioItemEvents,
	SubTriggerEvents as MenubarSubTriggerEvents,
	SubContentEvents as MenubarSubContentEvents,
	CheckboxItemEvents as MenubarCheckboxItemEvents
};
