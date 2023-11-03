
import { FC } from 'react';
import Image from 'next/image';
interface SearchButtonProps { }

export const SearchButton: FC<SearchButtonProps> = () => {
	return (<div className="flex items-center px-3 transition-opacity duration-300 ease-in-out border-2 border-gray-500 shadow-sm opacity-50 group rounded-3xl hover:opacity-100 focus-within:opacity-100">
		<input
			type="text"
			placeholder="Search..."
			className="focus:outline-none caret-transparent"
		/>
		<div className="py-2">
			<Image src='/icons/search.svg' alt='searchIcon' width={22} height={22} />
		</div>
	</div>)
}
