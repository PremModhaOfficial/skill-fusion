import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"



export default function Search(props: any) {
    let { setSearch } = props
    let { results } = props

    return (
        <Command>
            <CommandInput
                onInput={e => setSearch(e.target.value)}
                placeholder="Type to search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {results?.map((result: any) => {
                        return <CommandItem
                            key={result.title}
                            onClick={() => setSearch(result)}
                        > {result.title}</CommandItem>
                    })}
                </CommandGroup>
                <CommandSeparator />
                { /* Shortcuts */
                    // TODO: Add shortcuts
                    // <CommandGroup heading="Settings">
                    //     <CommandItem>Profile</CommandItem>
                    //     <CommandItem>Billing</CommandItem>
                    //     <CommandItem>Settings</CommandItem>
                    // </CommandGroup>
                }
            </CommandList>
        </Command>
    )
}
