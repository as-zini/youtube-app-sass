import React, { useContext } from 'react'
import { ImSearch, ImSearch as SearchIcon} from 'react-icons/im';
import {MdKeyboardVoice, MdKeyboardVoice as VoiceIcon} from 'react-icons/md';
import useWindowSize from '../../../helpers/useWindowSize';
import {BiArrowBack} from 'react-icons/bi';
import { SearchContext } from '../../../context/SearchContext';
 
const SearchBar = () => {
  const {width} = useWindowSize();
  const {setShowSpecialSearchBar} = useContext(SearchContext)
  

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {width > 640 ? (<form>
        <input type='text' name='search' placeholder='Search'/>
        <button type='submit'>
          <SearchIcon size={20}/>
        </button>
      </form>):
      <button className='icon-container searchIcon' onClick={() => setShowSpecialSearchBar(true)}>
        <ImSearch size={20}/>
      </button>}
      <button className='icon-container voiceIcon'>
        <VoiceIcon size={25}/>
      </button>
    </div>
  )
}

export default SearchBar