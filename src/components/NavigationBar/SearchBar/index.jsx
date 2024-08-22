import React from 'react'
import { ImSearch as SearchIcon} from 'react-icons/im';
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md';
const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <form>
        <input type='text' name='search' placeholder='Search'/>
        <button type='submit'>
          <SearchIcon size={20}/>
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <VoiceIcon size={25}/>
      </button>
    </div>
  )
}

export default SearchBar