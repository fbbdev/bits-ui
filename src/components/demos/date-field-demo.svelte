<script lang="ts">
	import { DateField } from "$lib";
</script>

<DateField.Root>
	<div class="flex w-full max-w-[232px] flex-col gap-1.5">
		<DateField.Label class="block select-none text-sm font-medium">Birthday</DateField.Label>
		<DateField.Input
			let:segments
			class="flex h-input w-full max-w-[232px] select-none items-center rounded-input border border-border-input bg-background px-2 py-3 text-sm tracking-[0.01em] text-foreground focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
		>
			{#each segments as { part, value }}
				<div class="inline-block select-none">
					{#if part === "literal"}
						<DateField.Segment {part} class="p-1 text-muted-foreground">
							{value}
						</DateField.Segment>
					{:else}
						<DateField.Segment
							{part}
							class="rounded-5px px-1 py-1 hover:bg-muted focus:bg-muted focus:text-foreground focus-visible:!ring-0 focus-visible:!ring-offset-0 aria-[valuetext=Empty]:text-muted-foreground"
						>
							{value}
						</DateField.Segment>
					{/if}
				</div>
			{/each}
		</DateField.Input>
	</div>
</DateField.Root>
